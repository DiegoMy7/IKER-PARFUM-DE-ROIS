import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/variants';

export default function PerfumeCard({ perfume, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const intensity = perfume.intensity || 4;
  const priceLabel = typeof perfume.price === 'number' ? `S/ ${perfume.price}` : perfume.price;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onClick(perfume)}
      className="liquid-glass rounded-2xl overflow-hidden cursor-pointer group relative max-w-[520px] w-full mx-auto"
      style={{
        boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
      }}
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(200, 169, 107, 0.4), 0 0 40px rgba(200, 169, 107, 0.12)' }}
      />

      {/* Image */}
      <div className="relative h-[340px] sm:h-72 lg:h-80 overflow-hidden bg-white">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-arabic text-4xl text-gold/30 mb-2">عطر</div>
              <div className="font-sans text-xs text-white/20 tracking-widest uppercase">IKER PARFUM DE ROIS</div>
            </div>
          </div>
        ) : (
          <img
            src={perfume.imageUrl}
            alt={perfume.name}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 liquid-glass px-3 py-1.5 rounded-full">
          <span className="mobile-label font-sans text-xs font-semibold text-gold tracking-wider">
            {priceLabel}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-glow-pulse" />
          <span className="mobile-label font-sans text-[10px] text-white/60 tracking-widest uppercase">
            {perfume.longevity || '12h+'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-2xl sm:text-xl font-semibold text-white/90 mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
          {perfume.name}
        </h3>
        <p className="mobile-copy font-body text-[17px] sm:text-sm text-white/50 leading-relaxed line-clamp-3 sm:line-clamp-2 mb-5 italic">
          {perfume.description}
        </p>

        {/* Intensity */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="mobile-label font-sans text-[10px] tracking-[0.18em] uppercase text-white/30 mr-1">
              Intensidad
            </span>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`intensity-dot ${i < intensity ? 'active' : ''}`}
              />
            ))}
          </div>
          <motion.span
            className="mobile-label font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300"
            whileHover={{ x: 2 }}
          >
            Ver más →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}
