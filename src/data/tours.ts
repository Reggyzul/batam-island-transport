export interface PackageTier {
  id: 'standard' | 'premium' | 'platinum';
  name: string;
  badge?: string;
  inclusions: string[];
  inclusionsEn: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  titleEn?: string;
  category?: 'flagship' | 'trekking' | 'nature';
  priceText: string;
  priceTextEn?: string;
  numericPrice: number;
  duration: string;
  durationEn?: string;
  badge?: string | null;
  image: string;
  description: string;
  descriptionEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  included: string[];
  includedEn?: string[];
  excluded: string[];
  excludedEn?: string[];
  packageTiers: PackageTier[];
  itinerary: { title: string; desc: string }[];
  waMessage: string;
}

export const COMMON_PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'standard',
    name: 'Standard Transport',
    badge: 'Hemat & Praktis',
    inclusions: [
      'Mobil Privat AC Sesuai Pilihan (Pajero / HiAce / Zenix / Reborn)',
      'Driver Berpengalaman & BBM',
      'Air Mineral Selama Perjalanan',
      'Antar-Jemput Hotel / Pelabuhan / Bandara'
    ],
    inclusionsEn: [
      'Private AC Car (Pajero Sport / HiAce / Innova Zenix / Reborn)',
      'Experienced Driver and Fuel',
      'Mineral Water during the trip',
      'Hotel / Ferry Port / Airport Pickup'
    ]
  },
  {
    id: 'premium',
    name: 'All-In Full Service',
    badge: 'Paling Populer',
    inclusions: [
      'Mobil Privat AC Nyaman & Terawat',
      'Driver Profesional, BBM, & Biaya Parkir',
      'Air Mineral & Waktu Perjalanan Fleksibel',
      'Rekomendasi Kuliner Khas & Spot Foto Terbaik',
      'Bebas Konsultasi Rute Seharian Penuh'
    ],
    inclusionsEn: [
      'Comfortable Chilled AC Private Vehicle',
      'Professional Driver, Fuel & All Parking Fees',
      'Mineral Water & Flexible Schedule',
      'Local Dining & Photography Spot Recommendations',
      'Full Day Custom Route Consultation'
    ]
  },
  {
    id: 'platinum',
    name: 'Executive & Corporate VIP',
    badge: 'Layanan VIP Eksklusif',
    inclusions: [
      'Armada VIP Eksekutif (Toyota Innova Zenix / Pajero Sport)',
      'Driver Berpakaian Rapi & Profesional',
      'Layanan Penjemputan VIP Gate Bandara / Terminal Ferry',
      'Jadwal Fleksibel untuk Agenda Meeting & Wisata',
      'Fasilitas Eksekutif & Dukungan 24 Jam'
    ],
    inclusionsEn: [
      'Executive VIP Vehicle (Toyota Innova Zenix / Pajero Sport)',
      'Suit/Formal Attire Professional Driver',
      'VIP Terminal Ferry / Airport Arrival Greeting',
      'Flexible Itinerary for Business Meetings & Sightseeing',
      'Executive Amenities & 24/7 Priority Support'
    ]
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. BARELANG
  {
    id: 'barelang-tour',
    title: 'Pesona Jembatan Barelang & Wisata Bahari',
    titleEn: 'Barelang Iconic Bridge & Marine Coastal Tour',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: 'Full Day (8 - 10 Jam)',
    durationEn: 'Full Day (8 - 10 Hours)',
    badge: 'DESTINASI IKONIK BATAM',
    image: '/barelang_bridge.jpg',
    description: 'Eksplorasi mahakarya ikonik Kota Batam, rangkaian 6 jembatan megah yang menghubungkan Pulau Batam, Rempang, dan Galang dengan pemandangan laut lepas, restoran seafood kelong tepi laut, dan wisata sejarah.',
    descriptionEn: 'Explore the architectural masterpiece and primary icon of Batam—a chain of 6 magnificent cable-stayed bridges connecting Batam, Rempang, and Galang islands, paired with fresh seafood kelong dining and coastal scenery.',
    highlights: [
      'Foto megah di Jembatan 1 Tengku Fisabilillah Barelang',
      'Menikmati kuliner seafood segar di restoran kelong tepi laut Barelang',
      'Menyusuri jembatan penghubung rangkaian Pulau Rempang & Galang',
      'Kunjungan situs sejarah kemanusiaan Kampung Vietnam (Opsional)',
      'Transportasi privat ber-AC dengan driver lokal ramah dan berpengalaman'
    ],
    highlightsEn: [
      'Iconic photos at Barelang Bridge 1 (Tengku Fisabilillah)',
      'Indulge in fresh live seafood dining at seaside kelong restaurants',
      'Scenic island hopping drive across Rempang and Galang islands',
      'Optional visit to historical Galang Refugee Heritage Park',
      'Private air-conditioned car with courteous licensed driver'
    ],
    included: [
      'Mobil privat AC (Pajero Sport / HiAce / Innova Zenix / Reborn)',
      'Driver profesional & BBM',
      'Antar-jemput dari hotel, pelabuhan ferry, atau bandara',
      'Biaya parkir di lokasi wisata',
      'Air mineral dingin'
    ],
    includedEn: [
      'Private AC car (Pajero Sport / HiAce / Innova Zenix / Reborn)',
      'Professional driver & fuel',
      'Door-to-door hotel, ferry port, or airport pickup',
      'Attraction parking fees',
      'Chilled mineral water'
    ],
    excluded: [
      'Pengeluaran pribadi & makan siang seafood',
      'Tiket masuk wahana opsional'
    ],
    excludedEn: [
      'Personal expenses & seafood lunch',
      'Optional attraction tickets'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '09:00 - Penjemputan', desc: 'Driver kami menjemput Anda di hotel, pelabuhan ferry (Batam Centre / Harbour Bay), atau Bandara Hang Nadim.' },
      { title: '10:00 - Jembatan 1 Barelang', desc: 'Sesi foto di landmark termegah Batam dengan latar belakang laut biru dan pulau-pulau tropis.' },
      { title: '12:30 - Makan Siang Seafood Kelong', desc: 'Menikmati hidangan seafood segar khas Batam langsung di atas restoran terapung tepi laut.' },
      { title: '14:30 - Jelajah Pulau Rempang & Galang', desc: 'Melanjutkan perjalanan melintasi jembatan berikutnya menikmati angin laut dan pemandangan pulau.' },
      { title: '17:00 - Kembali ke Hotel / Pelabuhan', desc: 'Perjalanan kembali dengan aman dan nyaman sesuai jadwal kepulangan Anda.' }
    ],
    waMessage: 'Halo Batam Island Transport, saya tertarik dengan paket wisata Jembatan Barelang. Mohon info ketersediaan armada dan penawaran harganya.'
  },

  // 2. NAGOYA
  {
    id: 'nagoya-city-tour',
    title: 'Nagoya City, Shopping & Culinary Tour',
    titleEn: 'Nagoya City Center, Shopping & Culinary Excursion',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: 'Fleksibel (Setengah Hari / Seharian)',
    durationEn: 'Flexible (Half Day / Full Day)',
    badge: 'PUSAT BISNIS & BELANJA',
    image: '/nagoya_batam.jpg',
    description: 'Jelajahi jantung komersial dan gaya hidup Kota Batam di Nagoya. Pusat perbelanjaan ternama (Nagoya Hill, Grand Batam Mall), kuliner lezat, pusat pijat & spa relaksasi, serta aneka toko oleh-oleh khas.',
    descriptionEn: 'Experience the bustling commercial, dining, and shopping hub of Batam in Nagoya. Enjoy premier retail destinations (Nagoya Hill, Grand Batam Mall), local delicacies, relaxing spas, and souvenir shops.',
    highlights: [
      'Belanja puas di Nagoya Hill Shopping Mall & Grand Batam Mall',
      'Wisata kuliner: Mie Lendir, Seafood, Kue Lapis Batam, dan aneka jajanan',
      'Kunjungan Vihara Maitreya (Maha Vihara Duta Maitreya) yang megah',
      'Pusat relaksasi pijat & spa keluarga terkemuka di Nagoya',
      'Kemudahan membawa seluruh barang belanjaan di bagasi mobil yang luas'
    ],
    highlightsEn: [
      'Shopping at Nagoya Hill Mall & Grand Batam Mall',
      'Local culinary tasting: Mie Lendir, fresh seafood, Batam Layer Cake',
      'Visit the grand Maha Vihara Duta Maitreya Temple',
      'Relaxation at top-rated family spas and wellness centers',
      'Generous car trunk space for all your shopping hauls'
    ],
    included: [
      'Mobil privat AC nyaman & driver berpengalaman',
      'Bahan bakar (BBM) selama durasi tour',
      'Antar-jemput dari pelabuhan ferry (Harbour Bay/Batam Centre) atau hotel',
      'Biaya parkir mall & area perbelanjaan',
      'Air mineral untuk seluruh penumpang'
    ],
    includedEn: [
      'Comfortable AC private car & dedicated driver',
      'Fuel throughout the duration',
      'Ferry terminal (Harbour Bay/Batam Centre) or hotel door-to-door transfer',
      'Mall and shopping district parking fees',
      'Chilled mineral water'
    ],
    excluded: [
      'Pengeluaran belanja pribadi',
      'Makanan dan minuman'
    ],
    excludedEn: [
      'Personal shopping purchases',
      'Food and beverages'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '10:00 - Penjemputan Nyaman', desc: 'Jemput di Harbour Bay Ferry Terminal atau hotel Anda dengan mobil bersih dan AC dingin.' },
      { title: '10:30 - Vihara Maitreya & Wisata Budaya', desc: 'Mengunjungi salah satu vihara terbesar di Asia Tenggara yang tenang dan asri.' },
      { title: '12:00 - Makan Siang & Wisata Kuliner', desc: 'Menikmati kuliner khas Batam pilihan yang lezat dan otentik.' },
      { title: '13:30 - Belanja di Nagoya Hill & Grand Batam', desc: 'Waktu berbelanja bebas pakaian, parfum, gadget, dan aneka snack oleh-oleh.' },
      { title: '17:00 - Spa Relaksasi & Pengantaran Kembali', desc: 'Relaksasi tubuh sebelum diantar kembali ke hotel atau pelabuhan ferry ke Singapura/Malaysia.' }
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin reservasi city tour dan belanja ke Nagoya Batam. Mohon informasi armadanya.'
  },

  // 3. NONGSA
  {
    id: 'nongsa-resort-tour',
    title: 'Nongsa Coastal Resorts, Marina & Nature Escape',
    titleEn: 'Nongsa Coastal Resorts, Marina & Beach Relaxation',
    category: 'nature',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: 'Full Day (Fleksibel)',
    durationEn: 'Full Day (Flexible)',
    badge: 'KAWASAN RESOR PANTAI',
    image: '/nongsa_beach.jpg',
    description: 'Rasakan ketenangan pesisir timur laut Batam di kawasan eksklusif Nongsa. Terkenal dengan resor pantai bintang lima, Nongsa Point Marina dengan kapal-kapal yacht, lapangan golf internasional, dan pantai berpasir putih.',
    descriptionEn: 'Immerse in the tranquil coastal ambiance of Nongsa, Batam’s exclusive leisure enclave featuring luxury 5-star beachfront resorts, Nongsa Point Marina yachts, world-class golf courses, and white sand beaches.',
    highlights: [
      'Pemandangan marina kapal pesiar di Nongsa Point Marina',
      'Santai di pantai berpasir putih menghadap perairan Selat Singapura',
      'Akses mudah ke resor-resor mewah (Montigo Resorts, Batam View, Turi Beach)',
      'Transportasi nyaman menuju lapangan golf Palm Springs / Tering Bay',
      'Suasana tropis yang tenang, jauh dari hiruk-pikuk pusat kota'
    ],
    highlightsEn: [
      'Scenic yacht dock views at Nongsa Point Marina',
      'Relaxation on tranquil white sand beaches facing the Singapore Strait',
      'Seamless transfers to top resorts (Montigo, Batam View, Turi Beach)',
      'Convenient transport to Palm Springs & Tering Bay golf clubs',
      'Peaceful tropical retreat away from city hustle'
    ],
    included: [
      'Mobil privat AC pilihan (Pajero Sport / HiAce / Innova Zenix / Reborn)',
      'Driver ramah & bahan bakar (BBM)',
      'Antar-jemput dari Nongsa Pura Ferry Terminal, Bandara Hang Nadim, atau hotel',
      'Biaya parkir kawasan resor & marina',
      'Air mineral dingin'
    ],
    includedEn: [
      'Private AC car (Pajero Sport / HiAce / Innova Zenix / Reborn)',
      'Courteous driver & fuel',
      'Pickup from Nongsa Pura Ferry, Hang Nadim Airport, or hotel',
      'Resort & marina parking fees',
      'Chilled mineral water'
    ],
    excluded: [
      'Aktivitas watersport berbayar',
      'Makanan dan minuman di restoran resor'
    ],
    excludedEn: [
      'Paid watersport activities',
      'Food and drinks at resort cafes'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: '09:30 - Penjemputan di Titik Temu', desc: 'Driver kami siap di lobi hotel, Bandara Hang Nadim, atau terminal ferry dengan kendaraan bersih.' },
      { title: '10:30 - Menuju Kawasan Pesisir Nongsa', desc: 'Perjalanan santai melintasi panorama asri pesisir timur Batam.' },
      { title: '11:30 - Nongsa Point Marina & Pantai', desc: 'Menikmati angin laut, foto di dermaga marina yacht, dan bersantai di kafe tepi pantai.' },
      { title: '14:30 - Kunjungan Resor & Wisata Santai', desc: 'Eksplorasi spot resor cantik atau aktivitas golf sesuai preferensi Anda.' },
      { title: '17:30 - Pengantaran Kembali Tepat Waktu', desc: 'Pengantaran kembali ke terminal ferry Nongsa Pura atau hotel penginapan.' }
    ],
    waMessage: 'Halo Batam Island Transport, saya tertarik dengan layanan transportasi ke kawasan Nongsa Batam. Mohon penawaran harganya.'
  },

  // 4. CUSTOM BATAM DESTINATIONS
  {
    id: 'custom-batam-tour',
    title: 'Destinasi Lainnya di Batam Sesuai Request Customer',
    titleEn: 'Custom Batam Itinerary & Corporate Charter',
    category: 'flagship',
    priceText: 'Hubungi untuk Penawaran Terbaik',
    priceTextEn: 'Contact for Best Offer',
    numericPrice: 0,
    duration: 'Sesuai Kebutuhan Customer',
    durationEn: 'Tailored to Customer Needs',
    badge: '100% FLEKSIBEL & KUSTOM',
    image: '/custom_batam_corporate.jpg',
    description: 'Layanan transportasi dengan kebebasan penuh mengatur jadwal dan rute perjalanan Anda di seluruh penjuru Batam. Cocok untuk agenda meeting bisnis, inspeksi industri corporate, rombongan keluarga besar, maupun rute wisata kustom.',
    descriptionEn: 'Customized private transport offering total flexibility in designing your own schedule and routes anywhere across Batam. Perfect for corporate business inspections, family groups, and bespoke leisure trips.',
    highlights: [
      'Rute dan destinasi bebas ditentukan sesuai keinginan Anda',
      'Pilihan armada lengkap: Pajero Sport, Toyota HiAce, Innova Zenix, dan Innova Reborn',
      'Dukungan armada fleksibel dalam jumlah unit untuk rombongan group / corporate',
      'Driver profesional yang ramah, sopan, dan siap mendampingi perjalanan Anda',
      'Pengalaman panjang sejak 1994 memastikan perjalanan Anda berjalan mulus'
    ],
    highlightsEn: [
      'Complete freedom to tailor your stops and destinations',
      'Premier fleet selection: Pajero Sport, Toyota HiAce, Innova Zenix, and Innova Reborn',
      'Multi-vehicle group and corporate delegation support',
      'Professional, courteous drivers at your service all day',
      'Proven expertise since 1994 ensuring flawless logistics'
    ],
    included: [
      'Mobil privat AC prima',
      'Driver berpengalaman & BBM',
      'Antar-jemput fleksibel di seluruh area Batam',
      'Biaya parkir',
      'Air mineral dingin'
    ],
    includedEn: [
      'Private clean AC car',
      'Professional driver & fuel',
      'Flexible door-to-door pickup anywhere in Batam',
      'Parking fees',
      'Mineral water'
    ],
    excluded: [
      'Kebutuhan belanja atau konsumsi pribadi di luar layanan transportasi'
    ],
    excludedEn: [
      'Personal purchases and meals outside transport service'
    ],
    packageTiers: COMMON_PACKAGE_TIERS,
    itinerary: [
      { title: 'Jadwal Fleksibel', desc: 'Waktu penjemputan, lokasi tujuan, dan durasi sewa sepenuhnya diatur sesuai preferensi jadwal Anda.' },
      { title: 'Konsultasi Langsung', desc: 'Diskusikan rencana perjalanan Anda bersama tim kami via WhatsApp untuk rute yang paling efisien.' }
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin konsultasi layanan transportasi kustom di Batam sesuai rute dan kebutuhan saya. Mohon infonya.'
  }
];

export const LANDING_PAGE_PACKAGES = TOUR_PACKAGES;

