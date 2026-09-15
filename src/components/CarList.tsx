import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Calendar, Users, Settings, MapPin, ChevronDown, Star, Sparkles, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  limit?: number;
  onViewMore?: () => void;
}

export default function CarList({ onSelectCar, lang, limit, onViewMore }: CarListProps) {
  const [showAll, setShowAll] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleWhatsAppDirect = (carName: string) => {
    const waNumber = DEFAULT_WA_NUMBER;
    const message = lang === 'EN'
      ? `Hello Batam Island Transport, I would like to book the ${carName} car rental in Batam. Please inform me about date availability and rates.`
      : `Halo Batam Island Transport, saya ingin memesan unit rental mobil ${carName} di Batam. Mohon informasi ketersediaan tanggal dan penawaran harganya.`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleRequestKendaraanWA = () => {
    const waNumber = DEFAULT_WA_NUMBER;
    const message = lang === 'EN'
      ? `Halo Batam Island Transport, saya ingin melakukan *Request Kendaraan* khusus untuk perjalanan di Batam. Mohon informasi pilihan unit dan penawarannya.`
      : `Halo Batam Island Transport, saya ingin melakukan *Request Kendaraan* untuk kebutuhan perjalanan di Batam. Mohon informasi pilihan unit yang tersedia dan penawarannya.`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const displayedCars = limit && !showAll ? CARS.slice(0, limit) : CARS;

  const handleMoreClick = () => {
    if (onViewMore) {
      onViewMore();
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="cars" className="py-20 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4" id="cars-heading">
          <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
            {t.cars_tag}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {t.cars_title}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.cars_desc}
          </p>
        </div>

        {/* Cars Grid: 4 items arranged cleanly */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
          id="cars-grid"
        >
          {displayedCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={car.id}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
              id={`car-card-${car.id}`}
            >
              {/* Image and Price Overlay Badge */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price overlay badge on Top Right */}
                <div className="absolute top-4 right-0 bg-[#2563eb] text-white px-3 py-1 rounded-l-full rounded-r-none font-display font-bold text-[10px] sm:text-[11px] shadow-md">
                  {lang === 'EN' ? (car.priceDisplayEn || 'Contact for Best Offer') : (car.priceDisplay || 'Hubungi Kontak')}
                </div>

                {/* Trust Rating Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="font-display font-bold text-xs text-gray-900">{car.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow space-y-3 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-wider">
                    {lang === 'EN' ? (car.categoryEn || car.category) : car.category}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 group-hover:text-luxury-gold transition-colors leading-snug">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 line-clamp-3 leading-relaxed pt-0.5">
                    {lang === 'EN' ? (car.descriptionEn || car.description) : car.description}
                  </p>
                </div>

                {/* Specs Specifications List with icons */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-gray-500 text-xs py-2 border-t border-b border-gray-50">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>{car.seats} {t.cars_seats}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="w-3.5 h-3.5 text-gray-400" />
                    <span>{lang === 'EN' ? (car.transmission === 'Manual/Matic' ? 'Manual / Auto' : car.transmission === 'Matic' ? 'Automatic' : car.transmission) : car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>Batam Area</span>
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="space-y-1.5">
                  <p className="font-display font-bold text-[10px] uppercase tracking-wider text-gray-400">
                    {t.cars_included_label}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(lang === 'EN' && car.includeListEn ? car.includeListEn : car.includeList).map((inc, i) => (
                      <span 
                        key={i} 
                        className="font-sans font-semibold text-[9.5px] text-luxury-gold bg-amber-50/60 px-2 py-0.5 rounded-full border border-amber-200/40"
                      >
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 mt-auto border-t border-gray-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectCar(car)}
                    className="flex-grow bg-[#2563eb] hover:bg-blue-700 text-white font-display font-bold text-xs py-2.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    id={`car-booking-btn-${car.id}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{lang === 'EN' ? 'Book Fleet' : 'Pesan Armada'}</span>
                  </button>

                  {/* WhatsApp Direct Green button */}
                  <button
                    onClick={() => handleWhatsAppDirect(car.name)}
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-sm shrink-0"
                    title={lang === 'EN' ? 'Book via WhatsApp' : 'Pesan via WhatsApp'}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* See more button if applicable */}
        {limit && CARS.length > limit && !showAll && (
          <div className="mt-10 text-center flex justify-center">
            <button
              onClick={handleMoreClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200/80 hover:border-[#2563eb] text-gray-700 hover:text-[#2563eb] font-display font-semibold text-sm rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <span>{lang === 'EN' ? 'See More Fleets' : 'Selengkapnya'}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#2563eb] transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {/* Request Kendaraan Section directly below Armada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 sm:mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-[#0f2444] to-slate-900 text-white p-6 sm:p-8 md:p-10 border border-blue-800/30 shadow-xl"
          id="request-kendaraan-section"
        >
          {/* Subtle glowing ambient lights */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-luxury-gold text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{t.cars_request_tag}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {t.cars_request_title}
              </h3>
              <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
                {t.cars_request_desc}
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={handleRequestKendaraanWA}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-sm sm:text-base py-3.5 px-8 rounded-2xl shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                id="request-kendaraan-wa-btn"
              >
                <svg className="w-5 h-5 fill-current shrink-0 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{t.cars_request_btn}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
