import React from 'react';
import { Car, Compass, Mountain, Plane } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const serviceList = [
    {
      id: 'rental',
      icon: <Car className="w-8 h-8 text-luxury-gold" />,
      title: t.service_rental_title,
      description: t.service_rental_desc,
    },
    {
      id: 'tour',
      icon: <Compass className="w-8 h-8 text-luxury-gold" />,
      title: t.service_tour_title,
      description: t.service_tour_desc,
    },
    {
      id: 'airport',
      icon: <Plane className="w-8 h-8 text-luxury-gold" />,
      title: t.service_airport_title,
      description: t.service_airport_desc,
    },
    {
      id: 'hotel',
      icon: <Mountain className="w-8 h-8 text-luxury-gold" />,
      title: t.service_hotel_title,
      description: t.service_hotel_desc,
    },
  ];

  const handleServiceBook = (serviceId: string) => {
    if (serviceId === 'rental') {
      const el = document.getElementById('cars');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const waNumber = DEFAULT_WA_NUMBER;
      let message = '';
      if (serviceId === 'tour') {
        message = lang === 'EN'
          ? 'Hello Batam Island Transport, I would like to inquire about the Batam Tour service (Barelang, Nagoya, Nongsa).'
          : 'Halo Batam Island Transport, saya ingin bertanya dan memesan layanan Wisata & Tour Batam (Barelang, Nagoya, Nongsa).';
      } else if (serviceId === 'airport') {
        message = lang === 'EN'
          ? 'Hello Batam Island Transport, I would like to book Hang Nadim Airport Transfer.'
          : 'Halo Batam Island Transport, saya ingin memesan layanan Transportasi Bandara Hang Nadim Batam.';
      } else {
        message = lang === 'EN'
          ? 'Hello Batam Island Transport, I would like to book the Airport / Ferry Port Transfer service in Batam.'
          : 'Halo Batam Island Transport, saya ingin memesan layanan Antar-Jemput Bandara / Pelabuhan Ferry di Batam.';
      }
      window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
    }
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
            {t.services_tag}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {t.services_title}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.services_desc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:border-luxury-gold/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-white text-luxury-gold transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: "w-8 h-8 transition-colors duration-300 group-hover:text-white text-luxury-gold"
                })}
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3 group-hover:text-luxury-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              
              {/* WhatsApp Booking CTA for non-rental services */}
              <button
                onClick={() => handleServiceBook(service.id)}
                className="mt-6 w-full py-2.5 px-4 bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white rounded-xl text-xs font-display font-bold shadow-sm shadow-luxury-gold/5 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{service.id === 'rental' ? (lang === 'EN' ? 'View Fleet' : 'Lihat Pilihan Mobil') : (lang === 'EN' ? 'Book via WhatsApp' : 'Hubungi via WhatsApp')}</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
