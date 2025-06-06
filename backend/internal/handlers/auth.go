package handlers

import (
	"encoding/json"
	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/your-username/travel-app/internal/database"
	"github.com/your-username/travel-app/internal/middleware"
	"github.com/your-username/travel-app/internal/models"
)

func Register(w http.ResponseWriter, r *http.Request) {
	var user models.UserRegistration
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}

	// Insert user into database
	db := database.GetDB()
	var userID int
	err = db.QueryRow(`
		INSERT INTO users (email, password_hash, first_name, last_name, created_at)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id
	`, user.Email, string(hashedPassword), user.FirstName, user.LastName, time.Now()).Scan(&userID)

	if err != nil {
		http.Error(w, "Error creating user", http.StatusInternalServerError)
		return
	}

	// Generate JWT token
	token, err := middleware.GenerateToken(userID)
	if err != nil {
		http.Error(w, "Error generating token", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"token": token,
	})
}

func Login(w http.ResponseWriter, r *http.Request) {
	var login models.UserLogin
	if err := json.NewDecoder(r.Body).Decode(&login); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	db := database.GetDB()
	var user models.User
	var hashedPassword string
	err := db.QueryRow(`
		SELECT id, email, password_hash, first_name, last_name
		FROM users
		WHERE email = $1
	`, login.Email).Scan(&user.ID, &user.Email, &hashedPassword, &user.FirstName, &user.LastName)

	if err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Check password
	if err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(login.Password)); err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Generate JWT token
	token, err := middleware.GenerateToken(user.ID)
	if err != nil {
		http.Error(w, "Error generating token", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"token": token,
	})
} 