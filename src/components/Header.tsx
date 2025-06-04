'use client';

import Link from 'next/link';
import { User, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getEuroRate } from '@/services/exchangeRate';
import LoginModal from './LoginModal';

export default function Header() {
  const [rate, setRate] = useState<number>(0);
  const [trend, setTrend] = useState<'up' | 'down' | 'same'>('same');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const updateRate = async () => {
    const newRate = await getEuroRate();
    setTrend(newRate > rate ? 'up' : newRate < rate ? 'down' : 'same');
    setRate(newRate);
  };

  useEffect(() => {
    // İlk yüklenmede kuru çek
    updateRate();

    // Her 5 dakikada bir güncelle
    const interval = setInterval(updateRate, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3.5">
            <div className="flex items-center gap-2">
              <TrendingDown className={`w-5 h-5 transition-transform ${trend === 'up' ? 'rotate-180' : ''}`} />
              <span className="text-sm font-medium">
                DÖVİZ € = {rate.toFixed(2)} TL
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <div className="overflow-hidden rounded-full w-[20px] h-[20px]">
                  <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="#E30A17"/>
                    <circle cx="13" cy="15" r="7" fill="#ffffff"/>
                    <circle cx="14.5" cy="15" r="6" fill="#E30A17"/>
                    <path d="M17.5 15L20 13.5L20 16.5L17.5 15Z" fill="#ffffff"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">TR</span>
              </div>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-1 text-sm font-medium hover:text-gray-100 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Giriş yap</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
} 