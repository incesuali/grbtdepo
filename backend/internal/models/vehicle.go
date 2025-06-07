package models

import (
	"time"
)

type Vehicle struct {
	ID          int       `json:"id"`
	Brand       string    `json:"brand"`
	Model       string    `json:"model"`
	Year        int       `json:"year"`
	Type        string    `json:"type"`
	Price       float64   `json:"price"`
	Available   bool      `json:"available"`
	Location    string    `json:"location"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type VehicleFilter struct {
	Brand     string  `json:"brand"`
	Model     string  `json:"model"`
	Type      string  `json:"type"`
	MinPrice  float64 `json:"min_price"`
	MaxPrice  float64 `json:"max_price"`
	Location  string  `json:"location"`
	Available *bool   `json:"available"`
} 