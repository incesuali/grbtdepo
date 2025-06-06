-- Kullanıcılar tablosu
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Uçuşlar tablosu
CREATE TABLE IF NOT EXISTS flights (
    id SERIAL PRIMARY KEY,
    flight_number VARCHAR(20) NOT NULL,
    airline VARCHAR(100) NOT NULL,
    departure_city VARCHAR(100) NOT NULL,
    arrival_city VARCHAR(100) NOT NULL,
    departure_time TIMESTAMP WITH TIME ZONE NOT NULL,
    arrival_time TIMESTAMP WITH TIME ZONE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    available_seats INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Oteller tablosu
CREATE TABLE IF NOT EXISTS hotels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    rating DECIMAL(2,1),
    description TEXT,
    amenities TEXT[],
    price_per_night DECIMAL(10,2) NOT NULL,
    available_rooms INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Otel odaları tablosu
CREATE TABLE hotel_rooms (
    id SERIAL PRIMARY KEY,
    hotel_id INTEGER REFERENCES hotels(id),
    room_type VARCHAR(50) NOT NULL,
    price_per_night DECIMAL(10,2) NOT NULL,
    capacity INTEGER NOT NULL,
    available_rooms INTEGER NOT NULL
);

-- Araçlar tablosu
CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    price_per_day DECIMAL(10,2) NOT NULL,
    available BOOLEAN DEFAULT true,
    location VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Uçuş rezervasyonları tablosu
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    flight_id INTEGER REFERENCES flights(id),
    hotel_id INTEGER REFERENCES hotels(id),
    vehicle_id INTEGER REFERENCES vehicles(id),
    booking_date TIMESTAMP WITH TIME ZONE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Otel rezervasyonları tablosu
CREATE TABLE hotel_bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    room_id INTEGER REFERENCES hotel_rooms(id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    guest_count INTEGER NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Araç kiralama tablosu
CREATE TABLE vehicle_rentals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    vehicle_id INTEGER REFERENCES vehicles(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- İndeksler
CREATE INDEX idx_flights_departure_city ON flights(departure_city);
CREATE INDEX idx_flights_arrival_city ON flights(arrival_city);
CREATE INDEX idx_flights_departure_time ON flights(departure_time);
CREATE INDEX idx_hotels_city ON hotels(city);
CREATE INDEX idx_vehicles_location ON vehicles(location);
CREATE INDEX idx_vehicles_available ON vehicles(available);

-- Trigger fonksiyonu - updated_at güncellemesi için
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger'ları oluştur
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 