/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ToursList from './components/ToursList';
import ExtraServices from './components/ExtraServices';
import CarList from './components/CarList';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import OneWayModal from './components/OneWayModal';
import FaqSection from './components/FaqSection';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';
import { openWhatsApp } from './utils/whatsapp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'tours' | 'rentals' | 'gallery'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showOneWayModal, setShowOneWayModal] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang')?.toUpperCase();
      if (urlLang === 'EN' || urlLang === 'ID') return urlLang;

      const saved = localStorage.getItem('batam_user_lang_v2');
      if (saved === 'ID') return 'ID';

      return 'EN'; // English is the PRIMARY language by default
    } catch {
      return 'EN';
    }
  });

  const handleLanguageChange = (newLang: 'ID' | 'EN') => {
    setLang(newLang);
    try {
      localStorage.setItem('batam_user_lang_v2', newLang);
      localStorage.setItem('batam_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'EN' ? 'en' : 'id';
    document.title = lang === 'EN'
      ? 'Batam Car Rental with Driver | Airport & Port Transfer - Batam Island Transport'
      : 'Sewa Mobil Batam Murah + Driver | Rental Mobil & Antar Jemput Bandara - Batam Island Transport';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang === 'EN'
          ? 'Batam Car Rental with professional driver since 1994. Toyota HiAce Commuter, Mitsubishi Pajero Sport, Innova Zenix & Reborn. Hang Nadim Airport & ferry port transfers. 24/7 WhatsApp booking.'
          : 'Sewa Mobil Batam dengan driver profesional berpengalaman sejak 1994. Rental Toyota HiAce Commuter, Mitsubishi Pajero Sport, Innova Zenix & Reborn. Antar-jemput Bandara Hang Nadim, Pelabuhan Ferry & Tour. Siap 24/7.'
      );
    }
  }, [lang]);
  
  const t = TRANSLATIONS[lang];

  // Monitor scrolling to highlight appropriate header nav item & show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track active section on home page
      if (currentPage === 'home') {
        const sections = ['home', 'cars', 'tours', 'extra-services', 'faq', 'contact'];
        const scrollPosition = window.scrollY + 250; // Offset

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else if (sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else if (sectionId === 'tours') {
      setCurrentPage('tours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('tours');
    } else if (sectionId === 'rentals') {
      setCurrentPage('rentals');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('rentals');
    } else if (sectionId === 'gallery') {
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('gallery');
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp template for fast-chat floater
  const handleFastWhatsApp = () => {
    openWhatsApp();
  };

  return (
    <div 
      className="relative min-h-screen bg-white text-gray-800 selection:bg-[#2563eb] selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        lang={lang} 
        setLang={handleLanguageChange} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookingClick={() => setSelectedCar(CARS[0])}
        onOneWayClick={() => setShowOneWayModal(true)}
      />

      {/* Main Page Layout Flow */}
      <main className="relative z-10">
        
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section */}
            <Hero onRentClick={() => handleNavClick('rentals')} lang={lang} />

            {/* 2. Section: Pilihan Mobil / Armada */}
            <CarList 
              onSelectCar={handleSelectCar} 
              lang={lang} 
              limit={4} 
              onViewMore={() => handleNavClick('rentals')}
            />

            {/* 3. Section: 4 Paket Tour Pilihan */}
            <ToursList 
              lang={lang} 
              isLanding={true} 
              onViewAllTours={() => handleNavClick('tours')} 
            />

            {/* 4. Section: Layanan Tambahan */}
            <ExtraServices lang={lang} onOneWayClick={() => setShowOneWayModal(true)} />

            {/* 5. Section: SEO FAQ & Travel Guide */}
            <FaqSection lang={lang} />
          </>
        ) : currentPage === 'about' ? (
          <div className="pt-24 sm:pt-28">
            {/* Elegant Header Banner for About Page */}
            <div className="bg-gradient-to-r from-gray-950 via-luxury-black to-gray-950 text-white py-14 px-4 border-b border-luxury-gold/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <span className="text-luxury-gold font-display font-bold text-xs uppercase tracking-[0.2em] bg-white/5 border border-luxury-gold/30 px-4 py-1.5 rounded-full inline-block shadow-sm">
                  {lang === 'EN' ? 'OFFICIAL COMPANY PROFILE' : 'PROFIL RESMI PERUSAHAAN'}
                </span>
                <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                  {lang === 'EN' ? 'About Batam Island Transport' : 'Tentang Batam Island Transport'}
                </h1>
                <p className="font-sans text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                  {lang === 'EN' 
                    ? 'Premier car rental and transport provider in Batam experienced since 1994. Serving personal, family, corporate, and group travel.' 
                    : 'Penyedia layanan rental mobil dan transportasi di Batam berpengalaman sejak 1994, melayani kebutuhan personal, keluarga, corporate, dan group.'}
                </p>
              </div>
            </div>

            {/* Detailed About Content */}
            <About lang={lang} />

            {/* Extra Services Complementary Section */}
            <ExtraServices lang={lang} onOneWayClick={() => setShowOneWayModal(true)} />
          </div>
        ) : currentPage === 'tours' ? (
          <div className="pt-28 sm:pt-32">
            {/* Tours View */}
            <ToursList lang={lang} isLanding={false} />
            
            {/* Layanan Tambahan */}
            <ExtraServices lang={lang} onOneWayClick={() => setShowOneWayModal(true)} />
          </div>
        ) : currentPage === 'rentals' ? (
          <div className="pt-28 sm:pt-32">
            {/* Rentals View */}
            <CarList onSelectCar={handleSelectCar} lang={lang} />
            
            {/* Layanan Tambahan */}
            <ExtraServices lang={lang} onOneWayClick={() => setShowOneWayModal(true)} />
          </div>
        ) : (
          <div className="pt-28 sm:pt-32">
            {/* Gallery View */}
            <GallerySection lang={lang} />
          </div>
        )}

      </main>

      {/* Footer Contact Column */}
      <Footer onNavClick={handleNavClick} lang={lang} />

      {/* Interactive Booking Popup */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* Interactive One Way Routes Popup */}
      <OneWayModal isOpen={showOneWayModal} onClose={() => setShowOneWayModal(false)} lang={lang} />

      {/* Sticky Fast-Action Sidebar on Far Right of Screen */}
      <div 
        className="fixed bottom-8 right-6 z-40 flex flex-col gap-3.5"
        id="screen-action-sidebar"
      >
        {/* 1. Official WhatsApp Fast Floater (Green) */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          onClick={handleFastWhatsApp}
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl cursor-pointer transition-colors border border-white/10 group relative"
          title={t.float_whatsapp_title}
          id="floater-whatsapp"
        >
          <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="absolute right-14 bg-luxury-black/95 text-white font-display font-bold text-[9px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/5 uppercase tracking-wider">
            {t.float_whatsapp_title}
          </span>
        </motion.button>

        {/* 2. Back to Top Floater (Blue) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.08 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#2563eb] hover:bg-blue-700 text-white flex items-center justify-center shadow-xl cursor-pointer transition-colors border border-white/10 group relative"
              title={lang === 'EN' ? 'Back to Top' : 'Kembali ke Atas'}
              id="floater-scrolltop"
            >
              <ChevronUp className="w-6 h-6 shrink-0" />
              <span className="absolute right-14 bg-luxury-black/95 text-white font-display font-bold text-[9px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/5 uppercase tracking-wider">
                Scroll To Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
