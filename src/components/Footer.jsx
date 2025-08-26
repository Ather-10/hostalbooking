// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">🏨 Hostel-Booking</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your comfort, our priority. Premium rooms at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/rooms" className="hover:text-yellow-400 transition">Rooms</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Hostel Booking. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
