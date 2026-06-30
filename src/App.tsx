import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import DataProjectsSection from './components/DataProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProjectsSection />
      <DataProjectsSection />
      <CertificatesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
