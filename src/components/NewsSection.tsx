import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const news = [
  {
    date: "2024-01-15",
    title: "Sagantan Launches New Innovation Hub",
    excerpt: "We are excited to announce the opening of our new innovation hub, designed to foster creativity and drive technological advancement.",
    category: "Innovation"
  },
  {
    date: "2024-01-10",
    title: "Partnership with Leading Technology Companies",
    excerpt: "Sagantan has formed strategic partnerships with industry leaders to enhance our service capabilities and expand our market reach.",
    category: "Partnership"
  },
  {
    date: "2024-01-05",
    title: "Award for Excellence in Sustainable Practices",
    excerpt: "We are proud to receive recognition for our commitment to sustainability and environmental responsibility in business operations.",
    category: "Achievement"
  },
  {
    date: "2023-12-28",
    title: "Year-End Success and Future Vision",
    excerpt: "Reflecting on a successful year of growth and innovation, while setting ambitious goals for the upcoming year.",
    category: "Company News"
  }
];

const NewsSection = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="news" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sagantan-text mb-6">
            Latest News & Updates
          </h2>
          <p className="text-lg text-sagantan-text-light max-w-3xl mx-auto">
            Stay informed about our latest developments, achievements, and upcoming initiatives. 
            We're always moving forward and making progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center text-sagantan-text-light text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                <div className="inline-block px-3 py-1 bg-sagantan-blue-light text-sagantan-blue text-xs font-medium rounded-full mb-3">
                  {item.category}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="text-lg font-semibold text-sagantan-text mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sagantan-text-light text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-sagantan-blue hover:text-sagantan-blue-dark">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" className="bg-sagantan-blue hover:bg-sagantan-blue-dark px-8 py-3">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;