import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Flame, Calendar, MessageCircle } from 'lucide-react';
import { modalOverlay, modalContent } from '../../animations/variants';
import { getWhatsAppLink } from '../../data/perfumes';

export default function PerfumeModal({ perfume, onClose }) {
  const [imgError, setImgError] = useState(false);

  if (!perfume) return null;

  const intensity = perfume.intensity || 4;
  const hasNumericPrice = typeof perfume.price === 'number';
  const priceLabel = hasNumericPrice ? `S/ ${perfume.price}` : perfume.price;
  const notes = perfume.notes || {
    top: 'Bergamota, Azafrán',
    heart: 'Oud, Rosa',
    base: 'Sándalo, Ámbar',
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        variants={modalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-3 sm:p-8"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <motion.div
          key="content"
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92dvh] overflow-y-auto overscroll-contain rounded-3xl glass-dark"
          style={{ boxShadow: '0 0 80px rgba(200, 169, 107, 0.15), 0 30px 60px rgba(0,0,0,0.7)' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-3 ml-auto mr-3 -mb-12 z-30 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white hover:text-gold border border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 sm:absolute sm:top-5 sm:right-5 sm:mr-0 sm:mb-0"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-72 md:h-full min-h-[340px] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden bg-black/40">
              {imgError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="text-center">
                    <div className="font-arabic text-6xl text-gold/30 mb-3">عطر</div>
                    <div className="font-sans text-xs text-white/20 tracking-widest">IKER PARFUM DE ROIS</div>
                  </div>
                </div>
              ) : (
                <img
                  src={perfume.imageUrl}
                  alt={perfume.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Price overlay */}
              <div className="absolute bottom-6 left-6">
                <div className="font-display text-4xl font-semibold text-gold-gradient">
                  {priceLabel}
                </div>
                <div className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mt-1">
                  {hasNumericPrice ? 'PEN · Precio Oficial' : 'Precio por WhatsApp'}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col gap-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="divider-gold w-8" />
                  <span className="mobile-label font-sans text-[10px] tracking-[0.4em] uppercase text-gold/60">
                    IKER PARFUM DE ROIS
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-3">
                  {perfume.name}
                </h2>
                <p className="mobile-copy font-body text-base text-white/55 leading-relaxed italic">
                  {perfume.description}
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Clock, label: 'Duración', value: perfume.longevity || '12-16h' },
                  { icon: Flame, label: 'Intensidad', value: `${intensity}/5` },
                  { icon: Calendar, label: 'Ocasión', value: perfume.occasion?.split(',')[0] || 'Noche' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass rounded-xl p-3 text-center">
                    <Icon size={14} className="text-gold/60 mx-auto mb-1.5" />
                    <div className="mobile-label font-sans text-[9px] tracking-[0.2em] uppercase text-white/30 mb-1">
                      {label}
                    </div>
                    <div className="font-body text-base sm:text-sm text-white/80 font-medium">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div className="space-y-3">
                <h3 className="mobile-label font-sans text-[10px] tracking-[0.35em] uppercase text-gold/70">
                  Notas de Fragancia
                </h3>
                {[
                  { label: 'Salida', value: notes.top, delay: 0 },
                  { label: 'Corazón', value: notes.heart, delay: 0.05 },
                  { label: 'Fondo', value: notes.base, delay: 0.1 },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="mobile-label font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">
                        {label} ·{' '}
                      </span>
                      <span className="mobile-copy font-body text-sm text-white/70 italic">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Intensity visual */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="mobile-label font-sans text-[10px] tracking-[0.2em] uppercase text-white/30">
                    Nivel de Intensidad
                  </span>
                  <span className="mobile-label font-sans text-xs text-gold/70">{intensity}/5</span>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        background: i < intensity
                          ? 'linear-gradient(90deg, #C8A96B, #E2C898)'
                          : 'rgba(255,255,255,0.08)',
                        boxShadow: i < intensity ? '0 0 8px rgba(200,169,107,0.4)' : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppLink(perfume.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-label flex items-center justify-center gap-3 py-4 rounded-2xl font-sans text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>

              <p className="mobile-label text-center font-sans text-[10px] tracking-widest uppercase text-white/20">
                Envío Internacional · Garantía de Autenticidad
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
