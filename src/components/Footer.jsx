import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <div className="flex items-center justify-center md:justify-start gap-2">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <FaWhatsapp className="text-green-400" />
              <span>+92 300 1234567</span>
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-red-400" />
            <span>contact@example.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          {/* Facebook */}
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          {/* Twitter */}
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          {/* Dummy Icon */}
          <a href="#" className="hover:text-purple-400 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M..." /> {/* Replace with a dummy icon path or add more icons */}
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; 2025 MySite. All rights reserved.
      </div>
    </footer>
  );
}