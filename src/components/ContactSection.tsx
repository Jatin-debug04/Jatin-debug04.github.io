import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

const CONTACT = {
  email: 'jatinnama0401@gmail.com',
  phone: '+91 8209829046',
  phoneHref: '+918209829046',
  linkedin: 'https://www.linkedin.com/in/jatin-nama-a99949235',
  location: 'Jaipur, Rajasthan',
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-10 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#0C0C0C]/60 text-center font-light max-w-xl mx-auto mb-14 sm:mb-16 md:mb-20 text-sm sm:text-base md:text-lg">
          Got a project in mind, or just want to talk data? Reach out below --
          i'd love to hear from you.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <a
          href={`mailto:${CONTACT.email}`}
          className="block text-center font-black uppercase break-all text-[#0C0C0C] hover:opacity-70 transition-opacity duration-200 mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(1.4rem, 6vw, 4.5rem)' }}
        >
          {CONTACT.email}
        </a>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="flex items-center gap-3 rounded-full border-2 border-[#0C0C0C]/15 px-6 py-3 sm:px-8 sm:py-4 text-[#0C0C0C] uppercase tracking-wide text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#0C0C0C]/5"
          >
            <Phone size={18} strokeWidth={1.5} />
            {CONTACT.phone}
          </a>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border-2 border-[#0C0C0C]/15 px-6 py-3 sm:px-8 sm:py-4 text-[#0C0C0C] uppercase tracking-wide text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#0C0C0C]/5"
          >
            <Linkedin size={18} strokeWidth={1.5} />
            LinkedIn
          </a>

          <div className="flex items-center gap-3 rounded-full border-2 border-[#0C0C0C]/15 px-6 py-3 sm:px-8 sm:py-4 text-[#0C0C0C] uppercase tracking-wide text-xs sm:text-sm font-medium">
            <MapPin size={18} strokeWidth={1.5} />
            {CONTACT.location}
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 rounded-full border-2 border-[#0C0C0C]/15 px-6 py-3 sm:px-8 sm:py-4 text-[#0C0C0C] uppercase tracking-wide text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#0C0C0C]/5"
          >
            <Mail size={18} strokeWidth={1.5} />
            Email
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
