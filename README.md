# Travel Reservation System

Modern seyahat rezervasyon sistemi - Uçuş, Otel ve Araç Kiralama hizmetleri.

## Teknolojiler

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Go (Golang)
- Gorilla Mux
- PostgreSQL
- Redis

## Kurulum

### Ön Gereksinimler
- Node.js (v18+)
- Go (v1.24.3+)
- Docker ve Docker Compose

### Veritabanı ve Cache Bağlantı Bilgileri
PostgreSQL (Container: travel_db):
- Host: localhost
- Port: 5434
- Kullanıcı: postgres
- Şifre: 123456
- Veritabanı: travelapp

Redis (Container: travel_cache):
- Host: localhost
- Port: 6380

### Kurulum Adımları

1. Projeyi klonlayın:
```bash
git clone [repo-url]
cd [repo-name]
```

2. Docker containerlarını başlatın:
```bash
docker-compose up -d
```

3. Frontend kurulumu:
```bash
cd frontend
npm install
npm run dev
```

4. Backend kurulumu:
```bash
cd backend
go mod tidy
go run cmd/api/main.go
```

## API Endpoints

### Auth
- POST /api/auth/register - Kullanıcı kaydı
- POST /api/auth/login - Kullanıcı girişi

### Flights
- GET /api/flights - Uçuşları listele
- POST /api/flights - Uçuş ekle
- GET /api/flights/:id - Uçuş detayı
- PUT /api/flights/:id - Uçuş güncelle
- DELETE /api/flights/:id - Uçuş sil

### Hotels
- GET /api/hotels - Otelleri listele
- POST /api/hotels - Otel ekle
- GET /api/hotels/:id - Otel detayı
- PUT /api/hotels/:id - Otel güncelle
- DELETE /api/hotels/:id - Otel sil

### Vehicles
- GET /api/vehicles - Araçları listele
- POST /api/vehicles - Araç ekle
- GET /api/vehicles/:id - Araç detayı
- PUT /api/vehicles/:id - Araç güncelle
- DELETE /api/vehicles/:id - Araç sil

### Bookings
- GET /api/bookings - Rezervasyonları listele
- POST /api/bookings - Rezervasyon yap
- GET /api/bookings/:id - Rezervasyon detayı
- PUT /api/bookings/:id - Rezervasyon güncelle
- DELETE /api/bookings/:id - Rezervasyon iptal

## Geliştirme

### Frontend Geliştirme
```bash
cd frontend
npm run dev
```

### Backend Geliştirme
```bash
cd backend
go run cmd/api/main.go
```

## Test
```bash
# Frontend testleri
cd frontend
npm test

# Backend testleri
cd backend
go test ./...
```