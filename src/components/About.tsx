import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, Clock, ShieldCheck, Tag, Sparkles, Target, Compass, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'visi' | 'misi' | 'komitmen'>('visi');
  const t = TRANSLATIONS[lang];

  const keyStrengths = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_clean_title,
      description: t.strength_clean_desc
    },
    {
      icon: <UserCheck className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_driver_title,
      description: t.strength_driver_desc
    },
    {
      icon: <Tag className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_price_title,
      description: t.strength_price_desc
    },
    {
      icon: <Clock className="w-5 h-5 text-luxury-gold" />,
      title: t.strength_time_title,
      description: t.strength_time_desc
    }
  ];

  const misiList = [
    t.misi_1,
    t.misi_2,
    t.misi_3,
    t.misi_4,
    t.misi_5,
    t.misi_6,
    t.misi_7
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Left: The Artistic Card */}
          <div className="lg:col-span-5 relative" id="about-image-card">
            <div className="relative p-6 sm:p-8 bg-luxury-charcoal rounded-[40px] shadow-2xl overflow-hidden group">
              
              {/* Card Header branding inside */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <p className="text-[10px] font-display font-medium tracking-[0.2em] text-gray-400">
                  {t.about_card_tag}
                </p>
                <div className="flex flex-col items-end">
                  <span className="font-display font-bold text-xs tracking-tight text-luxury-gold">
                    BATAM ISLAND TRANSPORT
                  </span>
                  <span className="text-[8px] text-gray-400 tracking-wider">BATAM - KEPULAUAN RIAU</span>
                </div>
              </div>

              {/* Central Premium vehicle image inside frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-6 border border-white/10 bg-gradient-to-b from-white via-white to-slate-100 p-4 flex items-center justify-center">
                <img
                  src="/pajero_sport.jpg"
                  alt="Mitsubishi Pajero Sport Batam Island Transport"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-luxury-gold/90 text-white font-display font-bold text-[10px] px-3 py-1.5 rounded-lg shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.about_badge}</span>
                </div>
              </div>

              {/* Gold Accented Callout Text inside frame */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display font-bold text-base text-white tracking-tight uppercase leading-snug">
                    FLEXIBLE FLEET, <br />
                    <span className="text-luxury-gold">SINCE 1994</span>
                  </h4>
                  <div className="text-right">
                    <span className="block font-display font-black text-3xl text-luxury-gold leading-none">30+</span>
                    <span className="text-[8px] text-gray-400">TAHUN PENGALAMAN</span>
                  </div>
                </div>
                <p className="text-[12px] text-gray-300 leading-relaxed font-sans">
                  {lang === 'EN' 
                    ? 'Need a reliable car and driver in Batam? Contact us and let us arrange the transportation that fits your journey.' 
                    : 'Penyedia layanan rental mobil & transportasi dengan driver di Batam berpengalaman sejak 1994 untuk kebutuhan personal, wisata, dan corporate group.'}
                </p>
              </div>

              {/* Highlight badge at bottom */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1 text-gray-300">
                  <span>Batam, Kepulauan Riau</span>
                </div>
                <span className="text-luxury-gold font-semibold">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* About Right: Text Descriptions & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200/50 inline-block mb-3">
                {t.about_tag}
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
                {t.about_title_1} <span className="text-luxury-gold">{t.about_title_2}</span>
              </h2>
            </div>

            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.about_desc_1}
            </p>

            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
              {t.about_desc_2}
            </p>

            {/* Strengths 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {keyStrengths.map((strength, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-luxury-gold/30 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100/50 shrink-0">
                    {strength.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-gray-900 mb-1">
                      {strength.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Visi, Misi & Komitmen Card */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              {/* Tab navigation */}
              <div className="flex gap-2 p-1.5 bg-gray-100/80 rounded-2xl max-w-md">
                <button
                  onClick={() => setActiveTab('visi')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-display font-bold transition-all ${
                    activeTab === 'visi'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Target className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{t.visi_title}</span>
                </button>
                <button
                  onClick={() => setActiveTab('misi')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-display font-bold transition-all ${
                    activeTab === 'misi'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{t.misi_title}</span>
                </button>
                <button
                  onClick={() => setActiveTab('komitmen')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-display font-bold transition-all ${
                    activeTab === 'komitmen'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{t.komitmen_title}</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-gray-50 border border-amber-200/40">
                <AnimatePresence mode="wait">
                  {activeTab === 'visi' && (
                    <motion.div
                      key="visi"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2 text-left"
                    >
                      <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wide flex items-center gap-2">
                        <Target className="w-4 h-4 text-luxury-gold" />
                        <span>{t.visi_title}</span>
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed italic border-l-2 border-luxury-gold pl-3 py-1">
                        "{t.visi_desc}"
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'misi' && (
                    <motion.div
                      key="misi"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2 text-left"
                    >
                      <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wide flex items-center gap-2">
                        <Compass className="w-4 h-4 text-luxury-gold" />
                        <span>{t.misi_title}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600 font-sans">
                        {misiList.map((misi, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                            <span>{misi}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === 'komitmen' && (
                    <motion.div
                      key="komitmen"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2 text-left"
                    >
                      <h4 className="font-display font-bold text-sm text-gray-900 uppercase tracking-wide flex items-center gap-2">
                        <HeartHandshake className="w-4 h-4 text-luxury-gold" />
                        <span>{t.komitmen_title}</span>
                      </h4>
                      <div className="font-display font-extrabold text-base text-luxury-gold">
                        "{t.komitmen_tagline}"
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {t.komitmen_desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
