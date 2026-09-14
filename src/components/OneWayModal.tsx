import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ArrowRightLeft, Clock, CheckCircle2, MessageSquare, Search, Navigation } from 'lucide-react';
import { ONE_WAY_ROUTES, OneWayRoute } from '../data/oneWayRoutes';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface OneWayModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ID' | 'EN';
}

export default function OneWayModal({ isOpen, onClose, lang }: OneWayModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'port' | 'airport' | 'tourism' | 'city'>('all');

  if (!isOpen) return null;

  const filteredRoutes = ONE_WAY_ROUTES.filter((route) => {
    const matchesSearch =
      route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (route.descriptionEn && route.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || route.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBooking = (route: OneWayRoute) => {
    const text = lang === 'EN'
      ? `Hello Batam Island Transport, I would like to book a private transfer: ${route.name} (${route.from} -> ${route.to}). Please provide vehicle availability and pricing.`
      : route.waMessage;
    const waUrl = `https://api.whatsapp.com/send?phone=${DEFAULT_WA_NUMBER}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 font-sans">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto border border-gray-100"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-gray-950 via-luxury-black to-gray-900 text-white p-6 sm:p-8 border-b border-luxury-gold/30 relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title={lang === 'EN' ? 'Close' : 'Tutup'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-w-2xl text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-luxury-gold text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                  {lang === 'EN' ? 'BATAM TRANSFER ROUTES' : 'LAYANAN TRANSFER BATAM'}
                </span>
                <span className="text-luxury-gold font-display font-bold text-xs uppercase tracking-widest">
                  {lang === 'EN' ? 'POINT-TO-POINT SERVICE' : 'LAYANAN SATU ARAH & PP'}
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                {lang === 'EN' ? 'Batam Transfer & Airport / Ferry Port Routes' : 'Pilihan Rute Transfer Bandara, Pelabuhan & Kota Batam'}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'EN'
                  ? 'Private, door-to-door air-conditioned transport connecting Hang Nadim Airport, Batam Centre & Harbour Bay ferry terminals, hotels, Barelang, and industrial centers.'
                  : 'Layanan transportasi privat ber-AC antar-jemput pintu ke pintu menghubungkan Bandara Hang Nadim, terminal ferry Batam Centre & Harbour Bay, hotel, Barelang, dan pusat bisnis.'}
              </p>
            </div>

            {/* Search and Category Filter Controls */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-md">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'EN' ? 'Search destination (e.g. Airport, Harbour Bay, Barelang)...' : 'Cari rute tujuan (contoh: Bandara, Harbour Bay, Barelang)...'}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/10 text-white placeholder-gray-400 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold border border-white/15"
                />
              </div>

              {/* Category Quick Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-luxury-gold text-white shadow-sm'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {lang === 'EN' ? `All (${ONE_WAY_ROUTES.length})` : `Semua (${ONE_WAY_ROUTES.length})`}
                </button>
                <button
                  onClick={() => setActiveCategory('port')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeCategory === 'port'
                      ? 'bg-luxury-gold text-white shadow-sm'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {lang === 'EN' ? 'Harbors' : 'Pelabuhan'}
                </button>
                <button
                  onClick={() => setActiveCategory('airport')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeCategory === 'airport'
                      ? 'bg-luxury-gold text-white shadow-sm'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {lang === 'EN' ? 'Airport' : 'Bandara'}
                </button>
                <button
                  onClick={() => setActiveCategory('tourism')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeCategory === 'tourism'
                      ? 'bg-luxury-gold text-white shadow-sm'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {lang === 'EN' ? 'Tourism' : 'Wisata'}
                </button>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Content: 9 Route Cards */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-4 flex-grow bg-gray-50/70">
            {filteredRoutes.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Navigation className="w-12 h-12 text-gray-300 mx-auto" />
                <p className="font-display font-bold text-base text-gray-600">
                  {lang === 'EN' ? 'No routes found matching your search.' : 'Rute tidak ditemukan.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="text-xs font-display font-bold text-luxury-gold hover:underline cursor-pointer"
                >
                  {lang === 'EN' ? 'Reset Search' : 'Reset Pencarian'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredRoutes.map((route) => (
                  <div
                    key={route.id}
                    className="bg-white rounded-2xl border border-gray-200/80 hover:border-luxury-gold/50 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between text-left space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-2 border-b border-gray-100 pb-3">
                        <div className="space-y-1">
                          <span className="text-[9px] font-display font-bold uppercase tracking-wider text-luxury-gold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                            {lang === 'EN' ? 'ONE WAY / RETURN' : 'ONE WAY / PP'}
                          </span>
                          <h3 className="font-display font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-luxury-gold transition-colors leading-snug">
                            {route.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg shrink-0">
                          <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                          <span>{lang === 'EN' ? route.durationEn : route.duration}</span>
                        </div>
                      </div>

                      {/* Route Path visual */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/40 p-2.5 rounded-xl border border-amber-100/60">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{route.from}</span>
                        </div>
                        <ArrowRightLeft className="w-3.5 h-3.5 text-luxury-gold shrink-0 mx-auto" />
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{route.to}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {lang === 'EN' ? route.descriptionEn : route.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {(lang === 'EN' ? route.keyPointsEn : route.keyPoints).map((point, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Action Footer */}
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-gray-500 font-sans">
                        <span>{lang === 'EN' ? 'Facility: Private AC Car + Driver + Fuel' : 'Fasilitas: Mobil AC + Driver + BBM'}</span>
                      </div>
                      <button
                        onClick={() => handleBooking(route)}
                        className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                        <span>{lang === 'EN' ? 'Book Route via WA' : 'Pesan Rute Ini via WA'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Bottom Footer Info */}
          <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-left text-xs text-gray-500 font-sans">
              <span className="font-bold text-gray-900 block">
                {lang === 'EN' ? 'Custom Pickup or Other Route?' : 'Butuh Rute Lain atau Titik Jemput Khusus?'}
              </span>
              <span>
                {lang === 'EN'
                  ? 'We also serve flexible pick-up anywhere across Batam Island.'
                  : 'Kami melayani rute fleksibel antar-jemput di seluruh wilayah Pulau Batam.'}
              </span>
            </div>

            <div className="flex gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-display font-semibold text-xs hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto"
              >
                {lang === 'EN' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
