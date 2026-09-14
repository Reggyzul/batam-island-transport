import React, { useState } from 'react';
import { X, Clock, CheckCircle2, AlertCircle, MapPin, Compass, MessageSquare, Sparkles, Award, Star, Gift } from 'lucide-react';
import { TourPackage, PackageTier } from '../data/tours';
import { motion, AnimatePresence } from 'motion/react';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
}

export default function TourDetailModal({ tour, onClose, lang }: TourDetailModalProps) {
  const [selectedTierId, setSelectedTierId] = useState<'standard' | 'premium' | 'platinum'>('premium');

  if (!tour) return null;

  const currentTier = tour.packageTiers.find(t => t.id === selectedTierId) || tour.packageTiers[1];

  const handleWhatsApp = () => {
    const waNumber = DEFAULT_WA_NUMBER;
    const tierText = currentTier ? ` [Kategori ${currentTier.name.toUpperCase()}: ${currentTier.inclusions.join(', ')}]` : '';
    const fullMsg = `${tour.waMessage}${tierText}`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(fullMsg)}`, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto border border-gray-100"
        >
          {/* Close Button Header Floating */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner Image */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-gray-900">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Badge */}
            {tour.badge && (
              <span className="absolute top-4 left-4 bg-[#f59e0b] text-white px-3.5 py-1.5 rounded-lg font-display font-extrabold text-xs uppercase tracking-wider shadow-lg">
                {tour.badge}
              </span>
            )}

            {/* Banner Text overlay */}
            <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f59e0b] bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                <Clock className="w-3.5 h-3.5" />
                {lang === 'EN' ? tour.durationEn || tour.duration : tour.duration}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-tight">
                {lang === 'EN' ? tour.titleEn || tour.title : tour.title}
              </h2>
              <p className="font-display font-bold text-base sm:text-lg text-[#f59e0b]">
                {lang === 'EN' ? tour.priceTextEn || tour.priceText : tour.priceText}
              </p>
            </div>
          </div>

          {/* Modal Scrollable Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans flex-grow">
            
            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-base text-gray-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#d97706]" />
                {lang === 'EN' ? 'Package Overview' : 'Deskripsi Paket'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {lang === 'EN' ? tour.descriptionEn || tour.description : tour.description}
              </p>
            </div>

            {/* PACKAGE TIERS SELECTION (Standard, Premium, Platinum) */}
            <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0052D4]" />
                  {lang === 'EN' ? 'Choose Package Category' : 'Pilihan Kategori Paket Wisata'}
                </h4>
                <span className="text-[10px] font-extrabold text-[#0052D4] uppercase bg-blue-100 px-2.5 py-1 rounded-full">
                  3 Variasi Paket
                </span>
              </div>

              {/* Tier Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {tour.packageTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`py-3 px-2 rounded-xl text-center transition-all cursor-pointer border flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'bg-[#0052D4] text-white border-[#0052D4] shadow-md scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#0052D4] hover:bg-blue-50/40'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {tier.id === 'standard' && <Star className="w-3.5 h-3.5" />}
                        {tier.id === 'premium' && <Sparkles className="w-3.5 h-3.5" />}
                        {tier.id === 'platinum' && <Gift className="w-3.5 h-3.5" />}
                        <span className="font-extrabold text-xs uppercase tracking-wider">{tier.name}</span>
                      </div>
                      <span className={`text-[9px] font-medium ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                        {tier.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Display Current Selected Tier Bonuses */}
              <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm space-y-2">
                <p className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0052D4]" />
                  {lang === 'EN' ? `Fasilitas Kategori ${currentTier.name}:` : `Bonus Fasilitas Kategori ${currentTier.name}:`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {(lang === 'EN' ? currentTier.inclusionsEn : currentTier.inclusions).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-blue-50/40 p-2 rounded-lg border border-blue-100/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3">
              <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0052D4]" />
                {lang === 'EN' ? 'Destinations & Highlights' : 'Destinasi & Daya Tarik Utama'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(lang === 'EN' ? tour.highlightsEn || tour.highlights : tour.highlights).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Inclusions */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {lang === 'EN' ? 'Included Standard Facilities' : 'Fasilitas Utama Included'}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'EN' ? tour.includedEn || tour.included : tour.included).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-gray-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  {lang === 'EN' ? 'Exclusions' : 'Tidak Termasuk'}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'EN' ? tour.excludedEn || tour.excluded : tour.excluded).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Itinerary Section */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0052D4]" />
                {lang === 'EN' ? 'Sample Itinerary Schedule' : 'Rencana Perjalanan (Itinerary)'}
              </h4>
              <div className="space-y-2.5">
                {tour.itinerary.map((step, idx) => (
                  <div key={idx} className="flex gap-3 text-xs bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="font-bold shrink-0 min-w-[130px] text-[#0052D4]">
                      {step.title}
                    </span>
                    <span className="text-gray-600">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Sticky Bottom Action Footer */}
          <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div>
              <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider block">
                {lang === 'EN' ? 'Selected Category' : 'Kategori Terpilih'}
              </span>
              <span className="font-black text-lg text-[#0052D4] uppercase">
                PAKET {currentTier.name}
              </span>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-display font-semibold text-xs hover:bg-gray-100 transition-all cursor-pointer w-1/3 sm:w-auto"
              >
                {lang === 'EN' ? 'Close' : 'Tutup'}
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="flex-grow sm:flex-grow-0 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{lang === 'EN' ? `Book ${currentTier.name} via WA` : `Pesan ${currentTier.name} via WA`}</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
