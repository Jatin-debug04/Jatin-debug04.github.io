import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from './FadeIn';

const NAV_LINKS = ['Skills', 'Experience', 'Projects', 'Certificates', 'About', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo mark - only shown on mobile where the full link list is hidden */}
          <a
            href="#"
            className="md:hidden text-[#D7E2EA] font-black uppercase tracking-wider text-lg"
          >
            JN
          </a>

          {/* Desktop / tablet nav */}
          <div className="hidden md:flex justify-between w-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </a>
            ))}
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
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(12, 12, 12, 0.98)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3, ease: 'easeOut' }}
                className="text-[#D7E2EA] font-semibold uppercase tracking-widest text-2xl"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
