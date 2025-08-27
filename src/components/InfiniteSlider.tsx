import slide1 from "@/assets/sld1.jpg";
import slide2 from "@/assets/sld2.jpeg";
import slide3 from "@/assets/sld3.webp";
import slide4 from "@/assets/sld4.webp";
import slide5 from "@/assets/sld5.jpeg";
import slide6 from "@/assets/sld6.jpg";
import slide7 from "@/assets/sld7.jpeg";
import slide8 from "@/assets/sld8.jpeg";
import slide9 from "@/assets/sld9.jpeg";

const slides = [
  { id: 1, image: slide1, title: "Gautam Buddha" },
  { id: 2, image: slide2, title: "Kabir Das" },
  { id: 3, image: slide3, title: "Jyotirao Phule" },
  { id: 4, image: slide4, title: "Savitribai Phule" },
  { id: 5, image: slide5, title: "EV Ramasamy Periyar" },
  { id: 6, image: slide6, title: "Narayana Guru" },
  { id: 7, image: slide7, title: "Chhatrapati Shahu Ji Mahara" },
  { id: 8, image: slide8, title: "Dr. Bhimrao Ambedkar" },
  { id: 9, image: slide9, title: "Kashiram ji" },
];

const InfiniteSlider = () => {
  return (
    <section className="py-16 bg-sagantan-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sagantan-text mb-4">
            Our Ideals
          </h2>
          <p className="text-lg text-sagantan-text-light max-w-2xl mx-auto">
            Our ideals are those great men who gave a new direction to society, raising their voices against casteism and injustice to promote equality and humanity.
          </p>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-slide">
          {/* First set of slides */}
          {slides.map((slide) => (
            <div
              key={`first-${slide.id}`}
              className="w-72 md:w-80 mx-4 relative group flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sagantan-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-semibold text-sagantan-white mb-2">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated set of slides */}
          {slides.map((slide) => (
            <div
              key={`second-${slide.id}`}
              className="w-72 md:w-80 mx-4 relative group flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sagantan-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-semibold text-sagantan-white mb-2">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
