
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 border-t border-white border-opacity-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">TEKNIKELLER GROUP</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of industrial machinery for diverse sectors. 
              Engineering excellence in every solution.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">info@teknikeller.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Industrial District, Manufacturing City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="/catalogue" className="block text-gray-300 hover:text-white transition-colors">Catalogue</a>
              <a href="/realise" className="block text-gray-300 hover:text-white transition-colors">Custom Solutions</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Teknikeller Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
