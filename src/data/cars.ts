import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'pajero-sport',
    name: 'Mitsubishi Pajero Sport',
    nameAr: 'ميتسوبيشي باجيرو سبورت',
    category: 'Executive SUV',
    categoryEn: 'Executive SUV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    priceDisplayEn: 'Contact for Best Offer',
    image: '/pajero_sport.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: ['Mobil Prima', 'Driver Berpengalaman', 'AC Dingin & Bersih'],
    includeListEn: ['Premium SUV', 'Experienced Driver', 'Chilled Clean AC'],
    includeListAr: ['السيارة', 'السائق', 'مكيف نظيف'],
    description: 'SUV gagah, tangguh, dan berkelas dengan kenyamanan kabin superior. Pilihan representatif untuk tamu eksekutif, kebutuhan bisnis corporate, maupun perjalanan personal berkelas di Batam.',
    descriptionEn: 'A bold, prestigious SUV featuring superior cabin comfort, quiet ride, and commanding road presence. The prime choice for corporate executives, VIP business delegations, and luxury personal travels in Batam.',
    descriptionAr: 'سيارة دفع رباعي فاخرة ومريحة للغاية، مثالية لرجال الأعمال والرحلات العائلية الراقية في باتام.',
    rating: 5.0,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'Kabin Mewah, Audio Premium, AC Dingin Merata', labelAr: 'الميزات', valueAr: 'مكيف، بلوتوث، داخلي فاخر' },
      { label: 'Layanan', value: 'Termasuk Driver Profesional Berpengalaman', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  },
  {
    id: 'toyota-innova-reborn',
    name: 'Toyota Innova Reborn',
    nameAr: 'تويوتا إنوفا ريبورن',
    category: 'Premium MPV',
    categoryEn: 'Premium MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    priceDisplayEn: 'Contact for Best Offer',
    image: '/innova_reborn.png',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Gasoline',
    fuelAr: 'ديزل / بنزين',
    includeList: ['Mobil Prima', 'Driver Berpengalaman', 'Kenyamanan Ekstra'],
    includeListEn: ['Private MPV', 'Experienced Driver', 'Extra Comfort'],
    includeListAr: ['السيارة', 'السائق', 'راحة إضافية'],
    description: 'MPV kelas premium paling favorit untuk keluarga, wisatawan, dan perjalanan dinas di Batam. Dilengkapi suspensi empuk, kabin lapang, dan bagasi yang luas untuk koper belanjaan dan barang bawaan.',
    descriptionEn: 'The all-time favorite premium MPV for families, tourists, and corporate duty across Batam Island. Boasts plush suspension, spacious cabin room, and generous luggage capacity.',
    descriptionAr: 'سيارة عائلية ممتازة ومريحة بمساحة واسعة للحقائب ومقاعد مريحة لجميع مناطق باتام.',
    rating: 4.9,
    reviewsCount: 188,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'Kabin Luas, AC Double Blower, Peredam Halus', labelAr: 'الميزات', valueAr: 'راحة ممتازة، مكيف مزدوج' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman & Ramah', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  },
  {
    id: 'toyota-innova-zenix',
    name: 'Toyota Innova Zenix',
    nameAr: 'تويوتا إنوفا زينيكس',
    category: 'Next-Gen Luxury MPV',
    categoryEn: 'Next-Gen Luxury MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    priceDisplayEn: 'Contact for Best Offer',
    image: '/innova_zenix.png',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Gasoline / Hybrid',
    fuelAr: 'بنزين / هايبرد',
    includeList: ['Mobil Baru & Modern', 'Driver Berpengalaman', 'Kenyamanan Kelas Atas'],
    includeListEn: ['Modern Luxury MPV', 'Experienced Driver', 'First-Class Comfort'],
    includeListAr: ['السيارة الحديثة', 'السائق', 'راحة مطلقة'],
    description: 'Inovasi generasi terbaru dengan sasis modern monocoque yang menghadirkan bantingan sangat halus, kabin senyap, interior elegan, dan pengalaman berkendara kelas atas untuk kunjungan bisnis dan liburan di Batam.',
    descriptionEn: 'The next-generation luxury MPV offering an ultra-smooth ride, exceptionally quiet cabin, elegant interior aesthetics, and first-class travel experience for VIPs, executives, and discerning families.',
    descriptionAr: 'أحدث طراز من إنوفا بتصميم عصري راقٍ وعزل صوت متفوق لتجربة سفر لا تضاهى في جزيرة باتام.',
    rating: 5.0,
    reviewsCount: 126,
    specifications: [
      { label: 'Kapasitas', value: 'Maks. 7 Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas', value: 'Kabin Modern Mewah, Suspensi Monocoque, AC Digital', labelAr: 'الميزات', valueAr: 'تصميم فخم، عزل صوت، راحة مطلقة' },
      { label: 'Layanan', value: 'Termasuk Driver Berpengalaman & Tepat Waktu', labelAr: 'الخدمة', valueAr: 'سائق محترف' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Kevin Tan',
    role: 'Tourist from Singapore',
    text: 'Traveled with family from Singapore via Harbour Bay Ferry. Batam Island Transport arranged an immaculate Innova Zenix with an excellent driver. Visited Barelang Bridge, Nagoya Hill, and seafood dinner smoothly. Punctual, polite, and great value!',
    rating: 5,
    carModel: 'Toyota Innova Zenix',
    date: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Dato’ Azman & Delegation',
    role: 'Corporate Guest from Malaysia',
    text: 'Used their Mitsubishi Pajero Sport for 3 days of corporate meetings and industrial visits in Batam Centre and Nongsa. Very reliable service with deep experience since 1994. The driver was knowledgeable and professional.',
    rating: 5,
    carModel: 'Mitsubishi Pajero Sport',
    date: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Keluarga Budi & Hendra',
    role: 'Wisatawan Domestik dari Jakarta',
    text: 'Sangat puas menggunakan jasa Batam Island Transport! Jemput tepat waktu di Bandara Hang Nadim, keliling Nagoya untuk kuliner dan belanja oleh-oleh, lalu ke jembatan Barelang. Mobil Innova Reborn sangat bersih dan wangi.',
    rating: 5,
    carModel: 'Toyota Innova Reborn',
    date: 'Agustus 2026'
  }
];
