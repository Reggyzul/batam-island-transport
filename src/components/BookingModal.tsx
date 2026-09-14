import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, Clock, MapPin, User, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { DEFAULT_WA_NUMBER } from '../utils/whatsapp';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [pickupTime, setPickupTime] = useState('08:00');
  const [duration, setDuration] = useState(1);
  const [includeTolParkir, setIncludeTolParkir] = useState(false);
  const [pickupAddress, setPickupAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];

  // Reset local state when car changes
  useEffect(() => {
    if (car) {
      setName('');
      setPhone('');
      setStartDate('');
      setPickupTime('08:00');
      setDuration(1);
      setIncludeTolParkir(false);
      setPickupAddress('');
      setNotes('');
      setIsBooked(false);
    }
  }, [car]);

  if (!car) return null;

  // Constants
  const ALL_IN_COST_PER_DAY = 150000; // IDR for Tol, Parkir, Makan Driver

  // Calculations
  const basePriceTotal = car.pricePerDay * duration;
  const extrasTotal = includeTolParkir ? ALL_IN_COST_PER_DAY * duration : 0;
  const grandTotal = basePriceTotal + extrasTotal;

  // Format IDR helper
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !startDate || !pickupAddress) {
      alert(lang === 'EN' ? 'Please complete all required fields!' : 'Mohon lengkapi semua kolom yang wajib diisi!');
      return;
    }

    // Compose professional WhatsApp template
    const waNumber = DEFAULT_WA_NUMBER;
    const inclusionText = includeTolParkir 
      ? (lang === 'EN' ? t.modal_allin_active : 'Ya (All-In Tol, Parkir, Makan Driver)')
      : (lang === 'EN' ? t.modal_allin_inactive : 'Tidak (Mobil + Driver saja)');

    let textTemplate = '';
    if (lang === 'EN') {
      textTemplate = `Hello Batam Island Transport, I would like to book the following vehicle:

*VEHICLE MODEL:*
- ${car.name}

*SCHEDULE DETAILS:*
- Start Date: ${startDate}
- Pickup Time: ${pickupTime}
- Rental Duration: ${duration} Day(s)

*CUSTOMER & PICKUP DETAILS:*
- Name: ${name}
- WhatsApp Number: ${phone}
- Pickup Address: ${pickupAddress}
- Special Notes: ${notes || '-'}

*EXTRA SERVICES:*
- All-In Package (Fuel, Parking, Driver Meal): ${inclusionText}

*ESTIMATED COST:*
- Price: Contact for best quote

Please confirm availability. Thank you!`;
    } else {
      textTemplate = `Halo Batam Island Transport, saya ingin memesan armada berikut:

*MODEL ARMADA:*
- ${car.name}

*JADWAL PERJALANAN:*
- Tanggal Jemput: ${startDate}
- Jam Jemput: ${pickupTime}
- Durasi Sewa: ${duration} Hari

*DATA PELANGGAN & PENJEMPUTAN:*
- Nama: ${name}
- No. WhatsApp: ${phone}
- Alamat Jemput: ${pickupAddress}
- Catatan Khusus: ${notes || '-'}

*LAYANAN TAMBAHAN:*
- Paket All-In (BBM, Parkir, Makan Driver): ${inclusionText}

*ESTIMASI BIAYA:*
- Tarif: Hubungi kontak kami untuk penawaran terbaik

Mohon konfirmasi ketersediaan unit. Terima kasih!`;
    }

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          id="booking-backdrop"
        />

        {/* Modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="bg-white rounded-[32px] w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 z-10 max-h-[90vh] md:max-h-none"
          id="booking-modal-panel"
        >
          {/* Left Column: Car Details Summary */}
          <div className="md:col-span-5 bg-luxury-charcoal text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[35vh] md:max-h-[80vh] lg:max-h-none">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-luxury-gold">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="font-display font-semibold text-xs tracking-widest uppercase">BATAM ISLAND TRANSPORT</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight uppercase text-left">
                  {car.name}
                </h3>
                <p className="font-sans text-xs text-gray-400 text-left">
                  {car.description}
                </p>
              </div>

              {/* Car visual cutout in modal */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-gradient-to-b from-white via-white to-slate-100 aspect-[4/3] p-3 flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-contain drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Specs items in modal */}
              <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                <p className="font-display font-bold uppercase text-luxury-gold tracking-widest text-[9px] mb-3 text-left">
                  {lang === 'EN' ? 'Specifications & Features:' : 'Spesifikasi & Fasilitas:'}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">{lang === 'EN' ? 'Seats:' : 'Kapasitas:'}</span>
                    <span className="font-semibold">{car.seats} {lang === 'EN' ? 'Seats' : 'Kursi'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">{lang === 'EN' ? 'Fuel:' : 'Bahan Bakar:'}</span>
                    <span className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[80px]">
                      {car.fuel}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">{lang === 'EN' ? 'Transmission:' : 'Transmisi:'}</span>
                    <span className="font-semibold">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">{lang === 'EN' ? 'Driver:' : 'Driver:'}</span>
                    <span className="font-semibold text-luxury-gold">{lang === 'EN' ? 'Included' : 'Termasuk'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom booking summary */}
            <div className="mt-8 pt-6 border-t border-white/10 hidden md:block text-left">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">
                {lang === 'EN' ? 'Booking Details' : 'Detail Pemesanan'}
              </p>
              <div className="space-y-1.5 text-xs text-gray-300 font-sans">
                <div className="flex justify-between">
                  <span>{t.modal_summary_base}:</span>
                  <span className="font-semibold text-luxury-gold">{car.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.modal_summary_total_days}:</span>
                  <span className="font-semibold">{duration} {lang === 'EN' ? 'Days' : 'Hari'}</span>
                </div>
                {car.pricePerDay > 0 && includeTolParkir && (
                  <div className="flex justify-between">
                    <span>{lang === 'EN' ? 'Tolls & Parking:' : 'Toll & Parkir:'}</span>
                    <span className="font-semibold text-emerald-400">{lang === 'EN' ? 'Included' : 'Termasuk'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto max-h-[55vh] md:max-h-[80vh] lg:max-h-[85vh] flex flex-col justify-between bg-white relative">
            
            {/* Close button on right corner */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer z-20"
              id="close-booking-modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 text-left">
                  <h4 className="font-display font-extrabold text-xl text-gray-900 uppercase">
                    {t.modal_title}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    {t.modal_desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Select Car Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left font-display">
                      {lang === 'EN' ? 'Choose Fleet / Car' : 'Pilih Armada / Unit Mobil'} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={car.id}
                      onChange={(e) => {
                        const newCar = CARS.find(c => c.id === e.target.value);
                        if (newCar && onCarChange) {
                          onCarChange(newCar);
                        }
                      }}
                      className="block w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] text-sm font-sans text-left cursor-pointer"
                    >
                      {CARS.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                      {t.modal_field_name} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'EN' ? 'e.g. Faisal Al-Otaibi' : 'Contoh: Rian Prasetya'}
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                      {t.modal_field_phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 08123456789"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Dates Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                        {t.modal_field_date} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          required
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                        {t.modal_field_time}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <input
                          type="time"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Duration Slider / Select */}
                  <div className="space-y-1 text-left">
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      <span>{t.modal_field_duration}: <strong>{duration} {lang === 'EN' ? 'Days' : 'Hari'}</strong></span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400">
                      <span>1 {lang === 'EN' ? 'Day' : 'Hari'}</span>
                      <span>15 {lang === 'EN' ? 'Days' : 'Hari'}</span>
                      <span>30 {lang === 'EN' ? 'Days' : 'Hari'}</span>
                    </div>
                  </div>

                  {/* Inclusion BBM / Tol Parkir Option (Only for Avanza/Innova pricing) */}
                  {car.pricePerDay > 0 && (
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                      <div className="space-y-0.5 text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs text-gray-900">{t.modal_field_extra_allin}</span>
                          <span className="bg-luxury-gold/20 text-luxury-gold text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                            {lang === 'EN' ? 'Recommended' : 'Direkomendasikan'}
                          </span>
                        </div>
                        <p className="font-sans text-[10px] text-gray-500 leading-snug">
                          {t.modal_field_extra_detail}
                        </p>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setIncludeTolParkir(!includeTolParkir)}
                        className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer flex items-center ${
                          includeTolParkir ? 'bg-luxury-gold justify-end' : 'bg-gray-200 justify-start'
                        }`}
                      >
                        <motion.div layout className="w-4.5 h-4.5 rounded-full bg-white shadow" />
                      </button>
                    </div>
                  )}

                  {/* Pickup Address */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                      {t.modal_field_address} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-3 pointer-events-none text-gray-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={2}
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder={lang === 'EN' ? 'Please specify hotel name, station, airport...' : 'Tuliskan nama hotel, stasiun, bandara, atau alamat lengkap...'}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left">
                      {t.modal_field_notes}
                    </label>
                    <textarea
                      rows={1}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={lang === 'EN' ? 'e.g. Large luggage capacity requested...' : 'Contoh: Bagasi luas untuk koper besar, kursi bayi, dll...'}
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold text-sm font-sans text-left"
                    />
                  </div>
                </div>

                {/* Submit Action Button & Price Display */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">{lang === 'EN' ? 'Rate Info' : 'Informasi Tarif'}</span>
                    <span className="font-display font-bold text-xs sm:text-sm text-luxury-gold">{lang === 'EN' ? 'Contact for best quote' : 'Hubungi kontak kami untuk penawaran terbaik'}</span>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-display font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-green-600/15 transition-all flex items-center justify-center gap-2 cursor-pointer ml-auto"
                    id="submit-booking-to-whatsapp"
                  >
                    <Send className="w-4.5 h-4.5" />
                    <span>{t.modal_btn_confirm}</span>
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                id="booking-success-message"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-2xl text-gray-900 uppercase">
                  {lang === 'EN' ? 'Booking Draft Created!' : 'Pemesanan Dikirim!'}
                </h4>
                <p className="font-sans text-gray-600 text-sm max-w-md leading-relaxed">
                  {lang === 'EN' 
                    ? `We have generated a WhatsApp reservation draft. Please click Send on your WhatsApp chat to complete your booking for ${car.name}.`
                    : `Kami telah membuat draf pesanan WhatsApp untuk armada ${car.name}. Silakan kirim pesan di aplikasi WhatsApp untuk menyelesaikan pemesanan.`}
                </p>
                <button
                  onClick={onClose}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-bold text-sm px-6 py-3 rounded-full shadow-md transition-colors cursor-pointer mt-4"
                >
                  {lang === 'EN' ? 'Back' : 'Kembali'}
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
