package models

import (
	"time"
)

type Flight struct {
	ID             int       `json:"id"`
	FlightNumber   string    `json:"flight_number"`
	Airline        string    `json:"airline"`
	DepartureCity  string    `json:"departure_city"`
	ArrivalCity    string    `json:"arrival_city"`
	DepartureTime  time.Time `json:"departure_time"`
	ArrivalTime    time.Time `json:"arrival_time"`
	Price          float64   `json:"price"`
	AvailableSeats int       `json:"available_seats"`
	CreatedAt      time.Time `json:"created_at"`
}

type FlightSearch struct {
	DepartureCity string    `json:"departure_city"`
	ArrivalCity   string    `json:"arrival_city"`
	DepartureDate time.Time `json:"departure_date"`
	Passengers    int       `json:"passengers"`
} 