'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Euro } from 'lucide-react';
import LoginModal from './LoginModal';
import TurkishFlag from './TurkishFlag';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="bg-green-500 shadow-sm">
      <div className="container mx-auto px-4 h-12 flex items-center">
        <div className="flex justify-between items-center w-full py-1">
          <div className="flex items-center gap-2">
            <Euro className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">EURO: 44.50 TL</span>
          </div>
          <nav className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 px-3 py-1 hover:bg-green-400 rounded-sm"
            >
              <TurkishFlag />
              <span className="text-[16px] text-white">TR</span>
            </button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1 hover:bg-green-400 rounded-sm"
            >
              <User className="w-5 h-5 text-white" />
              <span className="text-[15px] text-white">Giriş Yap</span>
            </button>
          </nav>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}