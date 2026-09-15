import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../utils/translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Compass, 
  Car, 
  Briefcase,
  ArrowRightLeft,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals' | 'gallery';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals' | 'gallery') => void;
  activeSection: string;
  onBookingClick: () => void;
  onOneWayClick: () => void;
}

export default function Header({
  onNavClick,
  lang,
  setLang,
  currentPage,
  setCurrentPage,
  activeSection,
  onBookingClick,
  onOneWayClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showLayananDropdown, setShowLayananDropdown] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (pageId: 'home' | 'about' | 'tours' | 'rentals' | 'gallery') => {
    setCurrentPage(pageId);
    onNavClick(pageId);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      onNavClick(sectionId);
    }, 100);
    setIsOpen(false);
    setShowLayananDropdown(false);
  };

  const servicesList = [
    {
      id: 'tours',
      label: lang === 'EN' ? 'Batam Destinations & Tours' : 'Destinasi Wisata Batam',
      desc: lang === 'EN' ? 'Barelang, Nagoya, Nongsa & Custom' : 'Barelang, Nagoya, Nongsa & Kustom',
      icon: Compass,
      action: () => handlePageClick('tours')
    },
    {
      id: 'rentals',
      label: lang === 'EN' ? 'Car Rental Fleet' : 'Pilihan Armada Mobil',
      desc: lang === 'EN' ? 'Pajero Sport, HiAce, Zenix & Reborn' : 'Pajero Sport, HiAce, Zenix & Reborn',
      icon: Car,
      action: () => handlePageClick('rentals')
    },
    {
      id: 'extra-services',
      label: lang === 'EN' ? 'Transfer Services' : 'Layanan Antar-Jemput',
      desc: lang === 'EN' ? 'Airport, Hotel & Ferry Port' : 'Bandara Hang Nadim, Hotel & Pelabuhan',
      icon: Briefcase,
      action: () => handleSectionClick('extra-services')
    },
    {
      id: 'oneway',
      label: lang === 'EN' ? 'One Way (Batam Routes)' : 'One Way (Rute Transfer Batam PP)',
      desc: lang === 'EN' ? 'Airport, Ferry Terminals, Nagoya & Barelang' : 'Bandara, Terminal Ferry, Nagoya & Barelang',
      icon: ArrowRightLeft,
      action: () => {
        onOneWayClick();
        setShowLayananDropdown(false);
      }
    }
  ];

  const isLayananActive = currentPage === 'tours' || currentPage === 'rentals' || (currentPage === 'home' && activeSection === 'extra-services');

  // Determine if hero is visible (not scrolled) on home page
  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col font-sans"
    >
      {/* Main Navigation Bar — Clean Modern Style */}
      <div
        className={`w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent py-3 sm:py-4'
            : 'bg-white/98 backdrop-blur-md py-2 sm:py-2.5 border-b border-gray-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo — Icon + Clean Bold Brand Name */}
            <div 
              onClick={() => handlePageClick('home')}
              className="flex items-center cursor-pointer group py-1 gap-2.5"
              id="header-logo"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm shrink-0 p-0.5 border border-gray-200/60 group-hover:scale-105 transition-transform">
                <img 
                  src="/logo_icon.jpg" 
                  alt="Batam Island Transport Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className={`font-bold text-sm sm:text-base leading-none tracking-tight transition-colors ${
                  isTransparent ? 'text-white' : 'text-gray-900 group-hover:text-[#0052D4]'
                }`}>
                  BATAM ISLAND TRANSPORT
                </span>
                <span className={`text-[9px] font-semibold uppercase tracking-[0.15em] mt-0.5 ${
                  isTransparent ? 'text-white/75' : 'text-gray-500'
                }`}>
                  Explore More, Travel Better
                </span>
              </div>
            </div>

            {/* Desktop Nav Links — Royal Caribbean clean bold sans-serif text */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
              {/* Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`px-3.5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-lg ${
                  currentPage === 'home' && activeSection === 'home'
                    ? isTransparent ? 'text-[#FFBA00]' : 'text-[#0052D4]'
                    : isTransparent ? 'text-white hover:text-[#FFBA00]' : 'text-gray-700 hover:text-[#0052D4]'
                }`}
              >
                {t.nav_home}
              </button>

              {/* Tentang Kami */}
              <button
                onClick={() => handlePageClick('about')}
                className={`px-3.5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-lg ${
                  currentPage === 'about'
                    ? isTransparent ? 'text-[#FFBA00]' : 'text-[#0052D4]'
                    : isTransparent ? 'text-white hover:text-[#FFBA00]' : 'text-gray-700 hover:text-[#0052D4]'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLayananDropdown(true)}
                onMouseLeave={() => setShowLayananDropdown(false)}
              >
                <button
                  onClick={() => setShowLayananDropdown(!showLayananDropdown)}
                  className={`px-3.5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-lg flex items-center gap-1 ${
                    isLayananActive
                      ? isTransparent ? 'text-[#FFBA00]' : 'text-[#0052D4]'
                      : isTransparent ? 'text-white hover:text-[#FFBA00]' : 'text-gray-700 hover:text-[#0052D4]'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLayananDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showLayananDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl p-2 border border-gray-100 z-50 text-left"
                    >
                      {servicesList.map((srv) => {
                        const IconComp = srv.icon;
                        const isSrvActive = 
                          (srv.id === 'tours' && currentPage === 'tours') ||
                          (srv.id === 'rentals' && currentPage === 'rentals') ||
                          (srv.id === 'extra-services' && currentPage === 'home' && activeSection === 'extra-services');

                        return (
                          <button
                            key={srv.id}
                            onClick={srv.action}
                            className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 cursor-pointer group ${
                              isSrvActive ? 'bg-blue-50 text-[#0052D4]' : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isSrvActive ? 'bg-[#0052D4] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-[#0052D4]'
                            }`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-xs text-gray-900">{srv.label}</div>
                              <div className="text-[11px] text-gray-500">{srv.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Gallery */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`px-3.5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-lg ${
                  currentPage === 'gallery'
                    ? isTransparent ? 'text-[#FFBA00]' : 'text-[#0052D4]'
                    : isTransparent ? 'text-white hover:text-[#FFBA00]' : 'text-gray-700 hover:text-[#0052D4]'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
              </button>

              {/* Contact */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`px-3.5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-lg ${
                  currentPage === 'home' && activeSection === 'contact'
                    ? isTransparent ? 'text-[#FFBA00]' : 'text-[#0052D4]'
                    : isTransparent ? 'text-white hover:text-[#FFBA00]' : 'text-gray-700 hover:text-[#0052D4]'
                }`}
              >
                {t.nav_contact}
              </button>
            </nav>

            {/* Right side — Language Switcher + Book Now CTA */}
            <div className="flex items-center gap-3">
              {/* Language Switcher Pill */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className={`flex items-center gap-1.5 text-xs font-bold py-2 px-3.5 rounded-full border transition-all cursor-pointer ${
                    isTransparent
                      ? 'text-white border-white/40 hover:bg-white/15'
                      : 'text-gray-800 border-gray-200 hover:border-[#0052D4] hover:text-[#0052D4]'
                  }`}
                  id="language-btn"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang}</span>
                </button>
                
                <AnimatePresence>
                  {showLangDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl py-1.5 border border-gray-100 z-50"
                    >
                      <button
                        onClick={() => { setLang('EN'); setShowLangDropdown(false); }}
                        className="w-full text-left px-4 py-2.5 text-xs font-bold text-gray-800 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                      >
                        <span>English (EN)</span>
                        {lang === 'EN' && <span className="w-2 h-2 rounded-full bg-[#0052D4]"></span>}
                      </button>
                      <button
                        onClick={() => { setLang('ID'); setShowLangDropdown(false); }}
                        className="w-full text-left px-4 py-2.5 text-xs font-bold text-gray-800 hover:bg-gray-50 flex items-center justify-between cursor-pointer"
                      >
                        <span>Indonesia (ID)</span>
                        {lang === 'ID' && <span className="w-2 h-2 rounded-full bg-[#0052D4]"></span>}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Now Button — Royal Caribbean pill style */}
              <button
                onClick={onBookingClick}
                className="bg-[#0052D4] hover:bg-[#003da5] text-white font-bold text-xs py-2.5 px-5 rounded-full transition-all shadow-sm cursor-pointer shrink-0 hidden md:block"
              >
                {lang === 'EN' ? 'Book now' : 'Booking'}
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 transition-colors cursor-pointer rounded-full ${
                  isTransparent ? 'text-white hover:bg-white/15' : 'text-gray-700 hover:text-[#0052D4]'
                }`}
                id="mobile-menu-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 text-left">
              {/* Mobile Beranda */}
              <button
                onClick={() => handlePageClick('home')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-lg cursor-pointer ${
                  currentPage === 'home' && activeSection === 'home'
                    ? 'bg-blue-50 text-[#0052D4]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_home}
              </button>

              {/* Mobile About */}
              <button
                onClick={() => handlePageClick('about')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-lg cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-blue-50 text-[#0052D4]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'About Us' : 'Tentang Kami'}
              </button>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                  className={`w-full text-left px-4 py-3 text-sm font-bold rounded-lg cursor-pointer flex items-center justify-between ${
                    isLayananActive ? 'bg-blue-50 text-[#0052D4]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{lang === 'EN' ? 'Services' : 'Layanan'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLayananOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileLayananOpen && (
                  <div className="pl-4 space-y-0.5 border-l-2 border-blue-200 ml-4 py-1">
                    {servicesList.map((srv) => {
                      const IconComp = srv.icon;
                      return (
                        <button
                          key={srv.id}
                          onClick={srv.action}
                          className="w-full text-left px-3 py-2.5 text-xs font-bold text-gray-700 hover:text-[#0052D4] flex items-center gap-2.5 cursor-pointer rounded-lg hover:bg-blue-50/50"
                        >
                          <IconComp className="w-4 h-4 text-[#0052D4]" />
                          <span>{srv.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Gallery */}
              <button
                onClick={() => handlePageClick('gallery')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-lg cursor-pointer ${
                  currentPage === 'gallery' ? 'bg-blue-50 text-[#0052D4]' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang === 'EN' ? 'Gallery' : 'Galeri'}
              </button>

              {/* Mobile Contact */}
              <button
                onClick={() => handleSectionClick('contact')}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-lg cursor-pointer ${
                  currentPage === 'home' && activeSection === 'contact' ? 'bg-blue-50 text-[#0052D4]' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav_contact}
              </button>
              
              {/* Mobile Language */}
              <div className="pt-3 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-2 px-4">
                  <button
                    onClick={() => { setLang('EN'); setIsOpen(false); }}
                    className={`flex-1 py-2.5 px-3 rounded-full text-xs font-bold text-center cursor-pointer transition-all ${
                      lang === 'EN' ? 'bg-[#0052D4] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLang('ID'); setIsOpen(false); }}
                    className={`flex-1 py-2.5 px-3 rounded-full text-xs font-bold text-center cursor-pointer transition-all ${
                      lang === 'ID' ? 'bg-[#0052D4] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Indonesia
                  </button>
                </div>
              </div>

              {/* Mobile Book Button */}
              <div className="pt-3">
                <button
                  onClick={() => { onBookingClick(); setIsOpen(false); }}
                  className="w-full bg-[#0052D4] hover:bg-[#003da5] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  {lang === 'EN' ? 'Book now' : 'Booking sekarang'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
