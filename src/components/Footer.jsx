import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923023155306"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <a
                href="https://wa.me/923023155306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <FaWhatsapp className="text-green-400" />
                <span>+92 302 3155306</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-red-400" />
              <span>contact@example.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M..." /> {/* Replace with a real icon or remove */}
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; 2025 MySite. All rights reserved.
        </div>
      </footer>
    </>
  );
}
