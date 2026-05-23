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
      className="liquid-glass relative mx-auto w-full max-w-[520px] cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl group"
      style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-2xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(200, 169, 107, 0.4), 0 0 40px rgba(200, 169, 107, 0.12)' }}
      />

      <div className="relative h-[205px] overflow-hidden bg-white sm:h-72 lg:h-80">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold/20 border-t-gold" />
          </div>
        )}

        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 font-arabic text-4xl text-gold/30">عطر</div>
              <div className="font-sans text-xs uppercase tracking-widest text-white/20">
                IKER PARFUM DE ROIS
              </div>
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
            className={`h-full w-full object-contain object-center transition-all duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="liquid-glass absolute right-2 top-2 rounded-full px-2 py-1 sm:right-4 sm:top-4 sm:px-3 sm:py-1.5">
          <span className="card-label font-sans text-[9px] font-semibold tracking-wider text-gold sm:text-xs">
            {priceLabel}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 sm:bottom-4 sm:left-4">
          <div className="h-1.5 w-1.5 flex-shrink-0 animate-glow-pulse rounded-full bg-gold" />
          <span className="card-label font-sans text-[8px] uppercase tracking-widest text-white/60 sm:text-[10px]">
            {perfume.longevity || '12h+'}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-5">
        <h3 className="mb-1.5 line-clamp-2 font-display text-lg font-semibold leading-tight text-white/90 transition-colors duration-300 group-hover:text-gold sm:mb-2 sm:text-xl">
          {perfume.name}
        </h3>
        <p className="card-copy mb-3 line-clamp-2 font-body text-sm italic leading-relaxed text-white/50 sm:mb-5">
          {perfume.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1 sm:gap-1.5">
            <span className="card-label mr-1 hidden font-sans text-[8px] uppercase tracking-[0.12em] text-white/30 min-[380px]:inline sm:text-[10px] sm:tracking-[0.18em]">
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
            className="card-label whitespace-nowrap font-sans text-[8px] uppercase tracking-[0.12em] text-gold/60 transition-colors duration-300 group-hover:text-gold sm:text-[10px] sm:tracking-[0.2em]"
            whileHover={{ x: 2 }}
          >
            Ver más →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}
