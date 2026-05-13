import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from '../layout/BrandMark';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
        >
          {/* Ambient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-96 h-96 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(200,169,107,0.08) 0%, transparent 70%)' }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          </div>

          <div className="relative text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrandMark size="lg" centered />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-10 mx-auto h-px w-32 bg-white/10 overflow-hidden rounded-full"
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #C8A96B, #E2C898)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20 mt-4"
            >
              The Art of Arabic Fragrance
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
