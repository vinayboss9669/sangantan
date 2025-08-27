import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sagantan-text text-sagantan-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 text-sagantan-blue">BVES (Bahujan Vidyarthi Ekta Sangh)</div>
            <p className="text-sagantan-white/80 mb-6 leading-relaxed">
              BVES is a student organization founded on the values of education, equality, and social justice. Our aim is to protect students' rights, promote unity and awareness, and bring positive change in society.
            </p>
            <p className="text-sagantan-white/80 mb-6 leading-relaxed">
              We believe that united student power is the foundation of a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-sagantan-blue rounded-full flex items-center justify-center hover:bg-sagantan-blue-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sagantan-blue rounded-full flex items-center justify-center hover:bg-sagantan-blue-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sagantan-blue rounded-full flex items-center justify-center hover:bg-sagantan-blue-dark transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sagantan-blue rounded-full flex items-center justify-center hover:bg-sagantan-blue-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About BVES</h3>
            <ul className="space-y-3 text-sagantan-white/80">
              
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">Founders & Leaders
</a></li>
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">College Admins</a></li>
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">College Admins form</a></li>
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">Term & Conditions </a></li>
              <li><a href="#" className="hover:text-sagantan-blue transition-colors">About Developers</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-sagantan-white/80">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-sagantan-blue flex-shrink-0" />
                <div>
                  <p>123 Business Street</p>
                  <p>Corporate City, CC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sagantan-blue flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sagantan-blue flex-shrink-0" />
                <p>contact@sagantan.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sagantan-white/20 mt-12 pt-8 text-center">
          <p className="text-sagantan-white/60">
            © 2024 Sagantan. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;