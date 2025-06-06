package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"

	"github.com/your-username/travel-app/internal/database"
	"github.com/your-username/travel-app/internal/handlers"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Printf("Warning: .env file not found")
	}

	// Initialize database
	db, err := database.InitDB()
	if err != nil {
		log.Fatal("Error initializing database:", err)
	}
	defer db.Close()

	// Initialize router
	r := mux.NewRouter()

	// CORS middleware
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // Frontend URL
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})

	// API routes
	api := r.PathPrefix("/api").Subrouter()

	// Auth routes
	api.HandleFunc("/auth/register", handlers.Register).Methods("POST")
	api.HandleFunc("/auth/login", handlers.Login).Methods("POST")

	// Health check endpoint
	api.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	}).Methods("GET")

	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Start server
	handler := c.Handler(r)
	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatal(err)
	}
} 