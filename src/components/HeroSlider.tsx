import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/slider2.jpeg";
import hero2 from "@/assets/slider2.jpeg";
import hero3 from "@/assets/slider31.jpeg";

const slides = [
  {
    image: hero1,
    title: "Leading Innovation",
    subtitle: "Building Tomorrow's Solutions Today",
    description: "Sagantan is committed to delivering excellence and driving innovation in every aspect of our work."
  },
  {
    image: hero2,
    title: "Team Excellence",
    subtitle: "Collaboration That Creates Success",
    description: "Our dedicated team works together to achieve extraordinary results and exceed expectations."
  },
  {
    image: hero3,
    title: "Digital Transformation",
    subtitle: "Technology That Empowers Progress",
    description: "Embracing cutting-edge technology to create sustainable solutions for the future."
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Removed upper background color overlay above image */}
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-7xl font-bold text-sagantan-white mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-sagantan-white/90 mb-8 animate-fade-in-delay">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-sagantan-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
                <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
                  Get Started
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sagantan-white hover:bg-sagantan-white/20 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sagantan-white hover:bg-sagantan-white/20 z-20"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-sagantan-white" : "bg-sagantan-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;