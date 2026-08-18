import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import Navbar from './Navbar';

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-x-clip md:h-screen">
      <Navbar />

      {/* Heading */}
<<<<<<< Updated upstream
      <div className="overflow-hidden mt-24 sm:mt-24 md:mt-20 lg:mt-16">
=======
      <div className="overflow-hidden mt-10 sm:mt-8 md:-mt-5">
>>>>>>> Stashed changes
        <FadeIn delay={0.15} y={40} as="div">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[14.5vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m jatin
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait
          Mobile/tablet (below md, matches Navbar's hamburger breakpoint): sits in normal
          document flow, centered, right below the heading.
          md+ (matches Navbar's horizontal-link breakpoint): reverts to the original
          absolutely-positioned, bottom-anchored layout. */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="relative mx-auto my-8 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-auto md:bottom-0 md:translate-y-0 z-10 w-[210px] sm:w-[260px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img src={PORTRAIT_URL} alt="Jatin portrait" className="w-full h-auto" loading="eager" />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-5 md:gap-0 pb-10 md:pb-8 lg:pb-10 px-6 md:px-10 mt-10 md:mt-auto relative z-20 text-center md:text-left">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[260px] md:max-w-[220px] lg:max-w-[260px] mx-auto md:mx-0"
            style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.5rem)' }}
          >
            a data analyst driven by turning raw numbers into clear, actionable insights
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/50 text-[#D7E2EA] px-8 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-200 hover:border-[#B600A8] hover:text-white"
            >
              Download Resume
            </a>
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
