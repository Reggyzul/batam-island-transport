import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/cars';
import { Testimonial } from '../types';
import { Star, Quote, MessageSquarePlus, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TestimonialsProps {
  lang: 'ID' | 'EN';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const t = TRANSLATIONS[lang];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Form states
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newCarModel, setNewCarModel] = useState('Innova Reborn');
  const [successMsg, setSuccessMsg] = useState(false);

  // Auto scroll testimonials periodically
  useEffect(() => {
    if (showAddReview) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length, showAddReview]);

  // Load reviews from localStorage if available
  useEffect(() => {
    const local = localStorage.getItem('yoga_reviews');
    if (local) {
      try {
        setReviews(JSON.parse(local));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) {
      alert(lang === 'EN' ? 'Please fill in your name and review text!' : 'Mohon tuliskan nama dan isi ulasan Anda!');
      return;
    }

    const newReview: Testimonial = {
      id: `local-testi-${Date.now()}`,
      name: newName,
      role: newRole || (lang === 'EN' ? 'Valued Customer' : 'Pelanggan Setia'),
      text: newText,
      rating: newRating,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', // standard avatar placeholder
      carModel: newCarModel,
      date: lang === 'EN' ? 'Today' : 'Hari Ini'
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('yoga_reviews', JSON.stringify(updatedReviews));

    // Clear and success trigger
    setNewName('');
    setNewRole('');
    setNewText('');
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setShowAddReview(false);
    }, 2500);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-heading">
          <span className="font-display font-bold text-sm text-luxury-gold tracking-widest uppercase">
            {t.testi_tag}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 tracking-tight uppercase">
            {t.testi_title}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
            {t.testi_desc}
          </p>
        </div>

        {/* Dynamic Interactive Testimonial Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Carousel Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-center relative" id="testimonials-carousel-section">
            
            <AnimatePresence mode="wait">
              {reviews.length > 0 && (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[32px] p-8 sm:p-12 border border-gray-100 shadow-xl relative"
                  id={`testimonial-bubble-${activeIdx}`}
                >
                  {/* Decorative golden quote icon */}
                  <div className="absolute top-8 right-8 text-gold-100">
                    <Quote className="w-16 h-16 transform -scale-x-100 fill-current opacity-60" />
                  </div>

                  <div className="space-y-6 relative z-10 text-left">
                    {/* Stars row */}
                    <div className="flex text-yellow-500">
                      {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text block */}
                    <p className="font-sans text-gray-700 italic text-base sm:text-lg leading-relaxed">
                      "{reviews[activeIdx].text}"
                    </p>

                    {/* Renter profile */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <img
                        src={reviews[activeIdx].image}
                        alt={reviews[activeIdx].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-luxury-gold animate-pulse-subtle"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display font-extrabold text-base text-gray-900 uppercase tracking-wide">
                          {reviews[activeIdx].name}
                        </h4>
                        <p className="font-sans text-xs text-gray-500">
                          {reviews[activeIdx].role}
                        </p>
                        
                        {/* Car tag badge */}
                        <span className="inline-flex items-center gap-1 bg-gold-50 text-luxury-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-gold-200/20 mt-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{t.testi_rented_model} {reviews[activeIdx].carModel} ({reviews[activeIdx].date})</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Carousel navigation & Next/Prev page controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6" id="carousel-controls">
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 bg-white hover:bg-luxury-gold hover:text-white text-gray-700 font-display font-bold text-xs py-2.5 px-4 rounded-xl border border-gray-200 shadow-sm transition-all cursor-pointer"
                id="testi-prev-btn"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.testi_btn_prev}</span>
              </button>

              {/* Dots and Page Counter */}
              <div className="flex items-center gap-2" id="carousel-dots">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === i ? 'w-8 bg-luxury-gold' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    title={`Page ${i + 1}`}
                  />
                ))}
                <span className="font-mono text-xs text-gray-400 font-semibold ml-2">
                  {activeIdx + 1}/{reviews.length}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="flex items-center gap-1 bg-white hover:bg-luxury-gold hover:text-white text-gray-700 font-display font-bold text-xs py-2.5 px-4 rounded-xl border border-gray-200 shadow-sm transition-all cursor-pointer"
                id="testi-next-btn"
              >
                <span>{t.testi_btn_next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

          {/* Right Column: CTA/Form to Write Review */}
          <div className="lg:col-span-5" id="testimonials-form-section">
            <div className="bg-luxury-charcoal text-white rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!showAddReview ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 relative z-10 py-6 text-center lg:text-left"
                  >
                    <Quote className="w-10 h-10 text-luxury-gold mb-2 mx-auto lg:mx-0" />
                    <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-left">
                      {t.testi_form_title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed text-left">
                      {t.testi_form_desc}
                    </p>
                    <button
                      onClick={() => setShowAddReview(true)}
                      className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-bold text-xs py-3.5 px-6 rounded-full shadow-lg hover:shadow-luxury-gold/10 transition-colors flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer"
                      id="write-review-toggle-btn"
                    >
                      <MessageSquarePlus className="w-4.5 h-4.5" />
                      <span>{t.testi_btn_submit}</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4 relative z-10"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-sm uppercase text-luxury-gold">
                        {t.testi_btn_submit}
                      </h3>
                      <button
                        onClick={() => setShowAddReview(false)}
                        className="text-gray-400 hover:text-white text-xs font-semibold cursor-pointer"
                      >
                        {lang === 'EN' ? 'Cancel' : 'Batal'}
                      </button>
                    </div>

                    {successMsg ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-green-600/20 text-green-400 border border-green-500/30 rounded-xl p-4 flex items-center gap-2 text-xs"
                      >
                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                        <span>{t.testi_success_msg}</span>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleAddReviewSubmit} className="space-y-3.5 text-left">
                        {/* Name */}
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            {t.testi_label_name} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder={lang === 'EN' ? 'e.g. Budi Santoso' : 'Contoh: Rian Prasetya'}
                            className="block w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:ring-1 focus:ring-luxury-gold text-xs font-sans"
                          />
                        </div>

                        {/* Role */}
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            {t.testi_label_role}
                          </label>
                          <input
                            type="text"
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                            placeholder={lang === 'EN' ? 'e.g. Tourist from Jakarta' : 'Contoh: Wisatawan dari Jakarta'}
                            className="block w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:ring-1 focus:ring-luxury-gold text-xs font-sans"
                          />
                        </div>

                        {/* Rating Selection */}
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            {t.testi_rating_label}
                          </label>
                          <div className="flex gap-1.5 text-yellow-500">
                            {[1, 2, 3, 4, 5].map((stars) => (
                              <button
                                key={stars}
                                type="button"
                                onClick={() => setNewRating(stars)}
                                className="p-1 focus:outline-none cursor-pointer"
                              >
                                <Star 
                                  className={`w-5 h-5 ${
                                    stars <= newRating ? 'fill-current text-yellow-500' : 'text-gray-600'
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Car Model */}
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            {t.testi_label_car}
                          </label>
                          <select
                            value={newCarModel}
                            onChange={(e) => setNewCarModel(e.target.value)}
                            className="block w-full bg-luxury-card border border-white/10 rounded-xl px-3 py-2 text-white focus:ring-1 focus:ring-luxury-gold text-xs font-sans cursor-pointer"
                          >
                            <option value="All New Avanza">All New Avanza</option>
                            <option value="Innova Reborn">Innova Reborn</option>
                            <option value="Toyota Hiace Commuter">Toyota Hiace Commuter</option>
                            <option value="Toyota Hiace Premio">Toyota Hiace Premio</option>
                            <option value="Isuzu Elf Long">Isuzu Elf Long</option>
                            <option value="Medium Bus / Bus Kecil">Medium Bus / Bus Kecil</option>
                          </select>
                        </div>

                        {/* Comment Text */}
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            {t.testi_label_text} <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            placeholder={lang === 'EN' ? 'How was the car condition, driver behaviour, and punctuality?' : 'Bagaimana kondisi mobil, ketepatan waktu, dan keramahan driver?'}
                            className="block w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:ring-1 focus:ring-luxury-gold text-xs font-sans"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white font-display font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer uppercase tracking-widest"
                          id="submit-new-review-btn"
                        >
                          {t.testi_btn_submit}
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
