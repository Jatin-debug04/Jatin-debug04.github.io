import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';
import { experiences, type Experience } from '../data/content';

function categoryIcon(category: string) {
  return category === 'Education' ? GraduationCap : Briefcase;
}

export default function ProjectsSection() {
  return (
    <section
      id="experience"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="relative max-w-6xl mx-auto">
        {experiences.map((experience, i) => (
          <ExperienceCard
            key={experience.number}
            experience={experience}
            index={i}
            totalCards={experiences.length}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  totalCards,
}: {
  experience: Experience;
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const Icon = categoryIcon(experience.category);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 md:p-14 origin-top overflow-hidden"
      >
        {/* Faint oversized number watermark */}
        <span
          className="hero-heading font-black absolute -top-6 sm:-top-10 right-4 sm:right-8 opacity-15 pointer-events-none select-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 260px)' }}
        >
          {experience.number}
        </span>

        {/* Top row */}
        <div className="relative flex flex-wrap items-start justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <Icon className="text-[#D7E2EA]" size={28} strokeWidth={1.5} />
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
              {experience.category}
            </span>
          </div>
          <span className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm px-5 py-2 sm:px-6 sm:py-2.5">
            {experience.period}
          </span>
        </div>

        {/* Name + description */}
        <div className="relative flex flex-col gap-4 sm:gap-6 max-w-3xl">
          <h3
            className="hero-heading font-black uppercase leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            {experience.name}
          </h3>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)', opacity: 0.8 }}
          >
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
