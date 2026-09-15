import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  MapPin, 
  Sparkles, 
  X, 
  ChevronRight, 
  MessageSquare,
  Filter,
  Compass,
  UtensilsCrossed,
  ZoomIn
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface GallerySectionProps {
  lang: 'ID' | 'EN';
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  titleEn?: string;
  category: 'landmark' | 'beach' | 'culinary';
  location: string;
  tag: string;
  tagEn?: string;
  description: string;
  descriptionEn?: string;
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'landmark' | 'beach' | 'culinary'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryData: GalleryItem[] = [
    {
      id: 'galeri-1',
      image: '/barelang_bridge.jpg',
      title: 'Kemegahan Ikon Jembatan Barelang & Laut Biru',
      titleEn: 'Majestic Barelang Bridge Landmark & Ocean Vistas',
      category: 'landmark',
      location: 'Trans Barelang, Batam',
      tag: 'Landmark Ikonik',
      tagEn: 'Iconic Landmark',
      description: 'Kemegahan mahakarya Jembatan 1 Barelang yang menghubungkan pulau-pulau di Batam, menyuguhkan panorama laut biru tropis yang spektakuler.',
      descriptionEn: 'The majestic Barelang Bridge connecting Batam islands, offering breathtaking panoramic views over tropical blue waters.'
    },
    {
      id: 'galeri-2',
      image: '/kelong_seafood_batam.jpg',
      title: 'Paket Wisata Kelong Seafood Apung Barelang',
      titleEn: 'Barelang Overwater Seafood Kelong Tour',
      category: 'culinary',
      location: 'Kelong Barelang, Batam',
      tag: 'Wisata Bahari & Kelong',
      tagEn: 'Maritime & Kelong Tour',
      description: 'Sensasi bersantap kepiting saus tiram, gonggong khas Batam, dan aneka seafood segar langsung di atas restoran kelong apung dengan semilir angin laut.',
      descriptionEn: 'Authentic dining experience featuring fresh chili crab, gonggong shellfish, and grilled fish at a traditional overwater floating seafood restaurant.'
    },
    {
      id: 'galeri-3',
      image: '/ranoh_island_batam.jpg',
      title: 'Paket Wisata Pulau Ranoh & Pantai Pasir Putih',
      titleEn: 'Ranoh Island Tropical White Sand Beach Escape',
      category: 'beach',
      location: 'Kepulauan Ranoh & Abang, Batam',
      tag: 'Pulau Tropis & Pantai',
      tagEn: 'Tropical Island Beach',
      description: 'Menikmati pesona pantai pasir putih lembut, jernihnya air laut toska, deretan pohon kelapa, serta ketenangan pulau eksotis di selatan Batam.',
      descriptionEn: 'Enjoying powdery white sand beaches, crystal-clear turquoise waters, coconut palms, and tranquil tropical island vibes in southern Batam.'
    },
    {
      id: 'galeri-4',
      image: '/welcome_to_batam.jpg',
      title: 'Spot Foto Bukit Welcome to Batam & City View',
      titleEn: 'Welcome to Batam Landmark & City Panorama',
      category: 'landmark',
      location: 'Bukit Clara, Batam Centre',
      tag: 'Spot Foto Landmark',
      tagEn: 'Must-Visit Landmark',
      description: 'Landmark tulisan raksasa ikonik di lereng Bukit Clara dengan latar taman kota modern Batam Centre dan pemandangan selat maritim.',
      descriptionEn: 'Iconic giant hillside landmark letters overlooking the city plaza, lush green parks, and distant maritime straits of Batam.'
    },
    {
      id: 'galeri-5',
      image: '/nongsa_beach.jpg',
      title: 'Kawasan Wisata Pantai & Resor Mewah Nongsa',
      titleEn: 'Nongsa Beach & Luxury Coastal Resorts',
      category: 'beach',
      location: 'Pesisir Nongsa, Batam',
      tag: 'Pantai & Resor Tropis',
      tagEn: 'Resort Beach Shoreline',
      description: 'Garis pantai asri nan eksklusif dengan pasir keemasan, pohon nyiur melambai, dan resor tepi laut dengan pemandangan ke arah Selat Singapura.',
      descriptionEn: 'Exclusive tropical beach shoreline lined with coconut palms and luxury waterfront resorts facing the Singapore Straits.'
    },
    {
      id: 'galeri-6',
      image: '/marina_waterfront_batam.jpg',
      title: 'Pesona Senja Marina Waterfront & Harbour Bay',
      titleEn: 'Marina Waterfront & Harbour Bay Sunset Boardwalk',
      category: 'beach',
      location: 'Waterfront Marina & Harbour Bay, Batam',
      tag: 'Sunset & Dermaga Yacht',
      tagEn: 'Sunset & Yacht Marina',
      description: 'Suasana romantis kala matahari terbenam keemasan di dermaga kapal pesiar dan promenade tepi laut, dipadukan lampu-lampu gemerlap kafe pesisir.',
      descriptionEn: 'Romantic golden sunset atmosphere over luxury yacht docks and waterfront promenade, complemented by vibrant seaside cafes and bistros.'
    },
    {
      id: 'galeri-7',
      image: '/nagoya_batam.jpg',
      title: 'Pusat Belanja Nagoya & Sentra Kuliner Malam',
      titleEn: 'Nagoya Shopping Hub & Culinary Night Tour',
      category: 'culinary',
      location: 'Nagoya City Center, Batam',
      tag: 'City Tour & Belanja',
      tagEn: 'City & Shopping Tour',
      description: 'Keseruan berbelanja bebas bea di Nagoya Hill & Grand Batam Mall, berburu oleh-oleh, jajanan kuliner malam khas, dan relaksasi spa keluarga.',
      descriptionEn: 'Exciting duty-free shopping at Nagoya Hill & Grand Batam Mall, souvenir hunts, local night food culinary trails, and rejuvenating spas.'
    },
    {
      id: 'galeri-8',
      image: '/custom_batam_corporate.jpg',
      title: 'Paket Tour Eksekutif & Rombongan Corporate',
      titleEn: 'VIP Executive & Corporate Island Tour Package',
      category: 'landmark',
      location: 'Kawasan Wisata & Bisnis Batam',
      tag: 'Paket Wisata VIP',
      tagEn: 'VIP Tour Package',
      description: 'Layanan tour terpadu untuk rombongan wisata kantor, kunjungan kerja delegasi bisnis, hingga gathering keluarga dengan rute terbaik di Batam.',
      descriptionEn: 'Full-service bespoke island tour packages for company retreats, executive business delegations, and family gatherings across Batam.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const handleWhatsApp = (title: string) => {
    const waNumber = DEFAULT_WA_NUMBER;
    const msg = `Halo Batam Island Transport, saya tertarik dengan destinasi & paket wisata (${title}). Boleh info rute rekomendasi dan penawaran sewa mobilnya?`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
            <Camera className="w-4 h-4" />
            <span>{lang === 'EN' ? 'BATAM TOUR DESTINATIONS & SCENIC GALLERY' : 'DOKUMENTASI PAKET WISATA & PEMANDANGAN BATAM'}</span>
          </span>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'EXPLORE BATAM ISLAND DESTINATIONS' : 'PESONA WISATA & PEMANDANGAN BATAM'}
          </h1>

          <div className="w-20 h-1.5 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Discover the natural wonders, iconic landmarks, idyllic tropical islands, and authentic overwater kelong seafood tours across Batam Island with our trusted transport services.'
              : 'Jelajahi keindahan panorama alam, landmark megah, pantai eksotis, dan surga kuliner kelong di Pulau Batam bersama layanan transportasi profesional Batam Island Transport.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'all'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? `All Destinations (${galleryData.length})` : `Semua Destinasi (${galleryData.length})`}</span>
          </button>

          <button
            onClick={() => setActiveFilter('landmark')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'landmark'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Landmarks & Icons' : 'Landmark & Ikon'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('beach')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'beach'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Beaches & Islands' : 'Pantai & Pulau Tropis'}</span>
          </button>

          <button
            onClick={() => setActiveFilter('culinary')}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
              activeFilter === 'culinary'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-md scale-[1.02]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-[#d97706]'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'Kelong & Culinary' : 'Kelong & Kuliner City'}</span>
          </button>
        </div>

        {/* Gallery Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Tag Badge */}
                  <span className="absolute top-3 left-3 bg-luxury-gold text-black font-display font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {lang === 'EN' && item.tagEn ? item.tagEn : item.tag}
                  </span>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center border border-white/40 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Location Label */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-1.5 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                    <span className="truncate drop-shadow-md">{item.location}</span>
                  </div>
                </div>

                {/* Card Info Footer */}
                <div className="p-4 sm:p-5 text-left space-y-2 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-gray-900 group-hover:text-[#d97706] transition-colors leading-snug">
                      {lang === 'EN' && item.titleEn ? item.titleEn : item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {lang === 'EN' && item.descriptionEn ? item.descriptionEn : item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#d97706]">
                    <span>{lang === 'EN' ? 'View Photo & Info' : 'Lihat Foto & Detail'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner for Tour Booking */}
        <div className="mt-16 bg-luxury-black text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-luxury-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
          <div className="space-y-2 z-10">
            <span className="font-display font-bold text-xs text-luxury-gold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span>{lang === 'EN' ? 'CUSTOM BATAM TOUR PACKAGES' : 'PAKET TOUR & LIBURAN CUSTOM BATAM'}</span>
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {lang === 'EN' ? 'Want to Visit These Beautiful Places?' : 'Ingin Mengunjungi Destinasi Indah Ini?'}
            </h3>
            <p className="font-sans text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {lang === 'EN' 
                ? 'Batam Island Transport is ready to arrange custom tour itineraries, family holiday trips, Barelang seafood tours, and island hopping with comfortable private vehicles and professional drivers.' 
                : 'Batam Island Transport siap menyusun rute tour custom, liburan keluarga, keliling Jembatan Barelang, santap seafood kelong, hingga wisata belanja dengan armada prima dan driver berpengalaman.'}
            </p>
          </div>

          <button
            onClick={() => handleWhatsApp('Paket Wisata & Pemandangan Batam')}
            className="z-10 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-extrabold text-xs uppercase py-3.5 px-7 rounded-xl shadow-lg transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{lang === 'EN' ? 'CONSULT TOUR VIA WHATSAPP' : 'KONSULTASI TOUR VIA WA'}</span>
          </button>
        </div>

      </div>

      {/* INTERACTIVE LIGHTBOX MODAL FOR GALLERY IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col relative z-10 border border-gray-100"
            >
              {/* Lightbox Header */}
              <div className="bg-luxury-black text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-luxury-gold text-black font-display font-bold flex items-center justify-center shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-gold block">
                      {lang === 'EN' && selectedImage.tagEn ? selectedImage.tagEn : selectedImage.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                      {lang === 'EN' && selectedImage.titleEn ? selectedImage.titleEn : selectedImage.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-300 hover:text-white bg-white/15 hover:bg-white/25 p-2 rounded-full transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Full Photo */}
              <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              </div>

              {/* Lightbox Caption & Action Footer */}
              <div className="p-5 bg-white space-y-4 text-left border-t border-gray-100 shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#d97706]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {lang === 'EN' && selectedImage.descriptionEn ? selectedImage.descriptionEn : selectedImage.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-gray-500 font-semibold">
                    Batam Island Transport — Tour & Travel
                  </span>

                  <button
                    type="button"
                    onClick={() => handleWhatsApp(selectedImage.title)}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-2.5 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{lang === 'EN' ? 'Inquire Tour Package via WhatsApp' : 'Tanya Paket Wisata Ini via WhatsApp'}</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

