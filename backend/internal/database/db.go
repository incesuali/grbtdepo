package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var db *sql.DB

// InitDB initializes the database connection
func InitDB() (*sql.DB, error) {
	// Get database connection details from environment variables
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")

	if host == "" {
		host = "localhost"
	}
	if port == "" {
		port = "5433"
	}
	if user == "" {
		user = "postgres"
	}
	if password == "" {
		password = "123456"
	}
	if dbname == "" {
		dbname = "travelapp"
	}

	// Create connection string
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	// Open database connection
	var err error
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("error opening database: %v", err)
	}

	// Test the connection
	err = db.Ping()
	if err != nil {
		return nil, fmt.Errorf("error connecting to the database: %v", err)
	}

	log.Printf("Successfully connected to database")
	return db, nil
}

// GetDB returns the database instance
func GetDB() *sql.DB {
	return db
} 