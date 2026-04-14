import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://ik.imagekit.io/2bipewdp5/Anjali%20/Anjali%20logo?updatedAt=1761046178323"
              alt="Anjali Enterprises"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <h3 className="text-white mb-1">Anjali Enterprises</h3>
            <p className="text-gray-400 text-sm mb-4">
              Destination of Packaging Solution
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Major manufacturer and dealer of Industrial Packaging Materials and Packaging Solutions since 2013.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>NCR Bhiwadi, Rajasthan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bubble Pouches</li>
              <li>Bubble Foam Pouches</li>
              <li>HMHD Foam Pouches</li>
              <li>EPE Foam Pouches</li>
              <li>Stretch Film</li>
              <li>Air Bubble Roll</li>
              <li>PVC Strap</li>
              <li>Foam Tape</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="http://www.anjalienterprises.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  www.anjalienterprises.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@anjalienterprises.org"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@anjalienterprises.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400"> 9929183747 </span>

              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anjali Enterprises. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Serving:</span>
              <span className="text-gray-500">Bhiwadi</span>
              <span className="text-gray-500">NCR</span>
              <span className="text-gray-500">Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}