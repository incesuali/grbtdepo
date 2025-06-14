'use client';

import Image from 'next/image';

export default function MobileAppBanner() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-4">
        <Image 
          src="/app-icon.png" 
          alt="gurbet.biz app" 
          width={48} 
          height={48} 
          className="rounded-xl"
        />
        <div className="flex-1">
          <div className="text-[15px] font-medium">
            gurbet.biz
          </div>
          <div className="text-[13px] text-gray-600">
            Mobil uygulamamızı indirin
          </div>
        </div>
        <div className="flex gap-2">
          <a 
            href="#" 
            className="bg-black hover:bg-gray-900 transition-colors rounded-lg px-4 py-2 flex items-center"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="ml-2">
              <div className="text-[10px] text-gray-400">Download on the</div>
              <div className="text-white font-semibold text-[12px] -mt-1">App Store</div>
            </div>
          </a>
          <a 
            href="#" 
            className="bg-black hover:bg-gray-900 transition-colors rounded-lg px-4 py-2 flex items-center"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.5 12l2.198-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z"/>
            </svg>
            <div className="ml-2">
              <div className="text-[10px] text-gray-400">GET IT ON</div>
              <div className="text-white font-semibold text-[12px] -mt-1">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 