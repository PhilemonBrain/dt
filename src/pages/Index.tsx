import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionSection from '@/components/MissionSection';
import SubsidiariesSection from '@/components/SubsidiariesSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <SubsidiariesSection />
        <SolutionsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
