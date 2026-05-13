export default function BrandMark({ size = 'md', centered = false }) {
  const sizes = {
    sm: {
      logo: 'w-10 h-10',
      name: 'text-xl',
      sub: 'text-[7px] tracking-[0.22em]',
      gap: 'gap-2.5',
    },
    md: {
      logo: 'w-14 h-14',
      name: 'text-3xl',
      sub: 'text-[9px] tracking-[0.32em]',
      gap: 'gap-3',
    },
    lg: {
      logo: 'w-24 h-24',
      name: 'text-5xl sm:text-6xl',
      sub: 'text-[10px] tracking-[0.36em]',
      gap: 'gap-4',
    },
  };

  const config = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center ${config.gap} ${centered ? 'justify-center' : ''}`}>
      <img
        src="/iker-parfum-logo.png"
        alt="IKER PARFUM DE ROIS"
        className={`${config.logo} rounded-full object-cover border border-gold/25 shadow-[0_0_26px_rgba(200,169,107,0.22)]`}
      />
      <div className="text-left">
        <div className={`font-display ${config.name} font-semibold tracking-[0.1em] text-gold-gradient leading-none`}>
          IKER
        </div>
        <div className={`font-sans ${config.sub} text-gold/55 uppercase leading-none mt-1`}>
          PARFUM DE ROIS
        </div>
      </div>
    </div>
  );
}
