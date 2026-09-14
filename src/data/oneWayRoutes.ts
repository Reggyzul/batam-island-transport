export interface OneWayRoute {
  id: string;
  name: string;
  from: string;
  to: string;
  duration: string;
  durationEn: string;
  category: 'port' | 'airport' | 'tourism' | 'city';
  description: string;
  descriptionEn: string;
  keyPoints: string[];
  keyPointsEn: string[];
  included: string[];
  includedEn: string[];
  waMessage: string;
}

export const ONE_WAY_ROUTES: OneWayRoute[] = [
  {
    id: 'bth-nagoya',
    name: 'Bandara Hang Nadim ↔ Nagoya / Harbour Bay',
    from: 'Bandara Internasional Hang Nadim (BTH)',
    to: 'Nagoya / Harbour Bay Area',
    duration: '30 - 45 Menit',
    durationEn: '30 - 45 Minutes',
    category: 'airport',
    description: 'Layanan transfer privat langsung dari Bandara Hang Nadim menuju kawasan pusat bisnis, perbelanjaan, dan hotel di Nagoya maupun Harbour Bay.',
    descriptionEn: 'Direct private airport transfer from Hang Nadim International Airport to central business, shopping, and hotel hubs in Nagoya and Harbour Bay.',
    keyPoints: [
      'Penjemputan langsung di pintu kedatangan bandara',
      'Driver memantau jadwal kedatangan penerbangan 24/7',
      'Bantuan membawa koper dan barang bawaan'
    ],
    keyPointsEn: [
      'Direct pickup at airport arrival hall',
      'Flight schedule tracking 24/7',
      'Luggage handling assistance'
    ],
    included: [
      'Mobil Privat AC Bersih & Nyaman',
      'Driver Profesional Berpengalaman',
      'BBM & Karcis Parkir Bandara',
      'Antar Langsung ke Pintu Lobi Hotel'
    ],
    includedEn: [
      'Comfortable Chilled AC Vehicle',
      'Professional Licensed Driver',
      'Fuel and Airport Parking Included',
      'Direct Hotel Lobby Drop-off'
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin memesan transfer Bandara Hang Nadim menuju Nagoya / Harbour Bay. Mohon info ketersediaan unit dan tarifnya.'
  },
  {
    id: 'bth-nongsa',
    name: 'Bandara Hang Nadim ↔ Kawasan Resor Nongsa',
    from: 'Bandara Internasional Hang Nadim (BTH)',
    to: 'Kawasan Resor & Marina Nongsa',
    duration: '20 - 30 Menit',
    durationEn: '20 - 30 Minutes',
    category: 'airport',
    description: 'Transfer cepat dan nyaman dari Bandara Hang Nadim menuju resor mewah dan lapangan golf di kawasan pesisir Nongsa.',
    descriptionEn: 'Fast and pleasant transfer connecting Hang Nadim Airport to luxury beachfront resorts and golf clubs in Nongsa.',
    keyPoints: [
      'Rute singkat dan lancar bebas hambatan',
      'Antar langsung ke Montigo Resorts, Turi Beach, Batam View, atau Nongsa Point',
      'Armada terawat dengan AC sejuk'
    ],
    keyPointsEn: [
      'Short smooth highway route',
      'Direct drop-off to Montigo Resorts, Turi Beach, Batam View, or Nongsa Point',
      'Pristine fleet with chilled AC'
    ],
    included: [
      'Mobil Privat AC Pilihan',
      'Driver Ramah & Bahan Bakar (BBM)',
      'Biaya Parkir & Masuk Kawasan',
      'Layanan Antar Pintu ke Pintu'
    ],
    includedEn: [
      'Selected Private AC Vehicle',
      'Friendly Driver & Fuel',
      'Parking and Area Access Fees',
      'Door-to-door Service'
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin pesan layanan transfer Bandara Hang Nadim ke kawasan Resor Nongsa. Mohon penawaran harganya.'
  },
  {
    id: 'batam-centre-hotel',
    name: 'Pelabuhan Ferry Batam Centre ↔ Hotel / Kota Batam',
    from: 'Terminal Ferry Internasional Batam Centre',
    to: 'Hotel / Kawasan Pusat Kota Batam',
    duration: '15 - 30 Menit',
    durationEn: '15 - 30 Minutes',
    category: 'port',
    description: 'Layanan penjemputan dari terminal ferry Batam Centre bagi wisatawan dan pebisnis dari Singapura & Malaysia menuju hotel atau kantor di Batam.',
    descriptionEn: 'Convenient ferry terminal pickup from Batam Centre for Singapore and Malaysia travelers heading to hotels or offices across Batam.',
    keyPoints: [
      'Driver siap menyambut di area kedatangan terminal ferry',
      'Kemudahan transportasi tanpa antre taksi umum',
      'Kabin lega untuk koper dan tas perjalanan'
    ],
    keyPointsEn: [
      'Driver waiting at ferry arrival terminal exit',
      'Hassle-free private pickup avoiding taxi queues',
      'Spacious cabin for suitcases and travel bags'
    ],
    included: [
      'Mobil Privat AC Nyaman',
      'Driver Berpengalaman & BBM',
      'Biaya Parkir Pelabuhan',
      'Antar Langsung ke Hotel'
    ],
    includedEn: [
      'Clean Private AC Vehicle',
      'Experienced Driver & Fuel',
      'Ferry Port Parking Included',
      'Direct Hotel Drop-off'
    ],
    waMessage: 'Halo Batam Island Transport, saya butuh penjemputan di Pelabuhan Ferry Batam Centre menuju hotel. Mohon info armadanya.'
  },
  {
    id: 'harbour-bay-transfer',
    name: 'Pelabuhan Harbour Bay ↔ Seluruh Area Batam',
    from: 'Terminal Ferry Internasional Harbour Bay',
    to: 'Seluruh Destinasi / Hotel Batam',
    duration: '15 - 40 Menit',
    durationEn: '15 - 40 Minutes',
    category: 'port',
    description: 'Transportasi privat dari Harbour Bay Ferry Terminal di pusat Nagoya ke seluruh hotel, pusat belanja, dan kawasan industri di Batam.',
    descriptionEn: 'Private transport from Harbour Bay Ferry Terminal in central Nagoya to any hotel, shopping mall, or industrial park in Batam.',
    keyPoints: [
      'Pintu gerbang ferry favorit dari HarbourFront Singapura',
      'Dekat langsung dengan pusat kuliner dan belanja Nagoya',
      'Penjemputan tepat waktu sesuai jam kedatangan kapal'
    ],
    keyPointsEn: [
      'Favorite ferry gateway from Singapore HarbourFront',
      'Direct access to Nagoya dining and retail',
      'Prompt greeting matching ferry arrival time'
    ],
    included: [
      'Mobil Privat AC',
      'Driver Profesional',
      'BBM & Parkir Terminal Harbour Bay'
    ],
    includedEn: [
      'Private AC Vehicle',
      'Professional Driver',
      'Fuel & Harbour Bay Parking'
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin pesan transfer dari Harbour Bay Ferry Terminal. Mohon info ketersediaan armada.'
  },
  {
    id: 'city-barelang',
    name: 'Pusat Kota Batam / Hotel ↔ Jembatan Barelang',
    from: 'Nagoya / Batam Centre / Hotel',
    to: 'Kawasan Wisata Jembatan Barelang',
    duration: '45 - 60 Menit',
    durationEn: '45 - 60 Minutes',
    category: 'tourism',
    description: 'Perjalanan santai dan nyaman menuju landmark kebanggaan Batam, Jembatan Barelang, restoran seafood terapung, dan pulau-pulau sekitarnya.',
    descriptionEn: 'Scenic leisure transfer from central Batam to the pride of Batam—the iconic Barelang Bridges, seafood kelong, and adjacent islands.',
    keyPoints: [
      'Melewati jalur asri trans-Barelang',
      'Spot foto terbaik di Jembatan 1 Tengku Fisabilillah',
      'Driver siap menunggu selama Anda berwisata dan menikmati kuliner'
    ],
    keyPointsEn: [
      'Picturesque drive across trans-Barelang road',
      'Prime photography stop at Bridge 1',
      'Driver waits while you enjoy dining and sightseeing'
    ],
    included: [
      'Mobil Privat AC Pilihan',
      'Driver Berpengalaman & BBM PP',
      'Biaya Parkir Lokasi Wisata'
    ],
    includedEn: [
      'Selected Private AC Car',
      'Dedicated Driver & Round-trip Fuel',
      'Sightseeing Parking Included'
    ],
    waMessage: 'Halo Batam Island Transport, saya ingin menyewa mobil + driver untuk rute ke Jembatan Barelang. Mohon informasi tarifnya.'
  }
];
