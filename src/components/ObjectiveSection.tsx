import { Target, Lightbulb, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    icon: Target,
    title: "Strategic Excellence",
    description: "To achieve strategic excellence in all our endeavors by setting clear goals, implementing effective strategies, and maintaining the highest standards of performance."
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description: "To lead innovation in our industry by embracing new technologies, fostering creative thinking, and developing cutting-edge solutions that drive progress."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "To create positive impact in our communities by building meaningful relationships, supporting local initiatives, and contributing to sustainable development."
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description: "To maintain unwavering commitment to quality in every aspect of our work, ensuring that we deliver exceptional value and exceed expectations consistently."
  }
];

const ObjectiveSection = () => {
  return (
    <section id="objectives" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sagantan-text mb-6">
            Our Objectives
          </h2>
          <p className="text-lg text-sagantan-text-light max-w-3xl mx-auto">
            At Sagantan, we are driven by clear objectives that guide our mission and shape our future. 
            These core principles define who we are and what we strive to achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <objective.icon className="w-8 h-8 text-sagantan-white" />
                </div>
                <h3 className="text-xl font-semibold text-sagantan-text mb-4">
                  {objective.title}
                </h3>
                <p className="text-sagantan-text-light leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;