import { motion } from 'framer-motion';
import { Clock, Instagram, MessageCircle, Music2, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_NUMBER } from '../../data/perfumes';
import BrandMark from '../layout/BrandMark';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@777.iker_bt?_r=1&_t=ZS-96KwDp50OV3', icon: Music2 },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría conocer más sobre IKER PARFUM DE ROIS.')}`,
    icon: MessageCircle,
  },
];

const FOOTER_CATEGORIES = [
  ['arabes', 'Árabes'],
  ['disenador', 'Diseñador'],
  ['nicho', 'Nicho'],
];

export default function Footer() {
  const whatsappLink = SOCIAL_LINKS[2].href;

  const scrollToCatalog = (category) => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('iker:set-category', { detail: category }));
  };

  return (
    <>
      <section id="contact" className="relative overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
        <div className="absolute inset-0">
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.2), transparent)' }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 font-display text-3xl text-gold/20">◆</div>
            <h2 className="mb-4 font-display text-4xl font-semibold text-white sm:text-5xl">
              Listo para tu <span className="text-gold-gradient italic">fragancia</span>?
            </h2>
            <p className="mobile-copy mx-auto mb-7 max-w-2xl font-body text-base italic leading-relaxed text-white/45 sm:text-lg">
              Contáctanos por WhatsApp para asesoría personalizada, disponibilidad y recomendaciones según tu estilo.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full px-8 py-4 text-sm sm:w-auto sm:max-w-none sm:px-12"
              >
                <MessageCircle size={18} />
                Contactar por WhatsApp
              </a>
              <div className="mobile-label inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-[0.08em] text-white/45 sm:text-xs">
                <Phone size={16} className="text-gold/70" />
              <span>Número directo: {WHATSAPP_DISPLAY_NUMBER}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.8fr_0.9fr_0.9fr]">
            <div className="space-y-5">
              <BrandMark size="sm" />
              <p className="mobile-copy max-w-sm font-body text-sm italic leading-relaxed text-white/45">
                Perfumes árabes, de diseñador y nicho seleccionados para encontrar una firma personal con presencia, elegancia y buena duración.
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-gold/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mobile-label mb-4 font-sans text-[10px] uppercase tracking-[0.28em] text-gold/70">
                Colección
              </h3>
              <div className="flex flex-col items-start gap-3">
                {FOOTER_CATEGORIES.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollToCatalog(id)}
                    className="mobile-label font-sans text-xs uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-gold"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mobile-label mb-4 font-sans text-[10px] uppercase tracking-[0.28em] text-gold/70">
                Atencion
              </h3>
              <div className="mobile-copy space-y-3 font-body text-sm text-white/45">
                <div className="flex items-center gap-3">
                  <MessageCircle size={15} className="text-gold/65" />
                  <span>Consultas por WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-gold/65" />
                  <span>Respuesta durante el día</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={15} className="text-gold/65" />
                  <span>Compra coordinada directo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-gold/65" />
                  <span>{WHATSAPP_DISPLAY_NUMBER}</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2 text-gold/75">
                <Sparkles size={16} />
                <span className="mobile-label font-sans text-[10px] uppercase tracking-[0.24em]">
                  Recomendacion
                </span>
              </div>
              <p className="mobile-copy font-body text-sm italic leading-relaxed text-white/50">
                Si no sabes cuál elegir, escribe tu estilo, presupuesto y ocasión. Te guiamos hacia una opción árabe, diseñador o nicho.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-label mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/35 px-4 py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <MessageCircle size={15} />
                Escribir ahora
              </a>
            </div>
          </div>

          <div className="mobile-label mt-9 flex flex-col gap-3 border-t border-white/5 pt-6 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <span>© {new Date().getFullYear()} IKER PARFUM DE ROIS</span>
            <span>Fragancias para cada estilo</span>
          </div>
        </div>
      </footer>
    </>
  );
}
