import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../../data/perfumes';

export default function WhatsAppFloat() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría conocer más sobre IKER PARFUM DE ROIS y su colección de perfumes.')}`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.45, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 sm:bottom-8 sm:right-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      aria-label="Contactar por WhatsApp"
    >
      {/* WhatsApp icon SVG */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.21 6.348L4.5 28l6.87-1.692A12.913 12.913 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.1 0-4.065-.616-5.72-1.678l-.41-.243-4.08 1.004 1.05-3.965-.27-.428A9.935 9.935 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.387-7.234c-.295-.147-1.745-.861-2.016-.96-.27-.098-.466-.147-.663.147-.196.294-.76.96-.932 1.156-.172.196-.344.22-.639.073-.294-.147-1.244-.459-2.37-1.463-.875-.78-1.467-1.744-1.638-2.039-.172-.294-.018-.453.129-.6.132-.13.295-.344.442-.515.148-.172.197-.294.295-.49.099-.197.05-.368-.024-.515-.074-.147-.663-1.597-.908-2.187-.24-.574-.483-.496-.663-.505l-.565-.01c-.197 0-.515.074-.786.369-.27.294-1.03 1.008-1.03 2.458 0 1.45 1.055 2.852 1.202 3.049.147.196 2.076 3.172 5.03 4.449.703.304 1.251.485 1.678.62.705.224 1.348.192 1.856.116.566-.084 1.745-.713 1.99-1.402.244-.688.244-1.279.171-1.402-.073-.122-.27-.196-.565-.343z"/>
      </svg>

      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ border: '2px solid rgba(37,211,102,0.6)' }}
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.8, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.a>
  );
}
