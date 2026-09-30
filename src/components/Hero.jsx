import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Users, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
            <Award className="w-4 h-4" />
            <span>#1 Moving Service in Qatar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Safe, Fast & Reliable <span className="text-red-500">Movers & Packers</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl">
            We move your world with care. Professional packing, villa shifting, office relocation, and carpentry solutions across Qatar.
          </p>

          {/* Key Stats Badges */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
              <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
              <div>
                <p className="font-bold text-base">{BUSINESS_INFO.experience}</p>
                <p className="text-xs text-slate-400">Trusted Expertise</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
              <Users className="w-6 h-6 text-green-400 shrink-0" />
              <div>
                <p className="font-bold text-base">{BUSINESS_INFO.teamSize}</p>
                <p className="text-xs text-slate-400">Trained Staff</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-6 py-3.5 rounded-xl transition shadow-lg shadow-red-600/30"
            >
              <Phone className="w-5 h-5" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello%20Doha%20Movers,%20I%20would%20like%20to%20get%20a%20free%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-6 py-3.5 rounded-xl transition shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Free Quote</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Serving {BUSINESS_INFO.coverage} • 24/7 Service</span>
          </div>
        </div>

        {/* Hero Image Side */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src="/images/img1.jpg"
              alt="Doha Movers Truck Service"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Subtle Glow Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl opacity-20 blur-xl"></div>
        </div>

      </div>
    </section>
  );
}