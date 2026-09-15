export const DEFAULT_WA_NUMBER = '6285600002242';
export const SECONDARY_WA_NUMBER = '62811778857';

export const WA_NUMBERS = [
  { number: '6285600002242', display: '0856-0000-2242', label: 'Layanan WhatsApp 1' },
  { number: '62811778857', display: '0811-7788-57', label: 'Layanan WhatsApp 2' },
];

export const DEFAULT_WA_TEMPLATE = `*Batam Island Transport*
==========================
*Need a reliable car and driver in Batam? Contact us and let us arrange the transportation that fits your journey.*

Halo Batam Island Transport, saya ingin konsultasi layanan transportasi & rental mobil di Batam:

*Kebutuhan Layanan:*
- Rental Mobil + Driver (Mitsubishi Pajero Sport / Toyota HiAce / Innova Zenix / Innova Reborn)
- Transportasi Bandara Hang Nadim (BTH)
- Antar-Jemput Pelabuhan Ferry (Batam Centre / Harbour Bay / Sekupang / Nongsa Pura)
- Antar-Jemput Hotel & Resort Batam
- Transportasi Bisnis / Perusahaan (Corporate Service)
- City Transportation / Wisata Batam (Barelang / Nagoya / Nongsa / Custom Route)
- Penyediaan Kendaraan Group & Corporate

Mohon informasi ketersediaan armada dan penawaran terbaik. Terima kasih!`;

export const openWhatsApp = (customMessage?: string, phoneNumber: string = DEFAULT_WA_NUMBER) => {
  const text = customMessage && customMessage.trim().length > 0 ? customMessage : DEFAULT_WA_TEMPLATE;
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noreferrer');
};

export const openRequestKendaraanWhatsApp = (lang: 'ID' | 'EN' = 'ID') => {
  const message = lang === 'EN'
    ? `Halo Batam Island Transport, I would like to make a *Vehicle Request (Request Kendaraan)* for our travel in Batam. Please let me know what units are available and the price quotation.`
    : `Halo Batam Island Transport, saya ingin melakukan *Request Kendaraan* untuk kebutuhan perjalanan kami di Batam. Mohon info unit kendaraan yang tersedia dan penawarannya.`;
  openWhatsApp(message);
};
