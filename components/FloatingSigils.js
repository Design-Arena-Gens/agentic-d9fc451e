'use client';

import { motion } from 'framer-motion';

const sigils = [
  {
    glyph: '⟟',
    size: 48,
    initial: { x: '12%', y: '16%' },
    match: 'arrival'
  },
  {
    glyph: '⟁',
    size: 64,
    initial: { x: '68%', y: '12%' },
    match: 'threshold'
  },
  {
    glyph: '⌬',
    size: 40,
    initial: { x: '28%', y: '78%' },
    match: 'spiral'
  },
  {
    glyph: '⌘',
    size: 56,
    initial: { x: '82%', y: '62%' },
    match: 'rift'
  }
];

export function FloatingSigils({ activeId }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {sigils.map((sigil, index) => (
        <motion.span
          key={sigil.glyph + index}
          className="absolute font-display text-white/10"
          style={{
            left: sigil.initial.x,
            top: sigil.initial.y,
            fontSize: sigil.size
          }}
          animate={{
            opacity: activeId === sigil.match ? 0.5 : 0.15,
            scale: activeId === sigil.match ? 1.35 : 1,
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 18 + index * 4,
            repeat: Infinity,
            repeatType: 'mirror'
          }}
        >
          {sigil.glyph}
        </motion.span>
      ))}
    </div>
  );
}
