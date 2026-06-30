import { ExternalLink, Download } from 'lucide-react';
import FadeIn from './FadeIn';
import { dataProjects } from '../data/content';

export default function DataProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/60 text-center max-w-xl mx-auto mb-16 sm:mb-20 text-sm sm:text-base">
          Real, working projects built to practice the tools this field runs
          on -- click any one to open it directly.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
        {dataProjects.map((project, i) => (
          <FadeIn key={project.number} delay={i * 0.1} y={30}>
            <div className="relative rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 p-6 sm:p-8 md:p-10 overflow-hidden hover:border-[#D7E2EA] transition-colors duration-300">
              <span
                className="hero-heading font-black absolute -top-4 sm:-top-6 right-4 sm:right-6 opacity-15 pointer-events-none select-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 140px)' }}
              >
                {project.number}
              </span>

              <div className="relative flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA]/70 text-xs uppercase tracking-widest px-3 py-1">
                    {project.tech}
                  </span>
                </div>

                <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-3xl text-sm sm:text-base">
                  {project.description}
                </p>

                <ul className="flex flex-col gap-1.5 text-[#D7E2EA]/60 text-sm sm:text-base">
                  {project.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="text-[#D7E2EA]/40">--</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={project.demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D7E2EA] text-[#0C0C0C] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest hover:opacity-85 transition-opacity duration-200"
                  >
                    <ExternalLink size={15} strokeWidth={2} />
                    {project.demoLabel}
                  </a>
                  <a
                    href={project.downloadHref}
                    download
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200"
                  >
                    <Download size={15} strokeWidth={2} />
                    {project.downloadLabel}
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
