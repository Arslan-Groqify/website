import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-groq-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#508CA4]  flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">
                  G
                </span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Groqify
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-xs">
              Revolutionizing enterprise learning with AI-driven games.
              Empowering businesses and their employees.
            </p>
            <div className="flex gap-4">
              <a
                //href="#"
                className="text-white hover:text-groq-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                //href="#"
                className="text-white hover:text-groq-purple transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                //href="mailto:contact@groqify.com"
                className="text-white hover:text-groq-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Groqify
                </a>
              </li>
              {/* <li>
                <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Our Technology</a>
              </li> */}
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="shrink-0 mt-1" />
                {/* <span className="text-gray-300">
                  123 Innovation Drive, San Francisco, CA 94103
                </span> */}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                {/* <span className="text-gray-300">(555) 123-4567</span> */}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a
                  href="mailto:contact@groqify.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contact@groqify.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                disabled
                className="px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-white/10 text-white/50 cursor-not-allowed"
              />
              <button
                type="submit"
                disabled
                className="px-4 py-2 rounded-md bg-[#508CA4]/50 cursor-not-allowed text-white/70 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Groqify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
