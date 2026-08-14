import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, FileDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from './FadeIn';

const NAV_LINKS = ['Skills', 'Experience', 'Projects', 'Certificates', 'About', 'Contact'];
const GITHUB_URL = 'https://github.com/jatin-debug04';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jatin-nama-a99949235';
const RESUME_URL = '/resume.pdf';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Blur/darken the nav background once the hero has scrolled past.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently centered in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FadeIn delay={0} y={-20} as="nav" className="fixed top-0 inset-x-0 z-30">
        <div
          className={`flex items-center justify-between gap-4 px-6 md:px-10 py-4 md:py-5 transition-all duration-300 ${
            scrolled
              ? 'bg-[#0C0C0C]/80 backdrop-blur-md border-b border-[#D7E2EA]/10'
              : 'bg-transparent border-b border-transparent'
          }`}
        >
          {/* Logo mark - only shown on mobile where the full link list is hidden */}
          <a
            href="#"
            className="md:hidden text-[#D7E2EA] font-black uppercase tracking-wider text-lg"
          >
            JN
          </a>

          {/* Desktop / tablet nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9 flex-1 min-w-0">
            {NAV_LINKS.map((link) => {
              const id = link.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={`group relative pb-1 font-medium uppercase tracking-wider text-sm lg:text-base transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-[#D7E2EA] hover:text-white'
                  }`}
                >
                  {link}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    style={{
                      background:
                        'linear-gradient(90deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)',
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop right-hand cluster: socials + resume */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 shrink-0">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#D7E2EA] transition-colors duration-200 hover:text-white"
            >
              <Github size={20} strokeWidth={1.75} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#D7E2EA] transition-colors duration-200 hover:text-white"
            >
              <Linkedin size={20} strokeWidth={1.75} />
            </a>
            <a
              href={RESUME_URL}
              download
              className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors duration-200 hover:border-[#B600A8] hover:text-white"
            >
              <FileDown size={15} strokeWidth={2} />
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden text-[#D7E2EA] p-2 -mr-2"
          >
            {open ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
          </button>
        </div>
      </FadeIn>

      {/* Mobile full-screen menu overlay (kept outside the FadeIn wrapper so its
          fixed positioning stays relative to the viewport, not an animated ancestor) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-7"
            style={{ background: 'rgba(12, 12, 12, 0.98)' }}
          >
            {NAV_LINKS.map((link, i) => {
              const id = link.toLowerCase();
              const isActive = active === id;
              return (
                <motion.a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: 'easeOut' }}
                  className={`font-semibold uppercase tracking-widest text-2xl transition-colors duration-200 ${
                    isActive ? 'text-transparent bg-clip-text' : 'text-[#D7E2EA]'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundImage:
                            'linear-gradient(90deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)',
                        }
                      : undefined
                  }
                >
                  {link}
                </motion.a>
              );
            })}

            <motion.a
              href={RESUME_URL}
              download
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * NAV_LINKS.length, duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] px-6 py-3 text-sm uppercase tracking-widest font-medium mt-2"
            >
              <FileDown size={16} strokeWidth={2} />
              Resume
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * (NAV_LINKS.length + 1), duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-6 mt-1"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                onClick={() => setOpen(false)}
                className="text-[#D7E2EA]"
              >
                <Github size={22} strokeWidth={1.75} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                onClick={() => setOpen(false)}
                className="text-[#D7E2EA]"
              >
                <Linkedin size={22} strokeWidth={1.75} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
