'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: [0.42, 0, 0.27, 1.55]
    }
  })
};

export function ChapterCard({ chapter, index, isActive, onHover }) {
  return (
    <motion.article
      onHoverStart={() => onHover?.(chapter.id)}
      onHoverEnd={() => onHover?.(null)}
      className={`relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_40px_120px_-60px_rgba(143,248,255,0.9)] transition-colors duration-700 ${
        isActive ? 'border-ectoplasm/60 bg-abyss-700/20 backdrop-blur-lg' : ''
      }`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
      custom={index}
    >
      <div className="flex items-center gap-3 uppercase tracking-[0.35em] text-xs text-white/50">
        <span className="h-px flex-1 bg-gradient-to-r from-white/5 via-white/80 to-white/5" aria-hidden />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl glow-text text-white">{chapter.title}</h2>
      <p className="text-sm text-white/60 uppercase tracking-[0.25em]">{chapter.excerpt}</p>
      <div className="mt-4 space-y-4 text-base leading-7 text-white/90">
        {chapter.body.map((paragraph, idx) => (
          <p key={idx} className="relative">
            <span className="relative z-10">{paragraph}</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 top-4 -z-10 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 blur-2xl"
            />
          </p>
        ))}
      </div>
    </motion.article>
  );
}
