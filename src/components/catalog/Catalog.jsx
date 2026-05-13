import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';
import { usePerfumes } from '../../hooks/usePerfumes';
import PerfumeCard from './PerfumeCard';
import PerfumeModal from './PerfumeModal';

const CATEGORIES = [
  {
    id: 'all',
    label: 'Todos',
    description: 'La selección completa disponible ahora.',
  },
  {
    id: 'arabes',
    label: 'Árabes',
    description: 'Perfumes intensos, especiados, dulces y de gran duración.',
  },
  {
    id: 'disenador',
    label: 'Diseñador',
    description: 'Fragancias reconocidas, versátiles y fáciles de usar diario.',
  },
  {
    id: 'nicho',
    label: 'Nicho',
    description: 'Perfiles menos comunes, con carácter y firma propia.',
  },
];

export default function Catalog() {
  const { perfumes, loading } = usePerfumes();
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryCounts = useMemo(() => {
    return perfumes.reduce((acc, perfume) => {
      const categories = perfume.categories || [perfume.category || 'arabes'];
      categories.forEach((category) => {
        acc[category] = (acc[category] || 0) + 1;
      });
      acc.all += 1;
      return acc;
    }, { all: 0 });
  }, [perfumes]);

  const filteredPerfumes = useMemo(() => {
    if (activeCategory === 'all') return perfumes;
    return perfumes.filter((perfume) => {
      const categories = perfume.categories || [perfume.category || 'arabes'];
      return categories.includes(activeCategory);
    });
  }, [activeCategory, perfumes]);

  useEffect(() => {
    const handler = (event) => {
      if (CATEGORIES.some((category) => category.id === event.detail)) {
        setActiveCategory(event.detail);
      }
    };

    window.addEventListener('iker:set-category', handler);
    return () => window.removeEventListener('iker:set-category', handler);
  }, []);

  const activeDescription = CATEGORIES.find((category) => category.id === activeCategory)?.description;
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="catalog" className="relative pt-10 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(200,169,107,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="divider-gold w-12 sm:w-20" />
            <span className="mobile-label font-sans text-gold/60 text-[10px] sm:text-xs tracking-[0.35em] uppercase">
              Colección por familias
            </span>
            <div className="divider-gold w-12 sm:w-20" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-white mb-5 leading-tight">
            Nuestra <span className="text-gold-gradient italic">Colección</span>
          </h2>
          <p className="mobile-copy font-body text-base sm:text-lg text-white/40 max-w-2xl mx-auto italic leading-relaxed">
            Fragancias árabes, de diseñador y nicho para elegir por ocasión,
            personalidad y presencia.
          </p>
        </motion.div>

        <div className="mb-8 sm:mb-12">
          <div className="category-scroll liquid-glass mx-auto flex w-fit max-w-[calc(100vw-2rem)] gap-2 overflow-x-auto rounded-full p-1.5 sm:max-w-fit sm:justify-center sm:flex-wrap">
            {CATEGORIES.map((category) => {
              const count = categoryCounts[category.id] || 0;
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onPointerDown={(event) => {
                    event.preventDefault();
                    handleCategorySelect(category.id);
                  }}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`mobile-category-tab flex-shrink-0 rounded-full border px-4 sm:px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                    active
                      ? 'border-gold/80 bg-gold/90 text-black shadow-[0_0_24px_rgba(200,169,107,0.2)]'
                      : 'border-transparent bg-white/[0.025] text-white/45 hover:bg-white/[0.06] hover:text-gold'
                  }`}
                >
                  {category.label}
                  <span className={`category-count ${active ? 'ml-2 text-black/60' : 'ml-2 text-gold/45'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mobile-copy mt-3 text-center font-body text-sm sm:text-base italic text-white/35">
            {activeDescription}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="glass rounded-2xl h-80 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        ) : filteredPerfumes.length > 0 ? (
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="perfume-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6"
          >
            {filteredPerfumes.map((p) => (
              <PerfumeCard
                key={p.id}
                perfume={p}
                onClick={setSelected}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl px-6 py-12 text-center max-w-xl mx-auto"
          >
            <div className="font-display text-3xl text-gold-gradient mb-3">
              Próximamente
            </div>
            <p className="mobile-copy font-body text-white/45 italic leading-relaxed">
              Esta familia ya está preparada en la web. Cuando agregues productos de esta categoría,
              aparecerán aquí automáticamente.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="mobile-label font-sans text-[10px] tracking-[0.35em] uppercase text-white/20 mt-5">
            Selección curada · Consultas por WhatsApp
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <PerfumeModal
            key={selected.id}
            perfume={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
