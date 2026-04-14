import { useState, useEffect } from 'react';
import { Package, Shield, Truck, Phone, Mail, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const productImages = [
 'https://ik.imagekit.io/2bipewdp5/Anjali%20/f33b3633-cd06-4c17-80b9-4a29a283825c.jpg?updatedAt=1765076055512',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/ee9578d1-8ca7-42ca-a31c-6ee898c5d6d4.jpg?updatedAt=1765076063417',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/9a6fc66d-7b74-41ce-983a-44b68dcaa605.jpg?updatedAt=1765076074406',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/f8a81b23-02f8-42cc-bebf-7bad75c1f457.jpg?updatedAt=1765076086650',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/bd549fe2-703d-4424-8121-3febb113aef5.jpg?updatedAt=1765076115480',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/c05a0db2-cf73-42e0-bb77-f1f44e8e905c.jpg?updatedAt=1765076115600',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/1cf002fd-3903-4697-944b-52fe221ee043.jpg?updatedAt=1765076131956',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/3b492cb1-fbf9-4911-a673-54b214b191c0.jpg?updatedAt=1765076132130',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/0c42f3af-8d32-4955-8bfb-1be404967315.jpg?updatedAt=1765076145754',
  'https://ik.imagekit.io/2bipewdp5/d9a15b66-ffbe-4701-ac0a-003be146da5a.jpg?updatedAt=1765075948813',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/8517e94d-0dd6-4551-8ccb-cb754e943a7e.jpg?updatedAt=1765076102022',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0097.jpg?updatedAt=1765414534221',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0033.jpg?updatedAt=1765414534236',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0094.jpg?updatedAt=1765414534263',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0095.jpg?updatedAt=1765414534340',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/WhatsApp%20Image%202025-12-06%20at%2018.53.18_3becacd3.jpg?updatedAt=1765414534520',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0096.jpg?updatedAt=1765414534782',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0095.jpg?updatedAt=1765414534815',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0094.jpg?updatedAt=1765414534857',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0093.jpg?updatedAt=1765414534891',
  'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251112-WA0052.jpg?updatedAt=1765414534164',
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 3000); // 3 second delay
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background Image Slider with Moving Effect */}
      <div className="absolute inset-0">
        {productImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
              transition: 'opacity 1s ease-in-out, transform 3s ease-in-out',
            }}
          >
            <ImageWithFallback
              src={img}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-900/80"></div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="relative min-h-[600px] md:min-h-[700px]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Product Images Slider - Top */}
        <div className="relative z-10 pt-8 pb-12">
          <div className="container mx-auto px-4">
            {/* Scrolling Image Strip */}
            <div className="flex gap-4 overflow-hidden">
              <div className="flex gap-4 animate-slide">
                {[...productImages, ...productImages].map((img, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden group"
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-center">
          {/* Welcome Text */}
          <div className="mb-6 animate-fade-in">
            <p className="text-gray-200 text-lg md:text-xl tracking-widest uppercase">
              Welcome To
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl mt-2 mb-4">
              Anjali Enterprises
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl tracking-wide">
              DESTINATION OF PACKAGING SOLUTION
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-white/90 text-base md:text-lg mb-2">
              Providing high-quality industrial packaging materials since 2013.
            </p>
            <p className="text-white/90 text-base md:text-lg">
              Trusted by leading manufacturers across India.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <Package className="w-5 h-5" />
            <span className="text-lg">Explore Our Diverse Products</span>
          </button>

          {/* Bottom Text */}
          <div className="mt-16">
            <p className="text-white text-base md:text-lg">
              Anjali Enterprises deals in all types of Industrial Packaging Materials.
            </p>
          </div>
        </div>

        {/* Features - Positioned at bottom */}
        <div className="relative z-10 container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-start gap-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="p-3 bg-white/20 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white mb-2">Quality Assurance</h3>
                <p className="text-white/80 text-sm">
                  High Standard of Quality in Products and Timely Supply
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-start gap-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="p-3 bg-white/20 rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white mb-2">Wide Range</h3>
                <p className="text-white/80 text-sm">
                  Over 20 types of flexible high quality packaging materials
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex items-start gap-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="p-3 bg-white/20 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white mb-2">Fast Delivery</h3>
                <p className="text-white/80 text-sm">
                  Timely delivery across NCR, Bhiwadi, and Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
        <a
          href="tel:+919929183747"
          className="p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/9929183747"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 transform hover:scale-110 transition-all duration-300 hover:shadow-green-500/50"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="mailto:info@anjalienterprises.org"
          className="p-4 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transform hover:scale-110 transition-all duration-300 hover:shadow-red-500/50"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}