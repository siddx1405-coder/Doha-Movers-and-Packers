import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white">
      {/* Top Info Bar */}
      <div className="bg-blue-600 text-xs py-1.5 px-4 text-center sm:flex sm:justify-between sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>{BUSINESS_INFO.hours} • Serving {BUSINESS_INFO.coverage}</span>
        </div>
        <div className="hidden sm:block">
          📍 {BUSINESS_INFO.location}
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/images/img9.jpg" 
            alt={BUSINESS_INFO.name} 
            className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg border border-slate-700" 
          />
          <div>
            <h1 className="font-bold text-lg sm:text-xl leading-tight">{BUSINESS_INFO.name}</h1>
            <p className="text-xs text-slate-400">{BUSINESS_INFO.experience} • {BUSINESS_INFO.teamSize}</p>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}