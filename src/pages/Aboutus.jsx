import React from 'react';

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the passion, values, and vision behind our work. We are more than just a brand — we’re a community built on trust and excellence.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center py-10">
          <div>
            <img
              src="/range.jpg"
              alt="Our story"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since our foundation, we have strived to provide top-tier products that combine craftsmanship and innovation. Our dedication to quality, customer satisfaction, and ethical values drives us forward every day.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 py-10">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver reliable, high-quality products that meet the needs of our customers and empower them with confidence and trust.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become a globally recognized brand known for innovation, integrity, and commitment to excellence in everything we do.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Want to know more?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out to us or explore our products to learn more about what we stand for.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Contact Us Button */}
           
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;