'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Test hesabı kontrolü
    if (email === 'test@gurbet.biz' && password === 'test123') {
      // Başarılı giriş
      onClose();
      router.push('/hesabim');
    } else {
      // Hata durumu
      alert('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative">
        {/* Kapatma Butonu */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Başlık */}
        <h2 className="text-xl font-bold mb-4">Giriş Yap</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 text-sm">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@gurbet.biz"
              className="w-full px-3 py-2 rounded-xl bg-blue-50 border-0 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-blue-50 border-0 focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition-colors text-sm"
          >
            Giriş Yap
          </button>
        </form>

        {/* Üyelik Linki */}
        <div className="text-center mt-4 text-sm">
          <span className="text-gray-600">Hesabın yok mu? </span>
          <Link href="/uye-ol" className="text-green-500 hover:text-green-600">
            Üye Ol
          </Link>
        </div>

        {/* Sosyal Medya Girişi */}
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-500">
                veya sosyal medya ile devam et
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              <Image
                src="/images/google.svg"
                alt="Google"
                width={16}
                height={16}
              />
              <span>Google ile devam et</span>
            </button>

            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#1877F2] text-white rounded-xl hover:bg-[#1865F2] transition-colors text-sm"
            >
              <Image
                src="/images/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
              <span>Facebook ile devam et</span>
            </button>
          </div>
        </div>

        {/* Gizlilik Bildirimi */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Kişisel verileriniz{' '}
          <Link href="/ticari-elektronik-ileti" className="text-green-500 hover:underline">
            Ticari Elektronik İleti Açık Rıza Metni
          </Link>
          {' '}kapsamında işleniyor. Üye olarak{' '}
          <Link href="/kullanim-sartlari" className="text-green-500 hover:underline">
            gurbet.biz Kullanım Şartları
          </Link>
          'nı kabul ettiğinizi onaylamış olursunuz.
        </p>
      </div>
    </div>
  );
} 