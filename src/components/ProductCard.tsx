import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  images: string[];
  features: string[];
  category: string;
  color: string;
}

export function ProductCard({ name, description, images, features, category, color }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Product Image Slider */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {/* Main Image */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${name} - Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
              />
            </div>
          ))}
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-10"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-10"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-white w-6 h-2'
                    : 'bg-white/50 w-2 h-2 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium z-10">
            {category.split(' ')[0]}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs z-10">
            {currentImageIndex + 1}/{images.length}
          </div>
        </div>

        {/* Thumbnail Strip - Visible on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex gap-2 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'ring-2 ring-white scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h4 className="text-gray-900 text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {name}
        </h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`}></span>
              <span className="text-gray-700 line-clamp-2">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}