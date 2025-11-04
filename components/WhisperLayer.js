'use client';

import { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const whispers = [
  'turn the handle slowly',
  'breath tastes like copper',
  'the photograph blinked first',
  'you left nothing behind',
  'memory loops',
  'some doors prefer to open inward'
];

export function WhisperLayer() {
  const controls = useAnimationControls();
  const containerRef = useRef(null);

  const items = useMemo(
    () =>
      Array.from({ length: 18 }, (_, idx) => ({
        id: `${idx}-${Math.random().toString(36).slice(2, 7)}`,
        phrase: whispers[idx % whispers.length]
      })),
    []
  );

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 0.18, 0],
      x: ['-2%', '2%', '-1%'],
      y: ['0%', '-4%', '2%'],
      transition: {
        duration: 16 + Math.random() * 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 1.3
      }
    }));
  }, [controls]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {items.map((item, index) => (
        <motion.span
          key={item.id}
          custom={index}
          animate={controls}
          className="absolute text-[10px] uppercase tracking-[0.5em] text-white/20"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 13) % 100}%`
          }}
        >
          {item.phrase}
        </motion.span>
      ))}
    </div>
  );
}
