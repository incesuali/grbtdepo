import { useState } from 'react'
import styled from 'styled-components'
import { 
  PlaneTakeoff, 
  Building2, 
  Car, 
  Wifi, 
  User, 
  MapPin, 
  Calendar,
  Euro,
  ArrowLeftRight
} from 'lucide-react'

const Container = styled.div`
  min-height: 100vh;
  background-color: #00C853;
  position: relative;
  padding-bottom: 3rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem 1rem 2rem;
  color: white;
`

const ExchangeRate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
`

const FlagIcon = styled.svg`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 1.5;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`

const Logo = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  padding-top: 80px;
  position: relative;
  z-index: 1;

  span {
    color: black;
  }
`

const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.25rem 0 0 0;
  position: relative;
  z-index: 1;
`

const WhiteSection = styled.div`
  background: white;
  width: 100%;
  position: absolute;
  top: 320px;
  bottom: 0;
`

const Categories = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  z-index: 2;
  justify-content: center;
  width: 100%;
  top: 276px;
`

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const CategoryCircle = styled.button`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  svg {
    width: 28px;
    height: 28px;
    color: #666;
    stroke-width: 1.5;
  }
`

const CategoryLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  margin-top: 4px;
`

const SearchSection = styled.div`
  background: white;
  width: 100%;
  padding: 3.5rem 3rem 3rem;
  position: relative;
  z-index: 1;
  margin-top: 12rem;
  border-radius: 20px 20px 0 0;
`

const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 1.25rem;
  background: white;
  padding: 3.75rem 2rem 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  width: 95%;
  margin: 0 auto;
  position: relative;
`

const FlightTypes = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  align-items: center;
`

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: #666;

  input {
    appearance: none;
    width: 1.1rem;
    height: 1.1rem;
    border: 2px solid #ddd;
    border-radius: 50%;
    margin: 0;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: #00C853;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.55rem;
        height: 0.55rem;
        background: #00C853;
        border-radius: 50%;
      }
    }
  }
`

const NonStopToggle = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #666;
  cursor: pointer;
  margin-left: 1.5rem;

  input {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0;
  }
`

interface FormGroupProps {
  flex?: number;
  minWidth?: string;
}

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex || 1};
  min-width: ${props => props.minWidth || 'auto'};
  position: relative;
  background: #f8f8f8;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  height: 4.5rem;
`

const FormLabel = styled.label`
  font-size: 0.95rem;
  color: #666;
  font-weight: 400;
  position: absolute;
  top: 1rem;
  left: 1.25rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0 2.5rem;
  border: none;
  font-size: 1.1rem;
  background: transparent;
  color: #333;
  position: absolute;
  bottom: 1.1rem;
  left: 0;

  &::placeholder {
    color: #999;
    font-size: 1.05rem;
  }

  &:focus {
    outline: none;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 1.25rem;
  bottom: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00C853;

  svg {
    width: 20px;
    height: 20px;
  }
`

const SearchButton = styled.button`
  background: #00C853;
  color: white;
  border: none;
  border-radius: 1.5rem;
  padding: 0 3rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  height: 3.5rem;
  display: flex;
  align-items: center;
`

const SwapButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: #00C853;
    stroke-width: 2;
  }
`

const ProcessingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
  color: #666;
  font-size: 1.1rem;

  svg {
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const AppBanner = styled.div`
  width: 95%;
  margin: 2rem auto;
  background: linear-gradient(135deg, #00C853 0%, #009624 100%);
  border-radius: 1rem;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 12px rgba(0, 200, 83, 0.15);
`

const AppInfo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    width: 56px;
    height: 56px;
    stroke-width: 1.2;
  }

  .text {
    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      letter-spacing: -0.02em;

      .logo-text {
        display: flex;
        align-items: baseline;
        letter-spacing: -0.02em;
        gap: 0.02em;
      }

      .biz {
        color: black;
      }

      .app-text {
        font-weight: 400;
        opacity: 0.9;
        font-size: calc(2rem - 4px);
        margin-left: 0.2rem;
      }
    }

    p {
      font-size: 1rem;
      opacity: 0.95;
      letter-spacing: 0.01em;
    }
  }
`

const StoreButtons = styled.div`
  display: flex;
  gap: 1rem;
`

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const QuickActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12rem;
  margin: 2rem auto;
  width: 95%;
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
  color: #333;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #00C853;
  }
`

const PromotionsSection = styled.section`
  width: 95%;
  margin: 3rem auto;
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
`

const PromotionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`

const PromotionBox = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

const PromotionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const PromotionContent = styled.div`
  padding: 1.25rem;

  h3 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`

const Footer = styled.footer`
  background: #f8f8f8;
  padding: 4rem 0;
  margin-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterTitle = styled.h3`
  color: #333;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #00C853;
  }
`

function App() {
  const [flightType, setFlightType] = useState('oneWay')
  const [isProcessing, setIsProcessing] = useState(false)

  return (
    <Container>
      <Header>
        <ExchangeRate>
          DÖVİZ € = 44.81 TL
        </ExchangeRate>
        <RightSection>
          <LanguageButton>
            <FlagIcon viewBox="0 0 1200 800">
              <rect width="1200" height="800" fill="#E30A17"/>
              <circle cx="425" cy="400" r="200" fill="#ffffff"/>
              <circle cx="475" cy="400" r="160" fill="#E30A17"/>
              <path d="M 750,400 L 725,450 L 775,425 L 725,425 L 775,450 Z" fill="#ffffff" transform="rotate(0,750,400)"/>
              <path d="M 750,400 L 725,450 L 775,425 L 725,425 L 775,450 Z" fill="#ffffff" transform="rotate(72,750,400)"/>
              <path d="M 750,400 L 725,450 L 775,425 L 725,425 L 775,450 Z" fill="#ffffff" transform="rotate(144,750,400)"/>
              <path d="M 750,400 L 725,450 L 775,425 L 725,425 L 775,450 Z" fill="#ffffff" transform="rotate(216,750,400)"/>
              <path d="M 750,400 L 725,450 L 775,425 L 725,425 L 775,450 Z" fill="#ffffff" transform="rotate(288,750,400)"/>
            </FlagIcon>
            TR
          </LanguageButton>
          <LoginButton>
            <User />
            Giriş yap
          </LoginButton>
        </RightSection>
      </Header>

      <MainContent>
        <Logo>gurbet<span>biz</span></Logo>
        <Subtitle>Hoşgeldin Gurbetçi</Subtitle>

        <WhiteSection />
        
        <Categories>
          <CategoryItem>
            <CategoryCircle>
              <PlaneTakeoff />
            </CategoryCircle>
            <CategoryLabel>UÇAK</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryCircle>
              <Building2 />
            </CategoryCircle>
            <CategoryLabel>OTEL</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryCircle>
              <Car />
            </CategoryCircle>
            <CategoryLabel>ARAÇ</CategoryLabel>
          </CategoryItem>
          <CategoryItem>
            <CategoryCircle>
              <Wifi />
            </CategoryCircle>
            <CategoryLabel>E SIM</CategoryLabel>
          </CategoryItem>
        </Categories>

        <SearchSection>
          <SearchForm>
            <FlightTypes>
              <RadioButton>
                <input
                  type="radio"
                  name="flightType"
                  value="oneWay"
                  checked={flightType === 'oneWay'}
                  onChange={(e) => setFlightType(e.target.value)}
                />
                Tek yön
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  name="flightType"
                  value="roundTrip"
                  checked={flightType === 'roundTrip'}
                  onChange={(e) => setFlightType(e.target.value)}
                />
                Gidiş-dönüş
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  name="flightType"
                  value="multiCity"
                  checked={flightType === 'multiCity'}
                  onChange={(e) => setFlightType(e.target.value)}
                />
                Çoklu uçuş
              </RadioButton>
              <NonStopToggle>
                <input type="checkbox" />
                Aktarmasız
              </NonStopToggle>
            </FlightTypes>

            <FormGroup flex={1.2} minWidth="180px">
              <FormLabel>Nereden</FormLabel>
              <IconWrapper>
                <MapPin />
              </IconWrapper>
              <Input 
                type="text" 
                placeholder="Şehir veya havaalanı" 
              />
            </FormGroup>

            <FormGroup flex={1.2} minWidth="180px">
              <FormLabel>Nereye</FormLabel>
              <IconWrapper>
                <MapPin />
              </IconWrapper>
              <Input 
                type="text" 
                placeholder="Şehir veya havaalanı" 
              />
            </FormGroup>

            <FormGroup flex={0.9} minWidth="140px">
              <FormLabel>Gidiş Tarihi</FormLabel>
              <IconWrapper>
                <Calendar />
              </IconWrapper>
              <Input 
                type="text" 
                placeholder="30.05.2025" 
              />
            </FormGroup>

            <FormGroup flex={0.9} minWidth="140px">
              <FormLabel>Dönüş</FormLabel>
              <IconWrapper>
                <Calendar />
              </IconWrapper>
              <Input 
                type="text" 
                placeholder="30.05.2025" 
              />
            </FormGroup>

            <FormGroup flex={0.8} minWidth="120px">
              <FormLabel>Yolcu</FormLabel>
              <IconWrapper>
                <User />
              </IconWrapper>
              <Input 
                type="text" 
                placeholder="1 Yolcu, E" 
              />
            </FormGroup>

            <SearchButton>
              Ara
            </SearchButton>
          </SearchForm>

          <QuickActions>
            <ActionButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Online Check - In
            </ActionButton>
            <ActionButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              PNR Sorgula
            </ActionButton>
            <ActionButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              Biletimi İptal Et
            </ActionButton>
            <ActionButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Yardım
            </ActionButton>
          </QuickActions>

          <AppBanner>
            <AppInfo>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="6" y="1" width="12" height="22" rx="3" ry="3" />
                <path d="M10 2h4" />
                <path d="M12 19h.01" />
                <path d="M9 22h6" />
              </svg>
              <div className="text">
                <h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div className="logo-text" style={{ display: 'flex', alignItems: 'baseline' }}>
                      <span style={{color: 'white'}}>gurbet</span><span className="biz">biz</span>
                    </div>
                    <span className="app-text">Uygulamasi</span>
                  </div>
                </h3>
                <p>Avrupa'dan Türkiye'ye Yol Arkadaşınız...</p>
              </div>
            </AppInfo>
            <StoreButtons>
              <StoreButton href="#" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.05 13.37c-.03 2.82 2.3 3.77 2.33 3.78-.02.07-.38 1.29-1.24 2.55-.75 1.1-1.53 2.19-2.75 2.21-1.2.03-1.59-.71-2.97-.71-1.38 0-1.81.69-2.95.73-1.18.04-2.08-1.19-2.84-2.28-1.54-2.23-2.72-6.31-1.14-9.06.79-1.37 2.19-2.23 3.72-2.26 1.16-.02 2.26.78 2.97.78.71 0 2.04-.96 3.44-.82.59.02 2.23.24 3.29 1.77-.09.05-1.96 1.15-1.94 3.41M14.72 4.42c.63-.76 1.05-1.82.93-2.88-.9.04-1.99.6-2.63 1.36-.58.67-1.08 1.74-.95 2.77 1 .08 2.03-.53 2.65-1.25" />
                </svg>
                App Store
              </StoreButton>
              <StoreButton href="#" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3l14 9-14 9V3z"/>
                </svg>
                Google Play
              </StoreButton>
            </StoreButtons>
          </AppBanner>

          <PromotionsSection>
            <SectionTitle>Kampanyalar</SectionTitle>
            <PromotionGrid>
              <PromotionBox>
                <PromotionImage src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60" alt="Yaz Kampanyası" />
                <PromotionContent>
                  <h3>Yaz Kampanyası</h3>
                  <p>Erken rezervasyon fırsatları</p>
                </PromotionContent>
              </PromotionBox>
              <PromotionBox>
                <PromotionImage src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60" alt="Erken Rezervasyon" />
                <PromotionContent>
                  <h3>Erken Rezervasyon</h3>
                  <p>%30'a varan indirimler</p>
                </PromotionContent>
              </PromotionBox>
              <PromotionBox>
                <PromotionImage src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60" alt="Aile Paketi" />
                <PromotionContent>
                  <h3>Aile Paketi</h3>
                  <p>Çocuk bileti hediye</p>
                </PromotionContent>
              </PromotionBox>
              <PromotionBox>
                <PromotionImage src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60" alt="Hafta Sonu Fırsatı" />
                <PromotionContent>
                  <h3>Hafta Sonu Fırsatı</h3>
                  <p>Çift yön %15 indirim</p>
                </PromotionContent>
              </PromotionBox>
            </PromotionGrid>
          </PromotionsSection>

          {isProcessing && (
            <ProcessingSection>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              İşleminiz yapılıyor, lütfen bekleyiniz...
            </ProcessingSection>
          )}

          <Footer>
            <FooterColumn>
              <FooterTitle>Şirket</FooterTitle>
              <FooterLink href="#">Hakkımızda</FooterLink>
              <FooterLink href="#">Turna Blog</FooterLink>
              <FooterLink href="#">Resmi Tatiller</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Yardım ve Destek</FooterTitle>
              <FooterLink href="#">Yardım ve İletişim</FooterLink>
              <FooterLink href="#">Sıkça Sorulan Sorular</FooterLink>
              <FooterLink href="#">E-Posta</FooterLink>
              <FooterLink href="#">Turna API</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Gizlilik ve Güvenlik</FooterTitle>
              <FooterLink href="#">Kullanım Şartları</FooterLink>
              <FooterLink href="#">Gizlilik Politikası</FooterLink>
              <FooterLink href="#">Çerez Politikası</FooterLink>
              <FooterLink href="#">Kişisel Verilerin Korunması</FooterLink>
              <FooterLink href="#">Ticari Elektronik İleti Açık Rıza Metni</FooterLink>
            </FooterColumn>
          </Footer>
        </SearchSection>
      </MainContent>
    </Container>
  )
}

export default App
