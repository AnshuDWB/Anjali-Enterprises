import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Capture the form element before any await (React pools events)
    const form = e.currentTarget;

    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      product: formData.get('product') as string,
      message: formData.get('message') as string,
      to_email: 'info@anjalienterprises.org',
    };

    try {
      await emailjs.send(
        'service_jzp454m', // services id provided by emailJS
        'template_2b1e4og',// template id provided by emailJS
        templateParams,
        'rh8ChRYs5_HgWdo8y' // public key provided by emailJS
      );

      setStatus('success');
      form.reset(); // use captured form
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Have questions about our products? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 text-2xl mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Website</h4>
                  <a href="http://www.anjalienterprises.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.anjalienterprises.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@anjalienterprises.org" className="text-blue-600 hover:underline">
                    info@anjalienterprises.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                  <a href="tel:+919929183747" className="text-blue-600 hover:underline">
                    +91 9929183747
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">A-1 Govt. School, Old, Alwar-Tijara Rd, opp. Milakpur, Bhiwadi, Rajasthan 301019</p>
                  <a
                    href="https://maps.app.goo.gl/aHc3nfiYNkqYxRcs8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-1 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1303897617317!2d76.8257673!3d28.2000743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37e1b6aaaaab%3A0x2b7ecd7454ef0c72!2sAnjali%20Enterprises!5e1!3m2!1sen!2sin!4v1765571364524!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anjali Enterprises Location"
              ></iframe>
            </div>

            {/* Service Areas */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-gray-900 mb-4">Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Bhiwadi</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">NCR Zone</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Rajasthan</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Delhi</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Gurgaon</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-gray-900 text-2xl mb-6">Request a Quote</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Anshuman Singh "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Anshu@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="+91 9664185654"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-gray-700 mb-2">Product Interest</label>
                <select
                  id="product"
                  name="product"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a product</option>
                  <option value="bubble-pouches">Bubble Pouches</option>
                  <option value="foam-pouches">Foam Pouches</option>
                  <option value="stretch-film">Stretch Film</option>
                  <option value="air-bubble-roll">Air Bubble Roll</option>
                  <option value="pvc-strap">PVC Strap</option>
                  <option value="foam-tape">Foam Tape</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50  text-red-700 font-weight:600 rounded-lg">
                  Failed to send message. Please try WhatsApp  & Email.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;