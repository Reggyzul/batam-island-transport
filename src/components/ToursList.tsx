import React, { useState } from 'react';
import { Clock, Compass, MapPin, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Filter } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage, LANDING_PAGE_PACKAGES } from '../data/tours';
import TourDetailModal from './TourDetailModal';
import { motion } from 'motion/react';

interface ToursListProps {
  lang: 'ID' | 'EN';
  isLanding?: boolean;
  onViewAllTours?: () => void;
}

export default function ToursList({ lang, isLanding = false, onViewAllTours }: ToursListProps) {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'nature'>('all');

  const displayedPackages = isLanding 
    ? LANDING_PAGE_PACKAGES 
    : (activeFilter === 'all' 
        ? TOUR_PACKAGES 
        : activeFilter === 'flagship' 
          ? TOUR_PACKAGES.filter(p => p.category === 'flagship') 
          : TOUR_PACKAGES.filter(p => p.category === 'nature'));

  return (
    <section id="tours" className="py-16 sm:py-24 bg-gray-50/60 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Royal Caribbean Clean & Bold Style */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-bold text-xs sm:text-sm text-[#0052D4] tracking-widest uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/70 inline-block">
            {isLanding
              ? (lang === 'EN' ? 'FEATURED BATAM TOUR PACKAGES' : 'PAKET TOUR UNGGULAN BATAM')
              : (lang === 'EN' ? 'COMPLETE BATAM DESTINATIONS & TOURS' : 'PAKET TOUR & DESTINASI WISATA BATAM')}
          </span>

          <h2 className="font-extrabold uppercase text-3xl sm:text-4xl text-gray-900 tracking-tight">
            {isLanding
              ? (lang === 'EN' ? 'Explore Iconic Batam Attractions' : 'Eksplorasi Destinasi Unggulan Batam')
              : (lang === 'EN' ? 'All Batam Tour Packages & Highlights' : 'Semua Paket Wisata & Destinasi Batam')}
          </h2>
          
          <div className="w-16 h-1 bg-[#0052D4] rounded-full mx-auto my-3" />
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {isLanding
              ? (lang === 'EN'
                  ? 'Private, flexible travel experiences covering Barelang Bridge, Nagoya shopping & dining, Nongsa coastal resorts, and tailored corporate charter across Batam.'
                  : 'Layanan transportasi privat dan fleksibel menjelajahi Jembatan Barelang, surga belanja & kuliner Nagoya, resor pantai Nongsa, serta rute kustom sesuai permintaan customer.')
              : (lang === 'EN'
                  ? 'Discover our full collection of day tours, shopping trips, coastal retreats, and customized corporate itineraries throughout Batam Island.'
                  : 'Jelajahi seluruh pilihan paket wisata keliling kota, belanja, pesisir pantai, dan perjalanan korporat kustom di seluruh penjuru Pulau Batam.')}
          </p>
        </div>

        {/* Filter Tabs for Dedicated Page */}
        {!isLanding && (
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'all'
                  ? 'bg-[#0052D4] text-white border-[#0052D4] shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-[#0052D4]'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `All Packages (${TOUR_PACKAGES.length})` : `Semua Paket (${TOUR_PACKAGES.length})`}</span>
            </button>

            <button
              onClick={() => setActiveFilter('flagship')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'flagship'
                  ? 'bg-[#0052D4] text-white border-[#0052D4] shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-[#0052D4]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `City & Heritage (${TOUR_PACKAGES.filter(p => p.category === 'flagship').length})` : `Kota & Wisata Populer (${TOUR_PACKAGES.filter(p => p.category === 'flagship').length})`}</span>
            </button>

            <button
              onClick={() => setActiveFilter('nature')}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                activeFilter === 'nature'
                  ? 'bg-[#0052D4] text-white border-[#0052D4] shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-[#0052D4]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'EN' ? `Beach & Resorts (${TOUR_PACKAGES.filter(p => p.category === 'nature').length})` : `Pantai & Resor (${TOUR_PACKAGES.filter(p => p.category === 'nature').length})`}</span>
            </button>
          </div>
        )}

        {/* Tour Cards Grid: Restoring complete rich details on every card */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isLanding ? 'lg:grid-cols-4 gap-6' : 'lg:grid-cols-3 gap-8'}`}>
          {displayedPackages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={pkg.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-200/80 hover:border-[#0052D4]/50 transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Container with Floating Badge & Duration */}
              <div 
                className="relative overflow-hidden aspect-[16/10] bg-gray-100 cursor-pointer"
                onClick={() => setSelectedTour(pkg)}
              >
                <img
                  src={pkg.image}
                  alt={lang === 'EN' ? pkg.titleEn || pkg.title : pkg.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge on Top Right */}
                {pkg.badge && (
                  <span className="absolute top-3.5 right-3.5 bg-[#FFBA00] text-gray-950 px-3 py-1 rounded-full font-extrabold text-[10px] uppercase shadow-md tracking-wider">
                    {pkg.badge}
                  </span>
                )}

                {/* Duration on Bottom Left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#FFBA00]" />
                  <span>{lang === 'EN' ? pkg.durationEn || pkg.duration : pkg.duration}</span>
                </div>
              </div>

              {/* Card Body with Complete Detailed Information */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-left space-y-3">
                
                {/* Package Title */}
                <h3 
                  onClick={() => setSelectedTour(pkg)}
                  className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-[#0052D4] transition-colors cursor-pointer leading-snug line-clamp-2"
                >
                  {lang === 'EN' ? pkg.titleEn || pkg.title : pkg.title}
                </h3>

                {/* Price Subtitle */}
                <p className="font-bold text-xs uppercase tracking-wider text-[#0052D4]">
                  {lang === 'EN' ? pkg.priceTextEn || pkg.priceText : pkg.priceText}
                </p>

                {/* Full Description Text */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3">
                  {lang === 'EN' ? pkg.descriptionEn || pkg.description : pkg.description}
                </p>

                {/* Key Inclusions Snippet */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    {lang === 'EN' ? 'Key Inclusions:' : 'Fasilitas Utama Included:'}
                  </span>
                  <div className="space-y-1">
                    {(lang === 'EN' ? pkg.includedEn || pkg.included : pkg.included).slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-gray-700 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052D4] shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Button — Royal Caribbean Styled Pill Button */}
                <div className="pt-3 mt-auto border-t border-gray-100">
                  <button
                    onClick={() => setSelectedTour(pkg)}
                    className="w-full py-3 px-4 rounded-full bg-gray-900 hover:bg-[#0052D4] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
                  >
                    <span>{lang === 'EN' ? 'View Details and Itinerary' : 'Lihat Detail dan Jadwal'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFBA00]" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Packages Button for Landing */}
        {isLanding && onViewAllTours && (
          <div className="mt-14 text-center flex justify-center">
            <button
              onClick={onViewAllTours}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold text-sm rounded-full transition-all cursor-pointer group shadow-sm"
            >
              <span>{lang === 'EN' ? 'View All Batam Tour Packages' : 'Lihat Semua Pilihan Paket Wisata'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* Interactive Detail Modal Component */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        lang={lang}
      />
    </section>
  );
}
