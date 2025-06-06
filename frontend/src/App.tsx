import { useState } from 'react'
import styled from 'styled-components'
import { PlaneIcon, HotelIcon, CarIcon, WifiIcon, CalendarIcon, UserIcon, LocationIcon } from './components/icons'

const Container = styled.div`
  min-height: 100vh;
  background: #00e676;
  position: relative;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`

const ExchangeRate = styled.div`
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='white' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M12 6v12M8 9l4-3 4 3M8 15l4 3 4-3'/%3E%3C/svg%3E") no-repeat center;
    opacity: 0.9;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`

const LoginButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0.9;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`

const Logo = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;

  span {
    color: black;
    font-weight: 400;
  }
`

const Subtitle = styled.p`
  color: white;
  font-size: 1.75rem;
  font-weight: 300;
  margin-bottom: 6rem;
  opacity: 0.95;
`

const Categories = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: -4rem;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
`

const CategoryButton = styled.button`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 32px;
    height: 32px;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`

const SearchSection = styled.div`
  background: white;
  border-radius: 3rem 3rem 0 0;
  padding: 6rem 3rem 3rem;
  width: 100%;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.1);
`

const FlightTypes = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
`

const FlightTypeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`

const RadioInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin: 0;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:checked {
    border-color: #00e676;
    border-width: 2px;
    
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.75rem;
      height: 0.75rem;
      background: #00e676;
      border-radius: 50%;
    }
  }

  &:hover {
    border-color: #00e676;
  }
`

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;
`

const FormGroup = styled.div`
  position: relative;

  &:nth-child(1), &:nth-child(2) {
    grid-column: span 2;
  }

  svg {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;
  background: #f9f9f9;
  color: #333;
  transition: all 0.2s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #00e676;
    background: white;
    box-shadow: 0 0 0 4px rgba(0, 230, 118, 0.1);
  }
`

const SearchButton = styled.button`
  background: #00e676;
  color: white;
  border: none;
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 230, 118, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 230, 118, 0.4);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0, 230, 118, 0.3);
  }
`

function App() {
  const [selectedCategory, setSelectedCategory] = useState('plane')

  return (
    <Container>
      <Header>
        <ExchangeRate>
          DÖVİZ € = 44.81 TL
        </ExchangeRate>
        <RightSection>
          <LanguageSelector>
            <img src="/tr-flag.svg" alt="TR" />
            <span>TR</span>
          </LanguageSelector>
          <LoginButton>
            <UserIcon />
            Giriş yap
          </LoginButton>
        </RightSection>
      </Header>

      <MainContent>
        <Logo>
          gurbet<span>biz</span>
        </Logo>
        <Subtitle>Hoşgeldin Gurbetçi</Subtitle>

        <Categories>
          <CategoryButton onClick={() => setSelectedCategory('plane')}>
            <PlaneIcon />
            <span>UÇAK</span>
          </CategoryButton>
          <CategoryButton onClick={() => setSelectedCategory('hotel')}>
            <HotelIcon />
            <span>OTEL</span>
          </CategoryButton>
          <CategoryButton onClick={() => setSelectedCategory('car')}>
            <CarIcon />
            <span>ARAÇ</span>
          </CategoryButton>
          <CategoryButton onClick={() => setSelectedCategory('esim')}>
            <WifiIcon />
            <span>E SIM</span>
          </CategoryButton>
        </Categories>

        <SearchSection>
          <FlightTypes>
            <FlightTypeLabel>
              <RadioInput
                type="radio"
                name="tripType"
                value="oneWay"
                defaultChecked
              />
              Tek yön
            </FlightTypeLabel>
            <FlightTypeLabel>
              <RadioInput
                type="radio"
                name="tripType"
                value="roundTrip"
              />
              Gidiş-dönüş
            </FlightTypeLabel>
            <FlightTypeLabel>
              <RadioInput
                type="radio"
                name="tripType"
                value="multiCity"
              />
              Çoklu uçuş
            </FlightTypeLabel>
          </FlightTypes>

          <SearchForm>
            <FormGroup>
              <LocationIcon />
              <Input type="text" placeholder="Şehir veya havalimanı" />
            </FormGroup>
            <FormGroup>
              <LocationIcon />
              <Input type="text" placeholder="Şehir veya havalimanı" />
            </FormGroup>
            <FormGroup>
              <CalendarIcon />
              <Input type="date" />
            </FormGroup>
            <FormGroup>
              <CalendarIcon />
              <Input type="date" />
            </FormGroup>
            <FormGroup>
              <UserIcon />
              <Input type="text" placeholder="1 Yolcu, Ekonomi" />
            </FormGroup>
            <SearchButton>Ara</SearchButton>
          </SearchForm>
        </SearchSection>
      </MainContent>
    </Container>
  )
}

export default App
