import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { marqueeRow1, marqueeRow2 } from '../data/content';

function tripled(items: string[]) {
  return [...items, ...items, ...items];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const computed = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(computed);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Items = tripled(marqueeRow1);
  const row2Items = tripled(marqueeRow2);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-x-clip"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1 - moves right */}
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Items.map((label, i) => (
            <CertBadge key={`r1-${i}`} label={label} />
          ))}
        </div>

        {/* Row 2 - moves left */}
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Items.map((label, i) => (
            <CertBadge key={`r2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0 rounded-full border-2 border-[#D7E2EA]/30 px-6 py-4 sm:px-8 sm:py-5">
      <Award className="text-[#D7E2EA]" size={20} strokeWidth={1.5} />
      <span className="text-[#D7E2EA] uppercase tracking-wide text-xs sm:text-sm font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
