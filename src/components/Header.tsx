'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import LoginModal from './LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            gurbet.biz
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/ucuslar" className="text-gray-600 hover:text-gray-900">
              Uçuşlar
            </Link>
            <Link href="/oteller" className="text-gray-600 hover:text-gray-900">
              Oteller
            </Link>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50"
            >
              <User className="w-5 h-5" />
              <span>Giriş Yap</span>
            </button>
          </nav>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
} 