import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import EducationSection from "@/components/sections/education";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";




export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

