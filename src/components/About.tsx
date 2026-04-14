import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Target, Users, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-4">
            Company Profile
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            One of the major manufacturers and dealers of Industrial Packaging Materials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Image */}
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://ik.imagekit.io/2bipewdp5/ISO%209001%20Certificate%20Anjalli%20Enterprises%20Bhiwadi%202025-27_page-0001.jpg?updatedAt=1765554979375"
              alt="ISO 9001 Certificate - Anjali Enterprises Bhiwadi"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Company Description */}
          <div className="order-1 lg:order-2">
            <h3 className="text-gray-900 text-2xl md:text-3xl mb-6 font-bold">
              About Anjali Enterprises
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="text-red-600">Anjali Enterprises</span> is one of the major manufacturers and Dealer of
                Industrial Packaging Materials and Packaging Solutions in NCR Bhiwadi, Rajasthan. It established in 2013
                and now, its packaging solutions benefit the customer of Air condition manufacturers, Bathware Fittings &
                Sanitarywares, Furniture, Automobile Industries in Bhiwadi and NCR Zone.
              </p>
              <p>
                The reason to have Anjali Enterprises a name in market in very short time is our Great ability, strong time
                commitment in fulfill of desired any issue, and most important our principle{' '}
                <span className="italic">"we are working together for a better tomorrow"</span>.
              </p>
              <p>
                Some Major Products of Anjali Enterprises are Bubble Pouch, HMHD & Foam Pouches, Air Condition Foam,
                adhesive Printed Tape and other Foam Items. We Trade and manufacture over 20 types of flexible high quality
                Foams, BOPP Packaging Tape, Air Bubble Pouches, and Double Side Adhesive Foams. Anjali Enterprises always
                in focus for developing Products for domestic and export safety purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Our Mission</h4>
            <p className="text-gray-600 text-sm">
              Working together for a better tomorrow
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Quality Policy</h4>
            <p className="text-gray-600 text-sm">
              High standard of quality in products and timely supply
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Customer Focus</h4>
            <p className="text-gray-600 text-sm">
              Continuous improvement and team work
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2">Since 2013</h4>
            <p className="text-gray-600 text-sm">
              Over a decade of excellence in packaging
            </p>
          </div>
        </div>

        {/* Quality Policy Box */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 text-2xl mb-3">Quality Policy</h3>
              <p className="text-gray-700">
                <span className="text-red-600">Anjali Enterprises</span> satisfy their Customers Requirement by Maintaining
                A High Standard of Quality in Products and Timely Supply of Produts and Their Services Through Continual
                Improvement, objectives and Team Work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}