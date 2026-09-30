import React from 'react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-red-500 uppercase">
            Our Work & Promotions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            See Our Professional Technicians in Action
          </p>
          <p className="text-slate-400">
            From heavy furniture stretch-wrapping to full villa moving and truck transport across Qatar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl hover:border-red-500/50 transition duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-300 flex items-end p-4">
                <p className="text-sm font-semibold text-slate-200">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}