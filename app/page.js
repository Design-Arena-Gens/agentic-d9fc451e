'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { chapters } from '../lib/story';
import { ChapterCard } from '../components/ChapterCard';
import { AmbientChant } from '../components/AmbientChant';
import { FloatingSigils } from '../components/FloatingSigils';
import { WhisperLayer } from '../components/WhisperLayer';
import clsx from 'clsx';

const heroLines = [
  'An abandoned signal house stitched with whispers in the rain.',
  'Every visitor feeds its archive. Every echo returns hungrier.',
  'Tonight, it waits for you.'
];

export default function Page() {
  const [activeChapter, setActiveChapter] = useState(null);

  const timeline = useMemo(
    () =>
      chapters.map((chapter, index) => ({
        id: chapter.id,
        title: chapter.title,
        timecode: `${23 + index}:${String((13 * index) % 60).padStart(2, '0')}`
      })),
    []
  );

  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 sm:px-10">
      <WhisperLayer />
      <FloatingSigils activeId={activeChapter} />
      <AmbientChant />

      <section className="relative z-10 mt-6 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-md">
        <motion.h1
          className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          Echodyne House: A Living Horror Story
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-white/75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Linger inside this coastal research manor abandoned after one night of static. Hover over the chapters to wake the sigils and read. The longer you stay, the closer the house listens.
        </motion.p>
        <div className="grid gap-4 sm:grid-cols-3">
          {heroLines.map((line, index) => (
            <motion.p
              key={line}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm uppercase tracking-[0.25em] text-white/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index + 0.4 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="relative grid gap-10 lg:grid-cols-[1fr,320px]">
        <div className="z-10 flex flex-col gap-8">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              index={index}
              isActive={activeChapter === chapter.id}
              onHover={setActiveChapter}
            />
          ))}
        </div>
        <aside className="sticky top-28 z-20 hidden h-fit lg:block">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
            <h3 className="font-display text-xl text-white">Transmission Log</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {timeline.map((entry) => (
                <li key={entry.id} className="flex items-center justify-between gap-4">
                  <span
                    className={clsx('uppercase tracking-[0.3em]', {
                      'text-ectoplasm glow-text': activeChapter === entry.id,
                      'text-white/40': activeChapter !== entry.id
                    })}
                  >
                    {entry.title}
                  </span>
                  <span className="text-xs text-white/40">{entry.timecode}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-white/5 bg-black/40 p-4 text-xs leading-6 text-white/50">
              <p>Audio tape 07-Δ just activated. Signal strength increasing.</p>
              <p className="mt-2 italic text-white/60">
                "If you hear this, do not speak your name aloud. It answers to lack."
              </p>
            </div>
          </div>
        </aside>
      </section>

      <footer className="relative z-10 mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-sm text-white/60">
        <p>
          You exit—or think you do. The bridge never ends, the storm never begins. Somewhere inside Echodyne House, another visitor starts reading.
        </p>
      </footer>
    </main>
  );
}
