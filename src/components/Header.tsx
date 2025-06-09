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
      <div className="container mx-auto px-4 h-10 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-1.5">
            <Euro className="w-4 h-4 text-white" />
            <span className="text-xs font-medium text-white">EURO: 44.50 TL</span>
          </div>
          <nav className="flex items-center gap-3">
            <button
              className="flex items-center gap-1.5 px-2 hover:bg-green-400"
            >
              <TurkishFlag />
              <span className="text-sm text-white">TR</span>
            </button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1.5 px-2 hover:bg-green-400"
            >
              <User className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Giriş Yap</span>
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