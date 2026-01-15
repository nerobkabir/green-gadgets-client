"use client";

import Link from "next/link";
import { MdEco, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <MdEco className="text-4xl text-green-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  GreenGadgets Hub
                </h2>
                <p className="text-green-600 text-sm font-medium">
                  Eco-Friendly Product Marketplace
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Building a sustainable future through eco-friendly products. Every purchase helps protect our planet.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebook />, href: "#", label: "Facebook" },
                { icon: <FaTwitter />, href: "#", label: "Twitter" },
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center bg-white text-gray-600 hover:bg-green-600 hover:text-white rounded-full border border-gray-300 hover:border-green-600 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/items", label: "Products" },
                { href: "/login", label: "Login" },
                { href: "/add-item", label: "Add Product" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MdEmail className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">support@greengadgets.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdPhone className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdLocationOn className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">123 Green Street, Eco City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} GreenGadgets Hub. All rights reserved.
          </div>

          {/* Environmental Impact Stats - Simple */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="font-semibold text-green-700">12.5K kg</div>
              <div className="text-xs text-gray-500">CO₂ Saved</div>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="font-semibold text-green-700">8.2K kg</div>
              <div className="text-xs text-gray-500">Plastic Avoided</div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-green-600 text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-green-600 text-sm">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-green-600 text-sm">
              Cookies
            </Link>
          </div>
        </div>

        {/* Environmental Certification Badge - Simple */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-green-200 rounded-full">
            <MdEco className="text-green-600" />
            <span className="text-sm font-medium text-green-700">Eco-Certified Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
}