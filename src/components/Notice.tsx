import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Notice {
  title: string;
  date: string;
  category?: string;
}

const notices: Notice[] = [
  { title: "सत्र 2024-25 सम सेमेस्टर पेपर कोड की उत्तर कुंजियों पर आपत्तियों के संबंध में।", date: "03-Jun-2025", category: "Examination" },
  { title: "परीक्षा कार्यक्रम में संशोधन के संबंध में।", date: "29-May-2025", category: "Examination" },
  { title: "2024-25 की सम सेमेस्टर की संपन्न हो चुकी परीक्षाओं की उत्तर कुंजियों पर आपत्तियों के संबंध में।", date: "28-May-2025", category: "Examination" },
  { title: "शैक्षिक सत्र 2025-26 हेतु विश्वविद्यालय परिसर एवं संबद्ध राजकीय/निजी स्वायत्तशासी महाविद्यालय के लिए प्रवेश नियमावली के संबंध में।", date: "28-May-2025", category: "Admission" },
  { title: "उच्च शिक्षा के क्षेत्र में शैक्षिक सत्र 2025-26 के लिए नए महाविद्यालयों/संस्थाओं की खोज जाने के संबंध में।", date: "28-May-2025", category: "Academic" },
  { title: "विश्वविद्यालय के नए पाठ्यक्रमों के लिए आवेदन आमंत्रित।", date: "15-May-2025", category: "Academic" },
  { title: "शोध कार्य हेतु छात्रवृत्ति आवेदन की अंतिम तिथि।", date: "10-May-2025", category: "Research" },
  { title: "वार्षिक खेलकूद प्रतियोगिता का आयोजन।", date: "05-May-2025", category: "Sports" },
  { title: "विश्वविद्यालय के वार्षिक सांस्कृतिक उत्सव की घोषणा।", date: "01-May-2025", category: "Cultural" },
  { title: "पुस्तकालय में नई पुस्तकों की उपलब्धता।", date: "25-Apr-2025", category: "Library" },
  { title: "विश्वविद्यालय के नए भवन का उद्घाटन।", date: "20-Apr-2025", category: "Infrastructure" },
  { title: "छात्रावास में नए नियम लागू।", date: "15-Apr-2025", category: "Hostel" },
  { title: "शैक्षणिक सत्र 2025-26 के लिए प्रवेश प्रक्रिया शुरू।", date: "10-Apr-2025", category: "Admission" },
  { title: "विश्वविद्यालय के नए शोध केंद्र का उद्घाटन।", date: "05-Apr-2025", category: "Research" },
];

export default function NoticesPage(): JSX.Element {
  const combinedNotices = [...notices, ...notices]; // duplicate for infinite scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollHeight = container.scrollHeight / 2; // half because of duplication
    let lastTime = performance.now();

    const step = (timestamp: number) => {
      if (!isPaused) {
        const delta = timestamp - lastTime;
        if (delta > 16) { // ~60fps
          setScrollPosition((prev) => {
            const newPos = prev + 0.5; // speed
            return newPos >= scrollHeight ? 0 : newPos;
          });
          lastTime = timestamp;
        }
      }
      requestRef.current = requestAnimationFrame(step);
    };

    requestRef.current = requestAnimationFrame(step);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-60 to-white">
      <Navigation />

      {/* Notices Section */}
      <main className="container mx-auto max-w-5xl mt-24 p-4">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <h2 className="text-2xl font-bold text-center">Latest Notices</h2>
          </div>

          <div
            className="p-4 h-[30rem] overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={containerRef}
              style={{
                transform: `translateY(-${scrollPosition}px)`,
                willChange: "transform",
              }}
            >
              {combinedNotices.map((notice, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-4 items-center">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-800">{notice.title}</p>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                      <Calendar size={14} className="mr-1" />
                      <span>Dated: {notice.date}</span>
                    </div>

                    {notice.category && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap justify-self-end">
                        {notice.category}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
