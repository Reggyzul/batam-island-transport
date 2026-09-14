import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface FaqSectionProps {
  lang: 'ID' | 'EN';
}

interface FaqItem {
  questionEn: string;
  questionId: string;
  answerEn: string;
  answerId: string;
  tagEn: string;
  tagId: string;
}

export const FAQS: FaqItem[] = [
  {
    tagEn: 'Airport Transfer',
    tagId: 'Antar-Jemput Bandara',
    questionEn: 'How do I arrange pickup from Hang Nadim International Airport (BTH)?',
    questionId: 'Bagaimana cara memesan penjemputan dari Bandara Internasional Hang Nadim (BTH)?',
    answerEn: 'Batam Island Transport provides direct, punctual airport transfers from Hang Nadim International Airport (BTH) to hotels, resorts, ferry terminals, or industrial zones across Batam. Our driver will greet you directly at the arrival hall holding a name sign. We monitor your flight schedule 24/7 so you never have to worry about flight delays.',
    answerId: 'Batam Island Transport menyediakan layanan antar-jemput tepat waktu dari Bandara Hang Nadim (BTH) menuju hotel, kawasan perbelanjaan Nagoya, terminal ferry, ataupun kawasan industri di Batam. Driver kami siap menyambut langsung di lobi kedatangan dengan membawa name board dan memantau status penerbangan Anda secara real-time 24 jam.',
  },
  {
    tagEn: 'Ferry Port Transfers',
    tagId: 'Pelabuhan Ferry Batam',
    questionEn: 'Do you offer pickup from Batam Centre, Harbour Bay, or Nongsa Pura ferry terminals?',
    questionId: 'Apakah melayani penjemputan dari Pelabuhan Ferry Batam Centre, Harbour Bay, atau Nongsa Pura?',
    answerEn: 'Yes, absolutely! We frequently welcome travelers arriving by international ferries from Singapore (HarbourFront / Tanah Merah) and Malaysia (Stulang Laut / Pasir Gudang). Our drivers will wait at the arrival exit of Batam Centre, Harbour Bay, Sekupang, or Nongsa Pura to assist with your luggage and drive you safely to your destination.',
    answerId: 'Ya, tentu saja! Kami secara rutin melayani wisatawan dan pebisnis yang tiba dengan kapal ferry dari Singapura maupun Malaysia. Driver kami akan menunggu di pintu keluar kedatangan Pelabuhan Batam Centre, Harbour Bay, Sekupang, atau Nongsa Pura untuk membantu barang bawaan dan mengantar Anda dengan nyaman tanpa harus antre taksi umum.',
  },
  {
    tagEn: 'Fleet & Inclusions',
    tagId: 'Armada & Fasilitas',
    questionEn: 'What vehicles are available and what is included in the car rental service?',
    questionId: 'Kendaraan apa saja yang tersedia dan apa saja fasilitas yang termasuk dalam rental mobil?',
    answerEn: 'Our premier fleet includes the executive Mitsubishi Pajero Sport, the versatile Toyota Innova Reborn, and the next-gen Toyota Innova Zenix. All units are clean, well-maintained, and equipped with chilled AC. Rental service includes an experienced professional driver, fuel options, and parking fee arrangements according to your preferences.',
    answerId: 'Pilihan armada utama kami meliputi Mitsubishi Pajero Sport, Toyota Innova Reborn, dan Toyota Innova Zenix. Seluruh unit dalam kondisi prima, wangi, bersih, dan ber-AC sejuk. Layanan sewa mobil sudah mencakup pengemudi berpengalaman yang ramah dan paham rute Batam, dengan opsi paket bahan bakar (BBM) dan parkir sesuai kebutuhan perjalanan Anda.',
  },
  {
    tagEn: 'Corporate & Groups',
    tagId: 'Corporate & Rombongan',
    questionEn: 'Can Batam Island Transport accommodate corporate business delegations and large groups?',
    questionId: 'Bisakah Batam Island Transport melayani kebutuhan kunjungan bisnis corporate dan rombongan group?',
    answerEn: 'Yes. With our rich experience since 1994, we excel at tailoring vehicle types and fleet quantities to match any corporate, business inspection, or group requirements. We can deploy multiple units of Innova Reborn, Zenix, or Pajero Sport with coordinated itineraries and professional drivers.',
    answerId: 'Sangat bisa! Berpengalaman sejak 1994 dalam menyediakan layanan mobil dan driver, kami terbiasa menyesuaikan jenis serta jumlah kendaraan untuk kebutuhan perjalanan dinas, kunjungan kawasan industri pabrik, pertemuan bisnis, maupun rombongan group keluarga besar dengan koordinasi yang rapi dan profesional.',
  },
  {
    tagEn: 'Batam Destinations',
    tagId: 'Destinasi Wisata Batam',
    questionEn: 'Can we customize our travel itinerary to Barelang, Nagoya, and Nongsa?',
    questionId: 'Apakah rute perjalanan bisa dikustomisasi ke Barelang, Nagoya, dan Nongsa?',
    answerEn: 'Yes, 100% flexible! You can explore the iconic 6 bridges of Barelang with fresh kelong seafood, shop and dine in Nagoya, unwind at luxury beachfront resorts in Nongsa, or specify custom destinations anywhere in Batam. Our drivers will accommodate your preferred pace and schedule.',
    answerId: 'Tentu saja, rute kami 100% fleksibel! Anda bebas menentukan destinasi wisata seperti berfoto di Jembatan 1 Barelang sambil menikmati hidangan seafood kelong, belanja di mall Nagoya Hill / Grand Batam, bersantai di kawasan marina resor Nongsa, maupun rute kustom lainnya sesuai permintaan Anda.',
  },
  {
    tagEn: 'Reservation & Contact',
    tagId: 'Reservasi & Kontak',
    questionEn: 'How do I book and contact Batam Island Transport?',
    questionId: 'Bagaimana cara reservasi dan menghubungi Batam Island Transport?',
    answerEn: 'Booking is simple and fast. Contact our official WhatsApp support at 085600002242 or 0811778857. Share your arrival date, pickup location, destination, and selected vehicle. We will provide an instant confirmation and best offer.',
    answerId: 'Pemesanan sangat praktis dan cepat. Anda cukup menghubungi WhatsApp resmi kami di 0856-0000-2242 atau 0811-7788-57. Informasikan tanggal kedatangan, titik jemput, tujuan, dan pilihan armada yang diinginkan. Tim kami akan segera memberikan konfirmasi dan penawaran harga terbaik.',
  }
];

export default function FaqSection({ lang }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-luxury-gold text-xs font-display font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'EN' ? 'FREQUENTLY ASKED QUESTIONS' : 'PERTANYAAN UMUM (FAQ)'}</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight uppercase">
            {lang === 'EN' ? 'EVERYTHING YOU NEED TO KNOW' : 'INFORMASI LENGKAP LAYANAN KAMI'}
          </h2>

          <div className="w-16 h-1 bg-luxury-gold rounded-full mx-auto my-3" />

          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {lang === 'EN'
              ? 'Find helpful answers about car rental with driver, airport & ferry port transfers, and custom Batam travel solutions.'
              : 'Temukan jawaban seputar sewa mobil dengan sopir, antar-jemput bandara & pelabuhan, serta solusi transportasi di Batam.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const question = lang === 'EN' ? faq.questionEn : faq.questionId;
            const answer = lang === 'EN' ? faq.answerEn : faq.answerId;
            const tag = lang === 'EN' ? faq.tagEn : faq.tagId;

            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-luxury-gold/50 bg-amber-50/20 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-display font-bold uppercase tracking-widest text-luxury-gold">
                      {tag}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-gray-900">
                      {question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-luxury-gold text-white' : 'text-gray-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
          <p className="font-display font-bold text-sm text-gray-900">
            {lang === 'EN' ? 'Need a reliable car and driver in Batam?' : 'Butuh mobil dan driver terpercaya di Batam?'}
          </p>
          <p className="font-sans text-xs text-gray-500">
            {lang === 'EN'
              ? 'Contact us and let us arrange the transportation that fits your journey.'
              : 'Hubungi kami dan biarkan kami mengatur transportasi yang sesuai dengan perjalanan Anda.'}
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-luxury-gold hover:bg-[#b8860b] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'EN' ? 'Chat WhatsApp (085600002242 / 0811778857)' : 'Chat WhatsApp (0856-0000-2242 / 0811-7788-57)'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
