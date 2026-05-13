import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../data/perfumes';

export default function Hero() {
  const ref = useRef(null);

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaria conocer la coleccion de IKER PARFUM DE ROIS.')}`;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-0 md:min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:py-36"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1547887538-047d4d1b0e7b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/65" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="orb w-80 h-80 top-1/4 left-1/4 bg-gold/[0.045]" />
        <div className="orb w-72 h-72 bottom-1/4 right-1/4 bg-emerald/[0.055]" />
      </div>

      <motion.div
        className="relative z-10 text-center w-full max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-7 sm:mb-8"
        >
          <div className="divider-gold w-12 sm:w-16" />
          <span className="mobile-label font-sans text-gold/80 text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.35em] uppercase">
            Arabes · Disenador · Fragancias selectas
          </span>
          <div className="divider-gold w-12 sm:w-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-9xl font-semibold leading-[0.95] mb-6"
        >
          <span className="block text-white/95">For those who</span>
          <span className="block text-gold-shimmer italic">Want to be</span>
          <span className="block text-white/95">Remembered</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mobile-copy font-body text-base sm:text-xl text-white/50 max-w-2xl mx-auto mb-9 sm:mb-12 leading-relaxed italic"
        >
          Perfumes arabes, de disenador y fragancias para cada estilo,
          elegidos para dejar presencia desde la primera impresion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={scrollToCatalog}
            className="btn-gold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full w-full max-w-xs sm:w-auto sm:min-w-[220px]"
          >
            Explorar Coleccion
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass px-8 sm:px-10 py-3.5 sm:py-4 rounded-full w-full max-w-xs sm:w-auto sm:min-w-[220px] text-center"
          >
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-center sm:gap-12"
        >
          {[
            { value: '23+', label: 'Fragancias' },
            { value: '3', label: 'Familias' },
            { value: '20h', label: 'Duracion' },
          ].map((stat) => (
            <div key={stat.label} className="text-center min-w-0">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-gold-gradient">
                {stat.value}
              </div>
              <div className="mobile-label font-sans text-[9px] sm:text-xs tracking-[0.18em] sm:tracking-[0.3em] uppercase text-white/40 mt-1 break-words">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hero-scroll-indicator absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToCatalog}
      >
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/30">
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
