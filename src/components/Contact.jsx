import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Why Choose Us */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-red-500 uppercase mb-2">
              Why Doha Movers?
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              Trusted Moving Partners Across Qatar
            </p>
          </div>

          <div className="space-y-4">
            {[
              "10+ Years of proven moving excellence in Qatar",
              "Skilled team of 20 professional technicians & carpenters",
              "24/7 round-the-clock service availability",
              "High-quality protective packing & stretch wrapping",
              "Affordable rates with zero hidden charges"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700/40">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-slate-200 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Cards */}
        <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">Contact Us Today</h3>
          <p className="text-slate-400 text-sm">
            Reach out via phone, WhatsApp, or visit our location in Msheireb Downtown for instant quotes and bookings.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-red-500/50 transition group"
            >
              <div className="w-12 h-12 bg-red-600/10 text-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Call Us Anytime</p>
                <p className="font-bold text-slate-100">{BUSINESS_INFO.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700 hover:border-green-500/50 transition group"
            >
              <div className="w-12 h-12 bg-green-600/10 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">WhatsApp Chat</p>
                <p className="font-bold text-slate-100">{BUSINESS_INFO.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="font-bold text-slate-100">{BUSINESS_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700">
              <div className="w-12 h-12 bg-amber-600/10 text-amber-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Working Hours</p>
                <p className="font-bold text-slate-100">{BUSINESS_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}