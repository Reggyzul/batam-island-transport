import React from 'react';
import { motion } from 'motion/react';
import { Plane, Hotel, Anchor, Briefcase, Car, Building2, Compass, CheckCircle2, PhoneCall } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface ExtraServicesProps {
  lang: 'ID' | 'EN';
  onOneWayClick?: () => void;
}

export default function ExtraServices({ lang, onOneWayClick }: ExtraServicesProps) {
  const services = [
    {
      id: 'rental-mobil-driver',
      icon: <Car className="w-7 h-7 text-[#b8860b]" />,
      badge: lang === 'EN' ? 'Car Rental + Driver' : 'Rental + Driver',
      title: lang === 'EN' ? 'Car Rental with Driver' : 'Rental Mobil + Driver',
      subtitle: lang === 'EN' ? 'Pajero Sport, Innova Reborn & Zenix' : 'Armada Nyaman & Pengemudi Profesional',
      description: lang === 'EN'
        ? 'Private car rental with professional driver tailored for individual, family, and executive travel across Batam with maximum convenience and safety.'
        : 'Layanan sewa mobil privat dengan sopir profesional untuk kebutuhan perjalanan pribadi, keluarga, dan eksekutif di Batam dengan kenyamanan maksimal.',
      highlights: [
        lang === 'EN' ? 'Experienced & Courteous Drivers' : 'Driver Sopan, Ramah & Berlisensi Resmi',
        lang === 'EN' ? 'Clean & Chilled AC Fleet' : 'Armada Bersih, Terawat Prima & AC Sejuk',
        lang === 'EN' ? 'Daily / Multi-day Flexible Charter' : 'Pilihan Sewa Harian / Mingguan Fleksibel'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to book a Car Rental + Driver service. Please provide vehicle options and rates.'
        : 'Halo Batam Island Transport, saya ingin memesan layanan Rental Mobil + Driver. Mohon info ketersediaan armada dan penawaran harganya.'
    },
    {
      id: 'airport-transfer',
      icon: <Plane className="w-7 h-7 text-[#2563eb]" />,
      badge: lang === 'EN' ? 'Airport Transfer' : 'Bandara Hang Nadim',
      title: lang === 'EN' ? 'Airport Transfer' : 'Transportasi Bandara (Hang Nadim)',
      subtitle: lang === 'EN' ? 'Hang Nadim International Airport (BTH)' : 'Bandara BTH ke Hotel / Seluruh Destinasi Batam',
      description: lang === 'EN'
        ? 'Punctual pick-up and drop-off to and from Hang Nadim International Airport (BTH) with flight schedule monitoring for total peace of mind.'
        : 'Layanan antar-jemput dari dan menuju Bandara Internasional Hang Nadim (BTH) dengan monitoring jadwal penerbangan dan jaminan tepat waktu.',
      highlights: [
        lang === 'EN' ? '24/7 Flight Schedule Monitoring' : 'Monitoring Jadwal Penerbangan 24 Jam',
        lang === 'EN' ? 'Luggage Assistance Included' : 'Bantuan Bagasi & Pengemudi Siap Menyambut',
        lang === 'EN' ? 'Direct Hotel or Ferry Port Drop-off' : 'Antar Langsung ke Hotel atau Pelabuhan'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to book an Airport Transfer for Hang Nadim Airport (BTH). Please share rates.'
        : 'Halo Batam Island Transport, saya ingin memesan layanan Transportasi Bandara Hang Nadim (BTH). Mohon info tarifnya.'
    },
    {
      id: 'pelabuhan-transfer',
      icon: <Anchor className="w-7 h-7 text-emerald-600" />,
      badge: lang === 'EN' ? 'Ferry Port Transfer' : 'Pelabuhan Ferry',
      title: lang === 'EN' ? 'Ferry Terminal Transfer' : 'Antar-Jemput Pelabuhan Ferry',
      subtitle: lang === 'EN' ? 'Batam Centre, Harbour Bay, Sekupang, Nongsa' : 'Terminal Ferry Internasional Rute SG & MY',
      description: lang === 'EN'
        ? 'Dedicated transfers to and from Batam’s primary international ferry ports connecting Singapore and Malaysia, greeted promptly upon arrival.'
        : 'Layanan antar-jemput ke dan dari seluruh terminal ferry internasional (Batam Centre, Harbour Bay, Sekupang, Nongsa Pura) pintu gerbang Singapura & Malaysia.',
      highlights: [
        lang === 'EN' ? 'Serving Harbour Bay & Batam Centre' : 'Melayani Harbour Bay & Batam Centre',
        lang === 'EN' ? 'Nongsa Pura & Sekupang Ports' : 'Melayani Pelabuhan Nongsa Pura & Sekupang',
        lang === 'EN' ? 'Spacious Trunk for Luggage' : 'Kapasitas Bagasi Luas untuk Koper Wisatawan'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to book a Ferry Terminal Transfer (Batam Centre / Harbour Bay / Nongsa). Please share pricing.'
        : 'Halo Batam Island Transport, saya ingin memesan layanan Antar-Jemput Pelabuhan Ferry di Batam. Mohon info lengkapnya.'
    },
    {
      id: 'hotel-transfer',
      icon: <Hotel className="w-7 h-7 text-[#d97706]" />,
      badge: lang === 'EN' ? 'Hotel Transfer' : 'Antar-Jemput Hotel',
      title: lang === 'EN' ? 'Hotel & Resort Transfer' : 'Antar-Jemput Hotel & Resor',
      subtitle: lang === 'EN' ? 'Nagoya, Batam Centre & Nongsa Resorts' : 'Hotel ke Bandara, Pelabuhan & Tempat Wisata',
      description: lang === 'EN'
        ? 'Seamless transfers between your hotel or resort and business districts, dining hubs, or shopping centers across Batam.'
        : 'Penjemputan dan pengantaran nyaman dari hotel penginapan menuju bandara, pelabuhan ferry, atau pusat perbelanjaan di Batam.',
      highlights: [
        lang === 'EN' ? 'Flexible Pickup Times' : 'Jam Penjemputan Fleksibel Sesuai Jadwal Anda',
        lang === 'EN' ? 'Direct Lobby Doorstep Service' : 'Penjemputan Langsung di Depan Lobi Hotel',
        lang === 'EN' ? 'Safe and Reliable Service' : 'Pelayanan Aman, Santun, & Terpercaya'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, I need a Hotel Transfer service in Batam. Please provide details.'
        : 'Halo Batam Island Transport, saya membutuhkan layanan Antar-Jemput Hotel di Batam. Mohon informasi tarifnya.'
    },
    {
      id: 'corporate-transport',
      icon: <Building2 className="w-7 h-7 text-indigo-600" />,
      badge: lang === 'EN' ? 'Corporate Service' : 'Transportasi Bisnis',
      title: lang === 'EN' ? 'Corporate & Business Transport' : 'Transportasi Bisnis & Perusahaan',
      subtitle: lang === 'EN' ? 'Meetings, Industrial Visits & VIPs' : 'Kunjungan Kerja, Kawasan Industri & Tamu VIP',
      description: lang === 'EN'
        ? 'Executive transportation solutions for corporate clients, business delegations, and factory/industrial inspections across Batam’s economic zones.'
        : 'Layanan transportasi eksekutif untuk pertemuan bisnis, kunjungan kawasan industri (Batu Ampar, Kabil, Panbil, Mukakuning), dan delegasi korporat.',
      highlights: [
        lang === 'EN' ? 'Executive Fleet: Pajero Sport & Zenix' : 'Armada Mewah: Pajero Sport & Innova Zenix',
        lang === 'EN' ? 'Punctual & Discreet Drivers' : 'Pengemudi Profesional & Menjaga Privasi Tamu',
        lang === 'EN' ? 'Corporate Invoicing Available' : 'Mendukung Kebutuhan Perjalanan Dinas & Invoice'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, we need Corporate Transport for business meetings in Batam. Please provide quotation.'
        : 'Halo Batam Island Transport, kami membutuhkan layanan Transportasi Bisnis/Perusahaan di Batam. Mohon penawaran harganya.'
    },
    {
      id: 'city-transport',
      icon: <Compass className="w-7 h-7 text-teal-600" />,
      badge: lang === 'EN' ? 'City Transport' : 'City Transportation',
      title: lang === 'EN' ? 'City Transportation & Tours' : 'City Transportation & Wisata',
      subtitle: lang === 'EN' ? 'Barelang, Nagoya, Nongsa & Custom' : 'Barelang, Nagoya, Nongsa & Rute Kustom',
      description: lang === 'EN'
        ? 'Explore Batam Island comfortably visiting Barelang Bridge, Nagoya shopping mall, fresh seafood kelongs, and coastal attractions with tailored itineraries.'
        : 'Jelajahi Kota Batam mengunjungi kemegahan Jembatan Barelang, surga belanja Nagoya, santap seafood kelong, dan pesona pantai Nongsa.',
      highlights: [
        lang === 'EN' ? 'Custom Route on Customer Request' : 'Rute & Destinasi Sesuai Permintaan Anda',
        lang === 'EN' ? 'Local Insights & Dining Spots' : 'Rekomendasi Kuliner Khas & Tempat Belanja Terbaik',
        lang === 'EN' ? 'Multi-Vehicle Group Capacity' : 'Penyediaan Kendaraan Group & Rombongan Fleksibel'
      ],
      priceText: lang === 'EN' ? 'Contact via WhatsApp' : 'Hubungi via WhatsApp',
      waMessage: lang === 'EN'
        ? 'Hello Batam Island Transport, I would like to consult about City Transportation and Batam Tours. Please share route details.'
        : 'Halo Batam Island Transport, saya ingin konsultasi layanan City Transportation & Wisata di Batam. Mohon info lengkapnya.'
    }
  ];

  const handleWhatsApp = (waMessage: string) => {
    openWhatsApp(waMessage);
  };

  return (
    <section id="extra-services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block">
            {lang === 'EN' ? 'MAIN SERVICES' : 'LAYANAN UTAMA'}
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'RENTAL & TRANSPORTATION BATAM' : 'LAYANAN TRANSPORTASI BATAM'}
          </h2>

          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {lang === 'EN'
              ? 'Providing flexible, reliable, and comfortable transportation tailored to your journey in Batam since 1994.'
              : 'Berpengalaman sejak 1994 menyediakan layanan mobil dan driver yang fleksibel sesuai kebutuhan perjalanan personal, keluarga, corporate, maupun group.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-gray-100 hover:border-luxury-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors border border-gray-100 group-hover:border-amber-200">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-luxury-gold border border-amber-200/50">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 font-medium mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {service.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => handleWhatsApp(service.waMessage)}
                  className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-luxury-gold text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{service.priceText}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-luxury-charcoal text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-xl text-white">
              {lang === 'EN' ? 'Need a reliable car and driver in Batam?' : 'Butuh mobil dan driver terpercaya di Batam?'}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-xl">
              {lang === 'EN'
                ? 'Contact us and let us arrange the transportation that fits your journey. Serving personal, corporate, and group travels since 1994.'
                : 'Hubungi kami dan biarkan kami mengatur transportasi yang sesuai dengan perjalanan Anda. Siap melayani kebutuhan personal, corporate, dan group.'}
            </p>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="px-6 py-3.5 rounded-xl bg-luxury-gold hover:bg-[#b8860b] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer"
          >
            {lang === 'EN' ? 'Consult via WhatsApp' : 'Konsultasi Sekarang'}
          </button>
        </div>

      </div>
    </section>
  );
}
