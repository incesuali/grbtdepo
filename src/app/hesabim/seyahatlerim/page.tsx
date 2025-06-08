'use client';

import AccountSidebar from '@/components/AccountSidebar';

export default function SeyahatlerimPage() {
  const trips = [
    {
      id: 1,
      from: 'İstanbul',
      to: 'Ankara',
      date: '15 Mart 2024',
      status: 'Tamamlandı',
      price: '450 TL'
    },
    {
      id: 2,
      from: 'İzmir',
      to: 'Antalya',
      date: '20 Mart 2024',
      status: 'Onay Bekliyor',
      price: '380 TL'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />
          
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Seyahatlerim</h1>
            
            <div className="space-y-4">
              {trips.map((trip) => (
                <div 
                  key={trip.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Nereden</span>
                        <span className="font-medium">{trip.from}</span>
                      </div>
                      <div className="w-8 h-px bg-gray-300" />
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Nereye</span>
                        <span className="font-medium">{trip.to}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500">Tarih</span>
                        <span className="font-medium">{trip.date}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500">Durum</span>
                        <span className={`font-medium ${
                          trip.status === 'Tamamlandı' ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {trip.status}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500">Tutar</span>
                        <span className="font-medium">{trip.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 