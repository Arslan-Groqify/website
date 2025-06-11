import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo (Now routes to Home page) */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-[#508CA4] flex items-center justify-center shadow-lg">
            <span className="text-white font-display font-bold text-xl">G</span>
          </div>
          <span
            className={`font-display font-bold text-xl ${
              isScrolled ? "text-groq-dark-blue" : "text-white"
            }`}
          >
            Groqify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks isScrolled={isScrolled} />
          <Button
            onClick={scrollToWaitlist}
            className="bg-[#508CA4] hover:bg-[#508CA4] hover:scale-105 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#508CA4]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg py-6 px-4 absolute w-full">
          <nav className="flex flex-col gap-4">
            <NavLinks isMobile={true} />
            <Button
              onClick={scrollToWaitlist}
              className="bg-[#508CA4] w-full hover:bg-[#508CA4] hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({
  isScrolled = true,
  isMobile = false,
}: {
  isScrolled?: boolean;
  isMobile?: boolean;
}) => {
  const linkStyle =
    isScrolled || isMobile
      ? "text-[#508CA4] hover:text-[#508CA4]/80 transition-colors"
      : "text-white/90 hover:text-white transition-colors";

  const linkClasses = `${linkStyle} font-medium ${isMobile ? "text-lg py-2" : ""}`;

  return (
    <>
      <Link to="/about" className={linkClasses}>About</Link>
      <Link to="/products" className={linkClasses}>Products</Link>
      <Link to="/team" className={linkClasses}>Team</Link>
      <Link to="/contact" className={linkClasses}>Contact</Link>
    </>
  );
};

export default Navbar;
