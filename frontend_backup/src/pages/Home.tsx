import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaneIcon, HotelIcon, CarIcon, WifiIcon, CalendarIcon, UserIcon, LocationIcon } from '../components/icons';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('plane');
  const [tripType, setTripType] = useState('oneWay');

  return (
    <div className="min-h-screen bg-green-500">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="text-white flex items-center">
          <span className="mr-2">DÖVİZ € =</span>
          <span>44.81 TL</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white">
            <img src="/tr-flag.svg" alt="TR" className="h-5 w-auto mr-1" />
            <span>TR</span>
          </div>
          <Link to="/auth" className="text-white hover:text-gray-200">
            Giriş yap
          </Link>
        </div>
      </div>

      {/* Logo and Welcome */}
      <div className="text-center text-white mt-16 mb-12">
        <h1 className="text-5xl font-bold mb-4">
          gurbet<span className="font-normal">biz</span>
        </h1>
        <p className="text-xl">Hoşgeldin Gurbetçi</p>
      </div>

      {/* Service Icons */}
      <div className="flex justify-center space-x-8 mb-8">
        <button 
          className={`flex flex-col items-center p-4 rounded-full bg-white ${selectedTab === 'plane' ? 'text-green-500' : 'text-gray-600'}`}
          onClick={() => setSelectedTab('plane')}
        >
          <PlaneIcon />
          <span className="mt-2 text-sm">UÇAK</span>
        </button>
        <button 
          className={`flex flex-col items-center p-4 rounded-full bg-white ${selectedTab === 'hotel' ? 'text-green-500' : 'text-gray-600'}`}
          onClick={() => setSelectedTab('hotel')}
        >
          <HotelIcon />
          <span className="mt-2 text-sm">OTEL</span>
        </button>
        <button 
          className={`flex flex-col items-center p-4 rounded-full bg-white ${selectedTab === 'car' ? 'text-green-500' : 'text-gray-600'}`}
          onClick={() => setSelectedTab('car')}
        >
          <CarIcon />
          <span className="mt-2 text-sm">ARAÇ</span>
        </button>
        <button 
          className={`flex flex-col items-center p-4 rounded-full bg-white ${selectedTab === 'esim' ? 'text-green-500' : 'text-gray-600'}`}
          onClick={() => setSelectedTab('esim')}
        >
          <WifiIcon />
          <span className="mt-2 text-sm">E SIM</span>
        </button>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg">
        {/* Trip Type Selection */}
        <div className="flex items-center space-x-6 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={tripType === 'oneWay'}
              onChange={() => setTripType('oneWay')}
              className="form-radio text-green-500"
            />
            <span>Tek yön</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={tripType === 'roundTrip'}
              onChange={() => setTripType('roundTrip')}
              className="form-radio text-green-500"
            />
            <span>Gidiş-dönüş</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={tripType === 'multiCity'}
              onChange={() => setTripType('multiCity')}
              className="form-radio text-green-500"
            />
            <span>Çoklu uçuş</span>
          </label>
          <div className="ml-auto">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-green-500" />
              <span>Aktarmasız</span>
            </label>
          </div>
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <div className="flex items-center border rounded-md p-3">
              <LocationIcon />
              <input
                type="text"
                placeholder="Şehir veya havalimanı"
                className="ml-2 w-full outline-none"
              />
            </div>
            <label className="text-sm text-gray-500 mt-1">Nereden</label>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border rounded-md p-3">
              <LocationIcon />
              <input
                type="text"
                placeholder="Şehir veya havalimanı"
                className="ml-2 w-full outline-none"
              />
            </div>
            <label className="text-sm text-gray-500 mt-1">Nereye</label>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border rounded-md p-3">
              <CalendarIcon />
              <input
                type="text"
                placeholder="30.05.2025"
                className="ml-2 w-full outline-none"
              />
            </div>
            <label className="text-sm text-gray-500 mt-1">Gidiş Tarihi</label>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border rounded-md p-3">
              <CalendarIcon />
              <input
                type="text"
                placeholder="30.05.2025"
                className="ml-2 w-full outline-none"
              />
            </div>
            <label className="text-sm text-gray-500 mt-1">Dönüş</label>
          </div>
          <div className="col-span-1">
            <div className="flex items-center border rounded-md p-3">
              <UserIcon />
              <input
                type="text"
                placeholder="1 Yolcu, Ekonom"
                className="ml-2 w-full outline-none"
              />
            </div>
            <label className="text-sm text-gray-500 mt-1">Yolcu</label>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-green-500 text-white px-12 py-3 rounded-md hover:bg-green-600 transition-colors">
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 