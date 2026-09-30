import React from 'react';
import { Home, Building2, Package, Truck, Wrench, Palette } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

// Map icons dynamically
const iconMap = {
  0: Home,
  1: Building2,
  2: Package,
  3: Truck,
  4: Wrench,
  5: Palette,
};

export default function Services() {
  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-red-500 uppercase">
            Our Professional Services
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Complete Shifting & Packing Solutions Across Qatar
          </p>
          <p className="text-slate-400">
            With {BUSINESS_INFO.experience} and an expert team of {BUSINESS_INFO.teamSize}, we guarantee safe and efficient moving for homes and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[idx] || Package;
            return (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 hover:border-red-500/50 hover:bg-slate-800 transition group duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-red-600/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Doha%20Movers,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-red-400 group-hover:text-red-300 transition gap-1"
                >
                  Book Service &rarr;
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}