'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'they never left',
  'the walls remember',
  'step again',
  'mirror, mirror',
  'we traded voices',
  'return interval reached',
  'breath borrowed',
  'spooled backwards',
  'do you hear it?'
];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function AmbientChant() {
  const sequence = useMemo(() => shuffle(phrases), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sequence.length);
    }, 4500 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [sequence.length]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-10 flex justify-center text-xs uppercase tracking-[0.6em] text-white/30">
      <AnimatePresence mode="wait">
        <motion.span
          key={sequence[index]}
          className="backdrop-blur-md bg-white/[0.02] px-6 py-3 rounded-full border border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8 }}
        >
          {sequence[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
