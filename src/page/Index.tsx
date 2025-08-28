import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import InfiniteSlider from "@/components/InfiniteSlider";
import ObjectiveSection from "@/components/ObjectiveSection";
import SloganSection from "@/components/SloganSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RulesContainer from "@/components/Rules";
import AgreementContainer from "@/components/Agreement";
import NoticesPage from "@/components/Notice";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Navigation />
      <main>
        <HeroSlider />
        <InfiniteSlider />
        <ObjectiveSection />
        <SloganSection />
       
        <RulesContainer/>
        
          {/* <NoticesPage/> */}
        
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
