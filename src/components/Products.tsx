import { Package, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const products = [
  // Foam Fitment
  {
    id: 13,
    name: 'Foam Fitment',
    description: 'EPE foam fulfills all requirements for packaging, transportation, and marketing objectives that are functional and cost-effective.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0090.jpg?updatedAt=1765414535123',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0087.jpg?updatedAt=1765414534847',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0089.jpg?updatedAt=1765414534760',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0091.jpg?updatedAt=1765414535001',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0092.jpg?updatedAt=1765414534933',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0093.jpg?updatedAt=1765414534891',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0094.jpg?updatedAt=1765414534857',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0095.jpg?updatedAt=1765414534815',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0096.jpg?updatedAt=1765414534782',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/WhatsApp%20Image%202025-12-06%20at%2018.53.18_3becacd3.jpg?updatedAt=1765414534520',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0095.jpg?updatedAt=1765414534340',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0094.jpg?updatedAt=1765414534263',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0033.jpg?updatedAt=1765414534236',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0097.jpg?updatedAt=1765414534221',
    ],
    category: 'Foam Fitment',
  },
  {
    id: 14,
    name: 'Foam Fitment',
    description: 'Closed cell foam made from Ethylene Vinyl Acetate and blended copolymers.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0089.jpg?updatedAt=1765414534760',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0091.jpg?updatedAt=1765414535001',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251112-WA0052.jpg?updatedAt=1765414534164',

    ],
    category: 'Foam Fitment',
  },
  {
    id: 15,
    name: 'Foam Fitment',
    description: 'Closed cell sponge with smooth outer skin.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0032.jpg?updatedAt=1765414532902',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0094.jpg?updatedAt=1765414533565',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Foam%20Fitment%20and%20Die%20Punching/IMG-20251206-WA0095.jpg?updatedAt=1765414533523',
    ],
    category: 'Foam Fitment',
  },
  // Packing Pouch
  {
    id: 1,
    name: 'Packing Pouchs & Bags',
    description: 'Best low-cost packaging solution for all categories of product safety and transportation.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0066.jpg?updatedAt=1765243288880',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0057.jpg?updatedAt=1765243288869',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0060.jpg?updatedAt=1765243288763',
    ],
    category: 'Packing Pouchs & Bags',
  },
  {
    id: 2,
    name: 'Packing Pouchs & Bags',
    description: 'The latest invention in Bubble Packaging Solution.',
    images: ['https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0053.jpg?updatedAt=1765243288755',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0055.jpg?updatedAt=1765243288841',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0054.jpg?updatedAt=1765243288807',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0065.jpg?updatedAt=1765243288640',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0052.jpg?updatedAt=1765243288583',
    ],
    category: 'Packing Pouchs & Bags',
  },
  {
    id: 3,
    name: 'Packing Pouchs & Bags',
    description: 'The low cost, high-density packaging solution.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0050.jpg?updatedAt=1765243288747',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0067.jpg?updatedAt=1765243288674',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0062.jpg?updatedAt=1765243288712',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0046.jpg?updatedAt=1765243288580',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0049.jpg?updatedAt=1765243288641',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0048.jpg?updatedAt=1765243288626',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0051.jpg?updatedAt=1765243288775',
    ],
    category: 'Packing Pouchs & Bags',
  },
  {
    id: 4,
    name: 'Packing Pouchs & Bags  ',
    description: 'The low cost and very light-weight Packaging Solution.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0064.jpg?updatedAt=1765243288687',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0063.jpg?updatedAt=1765243288705',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0059.jpg?updatedAt=1765243288857',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0058.jpg?updatedAt=1765243288833',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0061.jpg?updatedAt=1765243288729',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Packaging%20Pouches%20&%20Bags/IMG-20251206-WA0065.jpg?updatedAt=1765243288697',
    ],
    category: 'Packing Pouchs & Bags',
  },
  // BOPP Plain Tape
  {
    id: 5,
    name: 'BOPP Plain & Printed Adhesive Tape',
    description: 'High-quality adhesive tape for various packaging and sealing applications.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0075.jpg?updatedAt=1765243554976',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0076.jpg?updatedAt=1765243554991',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0077.jpg?updatedAt=1765243555005',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0078.jpg?updatedAt=1765243555020',

    ],
    category: 'BOPP Plain Tape',
  },
  {
    id: 6,
    name: 'BOPP Plain & Printed Adhesive Tape',
    description: 'Often called carpenter\'s choice tape.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0076.jpg?updatedAt=1765243554823',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0077.jpg?updatedAt=1765243554840',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0078.jpg?updatedAt=1765243554856',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0075.jpg?updatedAt=1765243554872',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0080.jpg?updatedAt=1765243554890',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0071.jpg?updatedAt=1765243553783',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0072.jpg?updatedAt=1765243553799',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0073.jpg?updatedAt=1765243553815',
    ],
    category: 'BOPP Plain Tape',
  },
  {
    id: 7,
    name: 'BOPP Plain & Printed Adhesive Tape',
    description: 'Best in class tape for floor marking and warning of hazardous areas.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0080.jpg?updatedAt=1765243554348',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0079.jpg?updatedAt=1765243554364',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0074.jpg?updatedAt=1765243554771',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0070.jpg?updatedAt=1765243553696',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0071.jpg?updatedAt=1765243553712',


    ],
    category: 'BOPP Plain Tape',
  },
  {
    id: 8,
    name: 'BOPP Plain & Printed Adhesive Tape',
    description: 'Premium quality aluminium foil tape.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0070.jpg?updatedAt=1765243553696',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0071.jpg?updatedAt=1765243553712',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0072.jpg?updatedAt=1765243553728',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0073.jpg?updatedAt=1765243553744',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/BOPP%20Plain%20&%20Printed%20Adhesive%20Tape/IMG-20251206-WA0074.jpg?updatedAt=1765243553760',
    ],
    category: 'BOPP Plain Tape',
  },
  // Other Packing Items
  {
    id: 9,
    name: 'White & green Strip.jpg',
    description: 'A highly stretchable plastic film.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/White%20Strip.jpg?updatedAt=1765566685330',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Green%20Strip.jpg?updatedAt=1765566684407',
      
    ],
    category: 'Other Packing Items',
  },
  {
    id: 10,
    name: 'Strech film',
    description: 'Lightweight Air Bubble for all packaging & cushioning requirements.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Strech%20film.jpg?updatedAt=1765566684369',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Strech%20film2.jpg?updatedAt=1765566684351',
    ],
    category: 'Other Packing Items',
  },
  {
    id: 11,
    name: 'Silica Gel Large Sizes 250 Gram to 10 Kgs.jpg',
    description: 'Economical material for unitizing, pelletizing, and bundling.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Silica%20Gel%20Large%20Sizes%20250%20Gram%20to%2010%20Kgs.jpg?updatedAt=1765566685701',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Silica%20Gel.jpg?updatedAt=1765566685737',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Silica%20Gel%201%20Gram%20to%205%20Gram.jpg?updatedAt=1765566684384',

    ],
    category: 'Other Packing Items',
  },
  {
    id: 12,
    name: 'Silica Gel 1 Gram to 5 Gram.jpg',
    description: 'High-quality foam tape for various applications.',
    images: [
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/818KBWFacCL._SL1500_.jpg?updatedAt=1765567221183',
      'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/611sKtvsEFL._SX466_.jpg?updatedAt=1765567220548',
      
    ],
    category: 'Other Packing Items',
  },
  {
  id: 16,
  name: 'Customised Rolls.jpg',
  description: 'Durable packing straps for securing heavy loads.',
  images: [
    'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Customised%20Rolls.jpg?updatedAt=1765566685518',
    
  ],
  category: 'Other Packing Items',
  },
  {
    id: 17,
    name: 'Colour Foam Sheets & Rolls.jpg',
    description: 'Durable packing straps for securing heavy loads.',
    images: [
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Colour%20Foam%20Sheets.jpg?updatedAt=1765566685478',
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/3b492cb1-fbf9-4911-a673-54b214b191c0.jpg?updatedAt=1765076132130',
    ],
   category: 'Other Packing Items',
  },
  {
    id: 18,
    name: 'Plastic Carrates',
    description: 'Durable packing straps for securing heavy loads.',
    images: [
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Plastic%20Carrates.jpg?updatedAt=1765566685478',
    ],
   category: 'Other Packing Items',
  },
  {
    id: 19,
    name: 'EVA Gasket.jpg',
    description: 'Durable packing straps for securing heavy loads.',
    images: [
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/EVA%20Gasket.jpg?updatedAt=1765566684275',
    ],
   category: 'Other Packing Items',
  },{
    id: 20,
    name: 'PU Foam Sheets.jpg',
    description: 'Durable packing straps for securing heavy loads.',
    images: [
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/PU%20Foam%20Sheets.jpg?updatedAt=1765566684267',
    ],
   category: 'Other Packing Items',
  },
  {
    id: 21,
    name: 'Customised Sheets & Rolls.jpg',
    description: 'Durable packing straps for securing heavy loads.',
    images: [
     'https://ik.imagekit.io/2bipewdp5/Anjali%20/Other%20Packaging%20Solutions%20(1)/Other%20Packaging%20Solutions/Customised%20Sheets.jpg?updatedAt=1765566684223',
    ],
   category: 'Other Packing Items',
  }

];

const categories = [
  'Foam Fitment',
  'Packing Pouchs & Bags',
  'BOPP Plain Tape',
  'Other Packing Items',
];

// Image Slider Component
type Product = {
  id: number;
  name: string;
  description: string;
  images: string[];
  category: string;
};

function ProductImageSlider({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const allImages = products.flatMap((p: Product) => p.images.map((img, idx) => ({ img, name: p.name, id: `${p.id}-${idx}` })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, allImages.length - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, allImages.length - 3)) % Math.max(1, allImages.length - 3));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, allImages.length - 3));
  };

  const openFullscreen = (imageUrl: string) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="w-full overflow-hidden py-12 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 rounded-xl shadow-xl">
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6 px-6"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {allImages.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[200px]">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
                  <div
                    className="relative h-48 sm:h-56 md:h-64 mb-4 rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
                    onClick={() => openFullscreen(item.img)}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm bg-black/60 px-4 py-2 rounded-full">
                        Click to view fullscreen
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-gray-800 text-xs sm:text-sm uppercase tracking-wide">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.max(1, allImages.length - 3) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${idx === currentIndex
                  ? 'bg-blue-600 w-8 h-2'
                  : 'bg-gray-400 w-2 h-2 hover:bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/60 px-4 py-2 rounded-full">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
}

export function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600">Our Products</span>
          </div>
          <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Major Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Deals in All Types of Industrial Packaging Materials
          </p>
        </div>

        {/* Products by Category */}
        {categories.map((category) => {
          const categoryProducts = products.filter((p) => p.category === category);

          return (
            <div key={category} className="mb-20">
              {/* Category Title */}
              <div className="mb-10">
                <h3 className="text-gray-900 text-2xl md:text-3xl mb-2 flex items-center gap-3 justify-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                  {category}
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
              </div>

              {/* Image Slider */}
              <ProductImageSlider products={categoryProducts} />
            </div>
          );
        })}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl shadow-2xl">
            <h3 className="text-white text-2xl mb-4">
              Need Custom Packaging Solutions?
            </h3>
            <p className="text-white/90 mb-6">
              Contact us for customized packaging materials tailored to your specific requirements.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}