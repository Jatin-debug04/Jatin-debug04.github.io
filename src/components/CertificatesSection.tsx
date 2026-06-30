import { Award, Clock } from 'lucide-react';
import FadeIn from './FadeIn';
import { certificates } from '../data/content';

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#0C0C0C]/60 text-center max-w-xl mx-auto mb-14 sm:mb-16 md:mb-20 text-sm sm:text-base">
          Click any certificate to view the full version.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 0.06} y={30}>
            {cert.comingSoon ? (
              <div className="block rounded-[24px] overflow-hidden border-2 border-dashed border-[#0C0C0C]/15">
                <div className="aspect-[4/3] flex flex-col items-center justify-center gap-2 bg-[#0C0C0C]/[0.03] text-[#0C0C0C]/30">
                  <Clock size={32} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-widest">Coming Soon</span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[#0C0C0C]/50 font-medium text-sm sm:text-base">
                    {cert.title}
                  </p>
                  <p className="text-[#0C0C0C]/30 text-xs sm:text-sm mt-1">
                    To be added
                  </p>
                </div>
              </div>
            ) : (
              <a
                href={cert.fileHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[24px] overflow-hidden border-2 border-[#0C0C0C]/10 hover:border-[#0C0C0C]/40 transition-colors duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#0C0C0C]/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[#0C0C0C] font-medium text-sm sm:text-base">
                    {cert.title}
                  </p>
                  <p className="text-[#0C0C0C]/50 text-xs sm:text-sm mt-1">
                    {cert.issuer} -- {cert.year}
                  </p>
                </div>
              </a>
            )}
          </FadeIn>
        ))}
      </div>

      {certificates.length === 0 && (
        <FadeIn delay={0.2} y={20}>
          <div className="max-w-xl mx-auto rounded-[24px] border-2 border-dashed border-[#0C0C0C]/20 p-8 sm:p-10 text-center">
            <Award className="mx-auto mb-4 text-[#0C0C0C]/30" size={36} strokeWidth={1.5} />
            <p className="text-[#0C0C0C]/50 text-sm">
              Certificate images go here. Drop image files into{' '}
              <code className="text-[#0C0C0C]/70">public/certificates/</code>{' '}
              and add an entry for each one in{' '}
              <code className="text-[#0C0C0C]/70">src/data/content.ts</code>.
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
