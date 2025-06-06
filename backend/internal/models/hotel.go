package models

import (
	"time"
)

type Hotel struct {
	ID            int       `json:"id"`
	Name          string    `json:"name"`
	City          string    `json:"city"`
	Address       string    `json:"address"`
	Rating        float64   `json:"rating"`
	PricePerNight float64   `json:"price_per_night"`
	AvailableRooms int      `json:"available_rooms"`
	CreatedAt     time.Time `json:"created_at"`
}

type HotelSearch struct {
	City      string    `json:"city"`
	CheckIn   time.Time `json:"check_in"`
	CheckOut  time.Time `json:"check_out"`
	Guests    int       `json:"guests"`
	MinPrice  float64   `json:"min_price,omitempty"`
	MaxPrice  float64   `json:"max_price,omitempty"`
	MinRating float64   `json:"min_rating,omitempty"`
} 