package models

import (
	"time"
)

type Booking struct {
	ID          int       `json:"id"`
	UserID      int       `json:"user_id"`
	FlightID    *int      `json:"flight_id,omitempty"`
	HotelID     *int      `json:"hotel_id,omitempty"`
	VehicleID   *int      `json:"vehicle_id,omitempty"`
	BookingDate time.Time `json:"booking_date"`
	TotalPrice  float64   `json:"total_price"`
	Status      string    `json:"status"`
	CreatedAt   time.Time `json:"created_at"`
}

type BookingCreate struct {
	FlightID    *int      `json:"flight_id,omitempty"`
	HotelID     *int      `json:"hotel_id,omitempty"`
	VehicleID   *int      `json:"vehicle_id,omitempty"`
	BookingDate time.Time `json:"booking_date" validate:"required"`
}

type BookingStatus struct {
	Status string `json:"status" validate:"required,oneof=pending confirmed cancelled"`
} 