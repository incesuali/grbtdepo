'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Başarılı giriş
        onClose();
        window.location.href = '/hesabim'; // Hesabım sayfasına yönlendir
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-8">Giriş Yap</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-blue-50 border-0"
              placeholder="test@gurbet.biz"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-blue-50 border-0"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Hesabın yok mu? </span>
          <a href="#" className="text-green-600 font-medium hover:text-green-700">
            Üye Ol
          </a>
        </div>

        {/* Social Login Divider */}
        <div className="mt-8 text-center relative">
          <span className="px-4 bg-white text-gray-500 relative z-10">
            veya sosyal medya ile devam et
          </span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-1"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-4">
          <button 
            type="button"
            className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            <span className="text-gray-700">Google ile devam et</span>
          </button>

          <button 
            type="button"
            className="w-full py-3 px-4 bg-[#1877F2] text-white rounded-xl flex items-center justify-center gap-3 hover:bg-[#1865F2] transition-colors"
          >
            <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
            <span>Facebook ile devam et</span>
          </button>
        </div>

        {/* Terms */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Kişisel verileriniz{' '}
          <a href="#" className="text-green-600 hover:underline">
            Ticari Elektronik İleti Açık Rıza Metni
          </a>{' '}
          kapsamında işleniyor. Üye olarak{' '}
          <a href="#" className="text-green-600 hover:underline">
            gurbet.biz Kullanım Şartları
          </a>
          'nı kabul ettiğinizi onaylamış olursunuz.
        </p>
      </div>
    </div>
  );
} 