import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-sm pb-24 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">{BUSINESS_INFO.name}</h3>
            <p className="text-xs text-slate-500 mt-1">
              {BUSINESS_INFO.experience} • {BUSINESS_INFO.teamSize} • Serving {BUSINESS_INFO.coverage}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-xs text-slate-500 text-center md:text-right">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Made by{' '}
              <a
                href="https://www.xenosysweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline font-medium transition-colors"
              >
                xenosys
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-800 p-3 sm:hidden flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm transition"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Doha%20Movers,%20I%20would%20like%20to%20get%20a%20free%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}