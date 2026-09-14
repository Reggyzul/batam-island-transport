import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MapPin, 
  Wifi, 
  Bed, 
  Tv, 
  CheckCircle2, 
  MessageSquare,
  Users,
  ShieldCheck,
  Building,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  Maximize2,
  Clock
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HomestaySectionProps {
  lang: 'ID' | 'EN';
}

export interface RoomType {
  id: string;
  name: string;
  badge: string;
  capacity: string;
  pricing: { pax: string; rate: string; totalNote?: string }[];
  facilities: string[];
  bedInfo: string;
  bathroom: string;
  tv: string;
  waMessage: string;
}

export default function HomestaySection({ lang }: HomestaySectionProps) {
  const t = TRANSLATIONS[lang];
  const [activeBranch, setActiveBranch] = useState<'rja1' | 'rja2'>('rja1');
  const [showCatalogModal, setShowCatalogModal] = useState<boolean>(false);
  const [expandedRoomId, setExpandedRoomId] = useState<string | null>('sweet-room');

  // Prevent background page scrolling when modal is open
  useEffect(() => {
    if (showCatalogModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCatalogModal]);

  // RJA 1 ROOM CATALOG DATA
  const rja1Rooms: RoomType[] = [
    {
      id: 'sweet-room',
      name: 'Sweet Room',
      badge: 'Favorit Hemat (Tersedia 6 Kamar)',
      capacity: 'Maksimal 2 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 117.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 58.500 / orang', totalNote: 'Total Rp 117.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam Clean & Fresh',
        'Kasur Single/Queen (Ukuran 120 x 200 cm)',
        'Wi-Fi Cepat & Gratis 24 Jam',
        'Kipas Angin & Gantungan Baju',
        'Selimut & Perlengkapan Mandi'
      ],
      bedInfo: '1 Kasur (120 x 200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Non TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Sweet Room (Maks 2 orang).'
    },
    {
      id: 'green-room',
      name: 'Green Room',
      badge: 'Family Favorite (Tersedia 3 Kamar)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 160.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 80.000 / orang', totalNote: 'Total Rp 160.000' },
        { pax: '3 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '4 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 200.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam',
        'Kasur Queen (160 x 200 cm) + Extra Bed (80x200 min 3 orang)',
        'Televisi & Hiburan',
        'Wi-Fi Cepat Gratis',
        'Kipas Angin & Selimut Nyaman'
      ],
      bedInfo: '1 Kasur Queen (160x200 cm) + Extra Bed',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Ada TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Green Room (Maks 4 orang).'
    },
    {
      id: 'cheerful-room',
      name: 'Cheerful Room',
      badge: 'Cozy & Aesthetic',
      capacity: 'Kapasitas 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 150.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 75.500 / orang', totalNote: 'Total Rp 151.000' },
        { pax: '3 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 150.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam Clean & Fresh',
        'Kasur Queen (160 x 200 cm)',
        'Televisi Layar Datar',
        'Wi-Fi Cepat & Kipas Angin',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '1 Kasur Queen (160 x 200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Ada TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Cheerful Room (Kapasitas 3 orang).'
    },
    {
      id: 'room-satu',
      name: 'Room Satu',
      badge: 'Max 5 Orang (2 Kasur Luas)',
      capacity: 'Maksimal 5 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 100.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 50.000 / orang', totalNote: 'Total Rp 100.000' },
        { pax: '3 Orang', rate: 'Rp 43.000 / orang', totalNote: 'Total Rp 129.000' },
        { pax: '4 - 5 Orang', rate: 'Rp 41.000 - Rp 43.000 / orang' }
      ],
      facilities: [
        '2 Kasur Luas (Ukuran 120x200 cm & 160x200 cm)',
        'Kamar Mandi Luar Bersih & Steril',
        'Kipas Angin & Rak Baju',
        'Wi-Fi Cepat Gratis',
        'Selimut & Perlengkapan Mandi'
      ],
      bedInfo: '2 Kasur (120x200 & 160x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Non TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Satu (Kapasitas max 5 orang).'
    },
    {
      id: 'room-dua',
      name: 'Room Dua',
      badge: 'Max 4 Orang (2 Kasur Twin)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 95.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 47.500 / orang', totalNote: 'Total Rp 95.000' },
        { pax: '3 Orang', rate: 'Rp 41.000 / orang' },
        { pax: '4 Orang', rate: 'Rp 39.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        '2 Kasur Ukuran (120 x 200 cm & 120 x 200 cm)',
        'Kipas Angin & Rak Baju',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '2 Kasur Twin (120 x 200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Non TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Dua (Maks 4 orang).'
    },
    {
      id: 'room-tiga',
      name: 'Room Tiga',
      badge: 'Rombongan AC & Smart TV (Max 8 Orang)',
      capacity: 'Maksimal 8 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 195.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 97.500 / orang', totalNote: 'Total Rp 195.000' },
        { pax: '3 - 4 Orang', rate: 'Rp 60.000 - Rp 65.000 / orang' },
        { pax: '5 - 8 Orang', rate: 'Rp 50.000 - Rp 55.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        'Kamar Luas + 2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Air Conditioner (AC) & Smart TV',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Tiga (Rombongan max 8 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-empat',
      name: 'Room Empat',
      badge: 'Smart TV (Max 3 Orang)',
      capacity: 'Maksimal 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 99.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 49.500 / orang', totalNote: 'Total Rp 99.000' },
        { pax: '3 Orang', rate: 'Rp 48.000 / orang' }
      ],
      facilities: [
        'Kamar Mandi Luar Bersih',
        'Kasur Queen (Ukuran 160 x 200 cm)',
        'Smart TV & Kipas Angin',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '1 Kasur Queen (160 x 200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Empat (Maks 3 orang + Smart TV).'
    },
    {
      id: 'room-lima',
      name: 'Room Lima',
      badge: 'Susun + AC & Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 - 2 Orang', rate: 'Rp 75.000 - Rp 150.000 / orang' },
        { pax: '3 - 4 Orang', rate: 'Rp 60.000 - Rp 65.000 / orang' },
        { pax: '5 - 6 Orang', rate: 'Rp 50.000 / orang' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Full Air Conditioner (AC) & Smart TV',
        'Kamar Mandi Luar Bersih',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Lima (Maks 6 orang dengan AC & Smart TV).'
    },
    {
      id: 'room-enam',
      name: 'Room Enam',
      badge: 'Susun + Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 117.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 58.500 / orang', totalNote: 'Total Rp 117.000' },
        { pax: '3 - 6 Orang', rate: 'Rp 50.000 / orang' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Smart TV & Kipas Angin',
        'Kamar Mandi Luar Bersih',
        'Wi-Fi Cepat Gratis',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Luar',
      tv: 'Smart TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Room Enam (Maks 6 orang + Smart TV).'
    },
    {
      id: 'family-room',
      name: 'Family Room',
      badge: 'Kamar Mandi Dalam + AC & Smart TV (Max 6 Orang)',
      capacity: 'Maksimal 6 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 225.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 112.500 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '3 Orang', rate: 'Rp 75.000 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '4 Orang', rate: 'Rp 65.000 / orang', totalNote: 'Total Rp 260.000' },
        { pax: '5 - 6 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 300.000 - Rp 360.000' }
      ],
      facilities: [
        '2 SET Tempat Tidur Susun (Ukuran 120 x 200 cm)',
        'Kamar Mandi Dalam Clean & Fresh',
        'SMART TV & Full AC',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju, Rak, & Selimut'
      ],
      bedInfo: '2 SET Tidur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - Family Room (Maks 6 orang + Kamar Mandi Dalam, AC, Smart TV).'
    },
    {
      id: 'l-room',
      name: 'L - Room',
      badge: 'Kamar Mandi Dalam + AC & Smart TV (Max 4 Orang)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 180.000 / orang' },
        { pax: '2 Orang', rate: 'Rp 90.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '3 Orang', rate: 'Rp 70.000 / orang', totalNote: 'Total Rp 210.000' },
        { pax: '4 Orang', rate: 'Rp 60.000 / orang', totalNote: 'Total Rp 240.000' }
      ],
      facilities: [
        '2 Set Tempat Tidur (Jumlah kasur 2: 120x200 & 120x200 cm)',
        'Kamar Mandi Dalam Clean & Fresh',
        'SMART TV & Full AC',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: '2 Kasur Twin (120x200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 1 - L-Room (Maks 4 orang + Kamar Mandi Dalam, AC, Smart TV).'
    }
  ];

  // RJA 2 ROOM CATALOG DATA
  const rja2Rooms: RoomType[] = [
    {
      id: 'standar-room-rja2',
      name: 'Standar Room (RJA 2)',
      badge: 'Water Heater + Smart TV (Max 5 Orang)',
      capacity: 'Maksimal 5 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 225.000 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '2 Orang', rate: 'Rp 115.000 / orang', totalNote: 'Total Rp 230.000' },
        { pax: '3 Orang', rate: 'Rp 86.600 / orang', totalNote: 'Total Rp 260.000' },
        { pax: '4 Orang', rate: 'Rp 77.500 / orang', totalNote: 'Total Rp 310.000' },
        { pax: '5 Orang', rate: 'Rp 70.000 / orang', totalNote: 'Total Rp 350.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam dengan Water Heater (Air Panas)',
        'Bed Atas (160 x 200 cm) + Bed Bawah (120 x 200 cm)',
        'Smart TV & Wi-Fi Cepat Gratis',
        'Kipas Angin & Jendela Besar (Sirkulasi Udara Bagus)',
        'Ukuran Kamar Luas (3.7m x 3.6m) & Closet Jongkok'
      ],
      bedInfo: 'Bed Atas (160x200) + Bed Bawah (120x200)',
      bathroom: 'Kamar Mandi Dalam + Water Heater',
      tv: 'Smart TV',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Standar Room (Water heater, Smart TV, max 5 orang).'
    },
    {
      id: 'big-premium-rja2',
      name: 'Big Premium (RJA 2)',
      badge: 'Full AC + Water Heater & Smart TV (Max 5 Orang)',
      capacity: 'Maksimal 5 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 275.000 / orang', totalNote: 'Total Rp 275.000' },
        { pax: '2 Orang', rate: 'Rp 137.500 / orang', totalNote: 'Total Rp 275.000' },
        { pax: '3 Orang', rate: 'Rp 100.000 / orang', totalNote: 'Total Rp 300.000' },
        { pax: '4 Orang', rate: 'Rp 92.500 / orang', totalNote: 'Total Rp 370.000' },
        { pax: '5 Orang', rate: 'Rp 84.500 / orang', totalNote: 'Total Rp 422.500' }
      ],
      facilities: [
        'Full Air Conditioner (AC) & Smart TV',
        'Kamar Mandi Dalam + Water Heater (Air Panas)',
        'Bed Atas (160 x 200 cm) + Extra Bed Bawah (120 x 200 cm)',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Ukuran Kamar Luas (3.7m x 3.5m) & Closet Jongkok'
      ],
      bedInfo: 'Bed Atas (160x200) + Bed Bawah (120x200)',
      bathroom: 'Kamar Mandi Dalam + Water Heater',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Big Premium (Full AC, Water Heater, Smart TV, max 5 orang).'
    },
    {
      id: 'small-premium-rja2',
      name: 'Small Premium (RJA 2)',
      badge: 'Full AC + Water Heater & Smart TV (Max 3 Orang)',
      capacity: 'Maksimal 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 250.000 / orang', totalNote: 'Total Rp 250.000' },
        { pax: '2 Orang', rate: 'Rp 125.000 / orang', totalNote: 'Total Rp 250.000' },
        { pax: '3 Orang', rate: 'Rp 100.000 / orang', totalNote: 'Total Rp 300.000' }
      ],
      facilities: [
        'Full Air Conditioner (AC) & Smart TV',
        'Kamar Mandi Dalam + Water Heater (Air Panas)',
        'Bed Atas (120 x 200 cm) + Extra Bed Bawah (100 x 200 cm)',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Ukuran Kamar Nyaman & Closet Jongkok'
      ],
      bedInfo: 'Bed Atas (120x200) + Extra Bed (100x200)',
      bathroom: 'Kamar Mandi Dalam + Water Heater',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Small Premium (Full AC, Water Heater, Smart TV, max 3 orang).'
    },
    {
      id: 'room-tujuh-rja2',
      name: 'Room Tujuh (RJA 2)',
      badge: 'Full AC + Wi-Fi (Max 5 Orang)',
      capacity: 'Maksimal 5 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 225.000 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '2 Orang', rate: 'Rp 112.500 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '3 Orang', rate: 'Rp 85.000 / orang', totalNote: 'Total Rp 255.000' },
        { pax: '4 Orang', rate: 'Rp 75.000 / orang', totalNote: 'Total Rp 300.000' },
        { pax: '5 Orang', rate: 'Rp 68.000 / orang', totalNote: 'Total Rp 340.000' }
      ],
      facilities: [
        'Full Air Conditioner (AC) & Wi-Fi Cepat Gratis',
        'Bed Atas (160 x 200 cm) + Extra Bed Bawah (120 x 200 cm)',
        'Kamar Mandi Dalam',
        'Non Water Heater & Closet Jongkok',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: 'Bed Atas (160x200) + Bed Bawah (120x200)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'AC Available',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Room Tujuh (Full AC, max 5 orang).'
    },
    {
      id: 'room-delapan-rja2',
      name: 'Room Delapan (RJA 2)',
      badge: 'Hemat & Nyaman (Max 3 Orang)',
      capacity: 'Maksimal 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 200.000 / orang', totalNote: 'Total Rp 200.000' },
        { pax: '2 Orang', rate: 'Rp 100.000 / orang', totalNote: 'Total Rp 200.000' },
        { pax: '3 Orang', rate: 'Rp 80.000 / orang', totalNote: 'Total Rp 240.000' }
      ],
      facilities: [
        'Kamar Mandi Dalam Clean & Fresh',
        'Kipas Angin & Sirkulasi Udara Bagus',
        'Closet Jongkok & Perlengkapan Mandi',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Selimut & Gantungan Baju'
      ],
      bedInfo: 'Kasur Queen / Twin Bed',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Non TV (Kipas Angin)',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Room Delapan (Maks 3 orang).'
    },
    {
      id: 'kiara-room-rja2',
      name: 'Kiara Room (RJA 2)',
      badge: 'Cozy Family Room (Max 4 Orang)',
      capacity: 'Maksimal 4 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 170.000 / orang', totalNote: 'Total Rp 170.000' },
        { pax: '2 Orang', rate: 'Rp 85.000 / orang', totalNote: 'Total Rp 170.000' },
        { pax: '3 Orang', rate: 'Rp 75.000 / orang', totalNote: 'Total Rp 225.000' },
        { pax: '4 Orang', rate: 'Rp 62.500 / orang', totalNote: 'Total Rp 250.000' }
      ],
      facilities: [
        'Bed Atas (120 x 200 cm) + Extra Bed Bawah (120 x 200 cm)',
        'Kamar Mandi Dalam (Non Water Heater)',
        'Kipas Angin & Closet Jongkok',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: 'Bed Atas (120x200) + Extra Bed (120x200)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Kipas Angin',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Kiara Room (Maks 4 orang).'
    },
    {
      id: 'eliza-room-rja2',
      name: 'Eliza Room (RJA 2)',
      badge: 'Pastel Aesthetic (Max 3 Orang)',
      capacity: 'Maksimal 3 Orang',
      pricing: [
        { pax: '1 Orang', rate: 'Rp 180.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '2 Orang', rate: 'Rp 90.000 / orang', totalNote: 'Total Rp 180.000' },
        { pax: '3 Orang', rate: 'Rp 80.000 / orang', totalNote: 'Total Rp 240.000' }
      ],
      facilities: [
        'Bed Atas (120 x 200 cm) + Bed Bawah (100 x 200 cm)',
        'Kamar Mandi Dalam (Non Water Heater)',
        'Kipas Angin & Closet Jongkok',
        'Wi-Fi Cepat Gratis 24 Jam',
        'Gantungan Baju & Selimut'
      ],
      bedInfo: 'Bed Atas (120x200) + Bed Bawah (100x200)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Kipas Angin',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Eliza Room (Maks 3 orang).'
    },
    {
      id: 'jumbo-room-rja2',
      name: 'Jumbo Room (RJA 2)',
      badge: 'Full AC & Smart TV Rombongan (Max 8 Orang)',
      capacity: 'Maksimal 8 Orang',
      pricing: [
        { pax: '1 - 4 Orang', rate: 'Rp 92.500 / orang', totalNote: 'Total Rp 370.000' },
        { pax: '5 Orang', rate: 'Rp 85.000 / orang', totalNote: 'Total Rp 425.000' },
        { pax: '6 Orang', rate: 'Rp 80.000 / orang', totalNote: 'Total Rp 480.000' },
        { pax: '7 Orang', rate: 'Rp 75.000 / orang', totalNote: 'Total Rp 525.000' },
        { pax: '8 Orang', rate: 'Rp 67.500 / orang', totalNote: 'Total Rp 540.000' }
      ],
      facilities: [
        'Model Bed Susun (Total 4 Kasur Ukuran 120 x 200 cm)',
        'Full Air Conditioner (AC) & Smart TV',
        'Kamar Mandi Dalam (Non Water Heater)',
        'Closet Jongkok & Wi-Fi Cepat 24 Jam',
        'Selimut & Perlengkapan Mandi Lengkap'
      ],
      bedInfo: '4 Kasur Susun (120x200 cm)',
      bathroom: 'Kamar Mandi Dalam',
      tv: 'Smart TV + AC',
      waMessage: 'Halo Yoga Transport, saya ingin booking RJA 2 - Jumbo Room (Full AC & Smart TV max 8 orang).'
    }
  ];

  const currentRooms = activeBranch === 'rja1' ? rja1Rooms : rja2Rooms;

  const handleWhatsApp = (msg: string) => {
    const waNumber = '628813305066';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer');
  };

  const toggleRoomExpand = (roomId: string) => {
    if (expandedRoomId === roomId) {
      setExpandedRoomId(null);
    } else {
      setExpandedRoomId(roomId);
    }
  };

  const handleSelectBranch = (branch: 'rja1' | 'rja2') => {
    setActiveBranch(branch);
    if (branch === 'rja1') {
      setExpandedRoomId('sweet-room');
    } else {
      setExpandedRoomId('standar-room-rja2');
    }
  };

  return (
    <section id="penginapan" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-[#d97706] tracking-widest uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'OFFICIAL HOMESTAY PARTNER' : 'KATALOG PENGINAPAN HOMESTAY RJA'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'MALANG HOMESTAY ACCOMMODATION' : 'PENGINAPAN HOMESTAY MALANG'}
          </h2>

          <div className="w-16 h-1 bg-[#f59e0b] rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Enjoy comfortable private lodging options in Malang city center for your holiday & tour group accommodation.'
              : 'Pilihan penginapan homestay bersih, nyaman, estetik, dan strategis di Kota Malang untuk melengkapi liburan Anda.'}
          </p>
        </div>

        {/* BRANCH SELECTOR BUTTONS AT TOP (RJA 1 vs RJA 2) */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={() => handleSelectBranch('rja1')}
            className={`px-8 sm:px-10 py-3.5 rounded-2xl font-display font-extrabold text-sm sm:text-base transition-all cursor-pointer shadow-sm flex items-center gap-2.5 border ${
              activeBranch === 'rja1'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-lg scale-[1.03] ring-2 ring-amber-400/20'
                : 'bg-white text-gray-700 border-gray-200 hover:border-luxury-gold hover:text-luxury-gold'
            }`}
          >
            <Building className="w-4.5 h-4.5" />
            <span>RJA 1</span>
          </button>

          <button
            onClick={() => handleSelectBranch('rja2')}
            className={`px-8 sm:px-10 py-3.5 rounded-2xl font-display font-extrabold text-sm sm:text-base transition-all cursor-pointer shadow-sm flex items-center gap-2.5 border ${
              activeBranch === 'rja2'
                ? 'bg-luxury-black text-luxury-gold border-luxury-gold shadow-lg scale-[1.03] ring-2 ring-amber-400/20'
                : 'bg-white text-gray-700 border-gray-200 hover:border-luxury-gold hover:text-luxury-gold'
            }`}
          >
            <Home className="w-4.5 h-4.5" />
            <span>RJA 2</span>
          </button>
        </div>

        {/* MAIN SHOWCASE CARD DEPENDING ON ACTIVE BRANCH */}
        <AnimatePresence mode="wait">
          {activeBranch === 'rja1' ? (
            <motion.div
              key="rja1-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Left: Main Pink House Building Photo */}
              <div 
                onClick={() => setShowCatalogModal(true)}
                className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] bg-gray-900 overflow-hidden cursor-pointer"
              >
                <img
                  src="/rja1.avif"
                  alt="Homestay RJA 1 Malang Pink House"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-luxury-gold text-black font-display font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Klik Untuk Lihat Katalog RJA 1</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 text-left">
                  <span className="bg-[#f59e0b] text-gray-950 font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider shadow-md">
                    Gedung Utama RJA 1
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl drop-shadow-md">
                    RJA 1 Homestay Malang
                  </h3>
                  <p className="font-sans text-xs text-gray-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span>Jl. Jaksa Agung Suprapto, Klojen, Kota Malang (Pusat Kota)</span>
                  </p>
                </div>
              </div>

              {/* Right: Info & Pop-Up Trigger CTA Button */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                        LOKASI PUSAT KOTA MALANG
                      </span>
                      <h4 className="font-display font-extrabold text-xl text-gray-900">
                        Penginapan RJA 1 - Jaksa Agung Suprapto
                      </h4>
                    </div>
                  </div>

                  <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Gedung homestay 2 lantai berwarna khas pink yang bersih, aman, dan berlokasi sangat strategis di pusat Kota Malang. Tersedia 11 pilihan tipe kamar lengkap (Sweet Room, Green Room, Room Tiga, Family Room, dll).
                  </p>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Wi-Fi Cepat Gratis 24 Jam</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Area Parkir Luas & Aman</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Full AC / Kipas & Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Kamar Mandi Dalam / Luar</span>
                    </div>
                  </div>
                </div>

                {/* MAIN CTA BUTTON: TRIGGER POP-UP MODAL RJA 1 */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                      PILIHAN KAMAR LENGKAP
                    </span>
                    <span className="font-display font-bold text-xs text-[#d97706]">
                      11 Tipe Kamar RJA 1
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCatalogModal(true)}
                    className="bg-[#d97706] hover:bg-[#b45309] text-white font-display font-extrabold text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Lihat Katalog Kamar & Harga RJA 1</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="rja2-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Left: RJA 2 Tawangmangu Building Image */}
              <div 
                onClick={() => setShowCatalogModal(true)}
                className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-gray-900 overflow-hidden cursor-pointer"
              >
                <img
                  src="/rja2.avif"
                  alt="Homestay RJA 2 Tawangmangu Malang"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-luxury-gold text-black font-display font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Klik Untuk Lihat Katalog RJA 2</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 text-left">
                  <span className="bg-[#f59e0b] text-gray-950 font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-md tracking-wider shadow-md">
                    Gedung Utama RJA 2
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl drop-shadow-md">
                    RJA 2 Tawangmangu Malang
                  </h3>
                  <p className="font-sans text-xs text-gray-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span>Jl. Tawangmangu, Lowokwaru, Kota Malang</span>
                  </p>
                </div>
              </div>

              {/* Right: Info RJA 2 & Pop-Up Trigger CTA Button */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                        HOMESTAY PASTEL & COZY
                      </span>
                      <h4 className="font-display font-extrabold text-xl text-gray-900">
                        Penginapan RJA 2 - Tawangmangu Malang
                      </h4>
                    </div>
                  </div>

                  <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Penginapan homestay bernuansa pastel modern yang estetik di kawasan Tawangmangu Malang. Lingkungan tenang, bersih, dilengkapi fasilitas Water Heater, Full AC, dan Smart TV.
                  </p>

                  {/* Check-in / Check-out badges */}
                  <div className="bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60 flex items-center justify-around text-xs font-semibold text-gray-800">
                    <div className="flex items-center gap-1.5 text-[#d97706]">
                      <Clock className="w-4 h-4" />
                      <span>Check-in: <b>Mulai 13.00 WIB</b></span>
                    </div>
                    <div className="h-4 w-px bg-amber-200" />
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <Clock className="w-4 h-4" />
                      <span>Check-out: <b>Maks 11.00 WIB</b></span>
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Water Heater (Air Panas)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Full AC & Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Wi-Fi Cepat 24 Jam</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>Parkir Mobil & Motor</span>
                    </div>
                  </div>
                </div>

                {/* MAIN CTA BUTTON: TRIGGER POP-UP MODAL RJA 2 */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                      PILIHAN KAMAR LENGKAP
                    </span>
                    <span className="font-display font-bold text-xs text-[#d97706]">
                      8 Tipe Kamar RJA 2
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCatalogModal(true)}
                    className="bg-[#d97706] hover:bg-[#b45309] text-white font-display font-extrabold text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Lihat Katalog Kamar & Harga RJA 2</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* DYNAMIC POP-UP MODAL CATALOG FOR ACTIVE BRANCH (RJA 1 OR RJA 2) */}
      <AnimatePresence>
        {showCatalogModal && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md"
            onClick={() => setShowCatalogModal(false)}
          >
            
            {/* Modal Box Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden relative z-10"
            >
              
              {/* Modal Header */}
              <div className="bg-luxury-black text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold text-black font-display font-bold flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-gold block">
                      KATALOG HOMESTAY {activeBranch === 'rja1' ? 'RJA 1 MALANG' : 'RJA 2 TAWANGMANGU'}
                    </span>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                      Daftar Tipe Kamar & Rincian Harga
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCatalogModal(false);
                  }}
                  className="text-gray-300 hover:text-white bg-white/15 hover:bg-white/25 p-2.5 rounded-full transition-all cursor-pointer shrink-0 z-20"
                  aria-label="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Scrollable List of Room Types */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gray-50/50 flex-grow text-left">
                
                <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/60 text-center space-y-1 mb-2">
                  <p className="font-display font-bold text-xs text-gray-900 uppercase">
                    Klik Tipe Kamar Di Bawah Untuk Melihat Rincian Harga per Pax & Fasilitas
                  </p>
                  <p className="text-[11px] text-gray-600 font-sans">
                    {activeBranch === 'rja1' 
                      ? 'Jl. Jaksa Agung Suprapto, Klojen, Kota Malang (Pusat Kota)'
                      : 'Jl. Tawangmangu, Lowokwaru, Kota Malang (Check-in 13.00 WIB | Check-out 11.00 WIB)'}
                  </p>
                </div>

                {/* ACCORDION ROOM LIST INSIDE POP-UP MODAL */}
                <div className="space-y-3">
                  {currentRooms.map((room) => {
                    const isExpanded = expandedRoomId === room.id;

                    return (
                      <div
                        key={room.id}
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                          isExpanded
                            ? 'border-[#d97706] ring-2 ring-amber-400/30 shadow-sm'
                            : 'border-gray-200/80 hover:border-amber-300'
                        }`}
                      >
                        
                        {/* Room Accordion Header */}
                        <div
                          onClick={() => toggleRoomExpand(room.id)}
                          className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-amber-50/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-xs shrink-0 transition-colors ${
                              isExpanded ? 'bg-[#d97706] text-white' : 'bg-amber-100 text-[#d97706]'
                            }`}>
                              <Bed className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-display font-extrabold text-base text-gray-900">
                                  {room.name}
                                </h4>
                                <span className="text-[10px] bg-amber-100/80 text-[#d97706] px-2.5 py-0.5 rounded-full font-bold uppercase">
                                  {room.badge}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 font-sans mt-0.5">
                                {room.capacity} • {room.bathroom} • {room.tv}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100">
                            <span className="font-display font-bold text-xs text-[#d97706]">
                              Rincian Harga & Pax
                            </span>
                            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        </div>

                        {/* Room Accordion Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="border-t border-gray-100 bg-amber-50/20 p-4 sm:p-5"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                                
                                {/* Pricing Table */}
                                <div className="md:col-span-7 space-y-2">
                                  <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                                    Rincian Harga per Jumlah Orang (Pax):
                                  </span>
                                  <div className="bg-white rounded-xl p-3 border border-amber-200/60 shadow-xs space-y-1.5">
                                    {room.pricing.map((pItem, idx) => (
                                      <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-gray-100 last:border-0">
                                        <span className="font-bold text-gray-700 flex items-center gap-1.5">
                                          <Users className="w-3.5 h-3.5 text-[#d97706]" />
                                          {pItem.pax}
                                        </span>
                                        <div className="text-right">
                                          <span className="font-display font-bold text-[#d97706] text-sm">
                                            {pItem.rate}
                                          </span>
                                          {pItem.totalNote && (
                                            <span className="block text-[9px] text-gray-500 font-normal">
                                              ({pItem.totalNote})
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Room Facilities & WhatsApp Booking */}
                                <div className="md:col-span-5 flex flex-col justify-between space-y-3">
                                  <div className="space-y-1.5">
                                    <span className="font-display font-bold text-xs text-gray-900 uppercase tracking-wider block">
                                      Fasilitas Kamar Included:
                                    </span>
                                    <div className="space-y-1">
                                      {room.facilities.map((fac, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-700">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                          <span>{fac}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleWhatsApp(room.waMessage)}
                                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-display font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                  >
                                    <MessageSquare className="w-4 h-4 fill-current" />
                                    <span>Booking {room.name} via WA</span>
                                  </button>
                                </div>

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-white p-4 border-t border-gray-100 flex items-center justify-between gap-4 shrink-0">
                <span className="text-xs font-semibold text-gray-500">
                  ©2026 Yoga Transport Malang - Official RJA Catalog
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCatalogModal(false);
                  }}
                  className="bg-gray-900 hover:bg-black text-white font-display font-bold text-xs py-2.5 px-6 rounded-xl transition-all cursor-pointer shadow-sm shrink-0"
                >
                  Tutup Katalog
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
