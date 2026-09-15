import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Car, MapPin, ChevronDown, Calendar, Search } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onRentClick: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const slides = [
    {
      id: 'barelang',
      title: lang === 'EN' ? 'MAJESTIC BARELANG BRIDGE & ISLANDS' : 'KEMEGAHAN JEMBATAN BARELANG BATAM',
      subtitle: lang === 'EN' 
        ? 'Need a reliable car and driver in Batam? Contact us and let us arrange the transportation that fits your journey.'
        : 'Nikmati keindahan mahakarya 6 jembatan megah Barelang, pesona bahari, dan kuliner seafood segar bersama Batam Island Transport.',
      image: '/barelang_bridge.jpg',
      location: 'Jembatan Barelang, Batam',
      waMsg: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to consult about car rental with driver for Barelang Bridge and Batam tour.'
        : 'Halo Batam Island Transport, saya ingin konsultasi sewa mobil + driver untuk rute Jembatan Barelang Batam.'
    },
    {
      id: 'corporate',
      title: lang === 'EN' ? 'CUSTOM ITINERARY & CORPORATE CHARTER' : 'CUSTOM TOUR & CORPORATE CHARTER',
      subtitle: lang === 'EN'
        ? 'Tailored private transportation offering complete flexibility for business meetings, corporate delegations, and bespoke itineraries.'
        : 'Layanan transportasi privat dengan kebebasan penuh mengatur jadwal dan rute untuk agenda meeting bisnis, delegasi corporate, dan tour kustom.',
      image: '/custom_batam_corporate.jpg',
      location: 'Batam Business Center & Marina',
      waMsg: lang === 'EN'
        ? 'Hello Batam Island Transport, I need information regarding corporate charter and customized business transport.'
        : 'Halo Batam Island Transport, saya ingin informasi mengenai corporate charter dan transportasi bisnis kustom.'
    },
    {
      id: 'nagoya',
      title: lang === 'EN' ? 'VIBRANT NAGOYA SHOPPING & CULINARY' : 'PUSAT BELANJA & KULINER NAGOYA BATAM',
      subtitle: lang === 'EN'
        ? 'Explore premier retail malls, vibrant street delicacies, relaxing spas, and commercial centers comfortably with our fleet.'
        : 'Kemudahan eksplorasi Nagoya Hill, Grand Batam, aneka kuliner khas, dan pusat bisnis bersama driver profesional berpengalaman sejak 1994.',
      image: '/nagoya_batam.jpg',
      location: 'Nagoya City Center, Batam',
      waMsg: lang === 'EN'
        ? 'Hello Batam Island Transport, I need transportation service for Nagoya shopping and city transfer.'
        : 'Halo Batam Island Transport, saya butuh transportasi untuk city tour dan belanja ke Nagoya Batam.'
    },
    {
      id: 'nongsa',
      title: lang === 'EN' ? 'LUXURY NONGSA BEACH & MARINA ESCAPE' : 'EKSKLUSIVITAS RESOR & MARINA NONGSA',
      subtitle: lang === 'EN'
        ? 'Seamless transfers to five-star beachfront resorts, Nongsa Point Marina, and world-class golf greens in Batam.'
        : 'Antar-jemput nyaman ke kawasan resor mewah, Nongsa Point Marina, terminal ferry, dan lapangan golf tepi pantai Batam.',
      image: '/nongsa_beach.jpg',
      location: 'Nongsa Coast & Marina, Batam',
      waMsg: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to inquire about transfers to Nongsa resort and marina.'
        : 'Halo Batam Island Transport, saya ingin bertanya tentang layanan antar-jemput kawasan resor Nongsa Batam.'
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex];

  const handleConsultation = () => {
    openWhatsApp(currentSlide.waMsg);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-gray-950 font-sans pt-24 sm:pt-28 lg:pt-30 pb-4 sm:pb-6"
    >
      {/* Background Image Carousel with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Royal Caribbean style: high-vibrancy travel photography with soft directional gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content — Well-proportioned so it never overflows or gets cut off */}
      <div className="relative z-20 flex-1 flex items-center py-2 sm:py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl space-y-3 sm:space-y-4 text-left"
            >
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-[#FFBA00]" />
                <span>{currentSlide.location}</span>
              </div>

              {/* Bold Condensed Headline — Responsive & fits on screen */}
              <h1 className="font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight drop-shadow-md">
                {currentSlide.title}
              </h1>

              {/* Subtitle Description */}
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl font-normal line-clamp-2 sm:line-clamp-3">
                {currentSlide.subtitle}
              </p>

              {/* CTA Buttons — Royal Caribbean Yellow Pill Button */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleConsultation}
                  className="px-6 sm:px-7 py-3 rounded-full bg-[#FFBA00] hover:bg-[#e5a800] text-gray-950 font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-xl flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95"
                  id="hero-book-btn"
                >
                  <MessageSquare className="w-4 h-4 text-gray-950" />
                  <span>{t.hero_cta_wa}</span>
                </button>

                <button
                  onClick={onRentClick}
                  className="px-6 sm:px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  id="hero-cars-btn"
                >
                  <Car className="w-4 h-4 text-white" />
                  <span>{t.hero_cta_cars}</span>
                </button>

                {/* Carousel Navigation Dots */}
                <div className="flex items-center gap-1.5 ml-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentSlideIndex 
                          ? 'w-6 h-2 bg-[#FFBA00]' 
                          : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Royal Caribbean Search Bar — Minimalist on Mobile (Destination only), Complete on Desktop */}
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 mt-3 mb-2 sm:mb-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-2.5 border border-gray-100 flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-2">
          
          {/* Column 1: Destination (Always visible on mobile & desktop) */}
          <div 
            onClick={() => scrollToSection('tours')}
            className="flex-1 px-3.5 sm:px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer lg:border-r border-gray-200 text-left group"
          >
            <span className="block text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
              {lang === 'EN' ? 'Destination' : 'Destinasi Wisata'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#0052D4] truncate group-hover:text-blue-700">
                {lang === 'EN' ? 'Barelang, Nagoya, Nongsa & Custom' : 'Barelang, Nagoya, Nongsa & Kustom'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#0052D4] shrink-0 ml-1.5" />
            </div>
          </div>

          {/* Column 2: Fleet Choice (Hidden on mobile, visible on desktop lg+) */}
          <div 
            onClick={() => scrollToSection('cars')}
            className="hidden lg:block flex-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border-r border-gray-200 text-left group"
          >
            <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
              {lang === 'EN' ? 'Fleet Choice' : 'Pilihan Armada'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-[#0052D4] truncate group-hover:text-blue-700">
                Pajero, HiAce, Zenix & Reborn
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#0052D4] shrink-0 ml-1.5" />
            </div>
          </div>

          {/* Column 3: Service & Schedule (Hidden on mobile, visible on desktop lg+) */}
          <div 
            onClick={() => scrollToSection('extra-services')}
            className="hidden lg:block flex-1 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer text-left group"
          >
            <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">
              {lang === 'EN' ? 'Service & Schedule' : 'Layanan & Durasi'}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-[#0052D4] truncate group-hover:text-blue-700">
                {lang === 'EN' ? 'Daily Rental, Transfer & Charter' : 'Rental Harian, Antar-Jemput & Charter'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#0052D4] shrink-0 ml-1.5" />
            </div>
          </div>

          {/* Action Button: Royal Blue Pill Button */}
          <button
            onClick={handleConsultation}
            className="bg-[#0052D4] hover:bg-[#003da5] text-white font-extrabold text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-7 rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2 group active:scale-95"
            id="search-bar-submit"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{lang === 'EN' ? 'Search & Book' : 'Cari & Booking'}</span>
          </button>

        </div>
      </div>
    </section>
  );
}
