
import { useState, useEffect } from "react";
import { Menu, X, Film, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Film className="h-7 w-7 text-editor-purple" />
          <span className="text-xl font-display font-bold">Saurabh Gupta</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="hover:text-editor-purple transition-colors">Work</a>
          <a href="#about" className="hover:text-editor-purple transition-colors">About</a>
          <a href="#services" className="hover:text-editor-purple transition-colors">Services</a>
          <Button asChild>
            <a href="#contact" className="gap-1">Contact Me <ChevronRight className="w-4 h-4" /></a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center gap-6 text-2xl">
          <a 
            href="#work" 
            className="hover:text-editor-purple transition-colors"
            onClick={toggleMobileMenu}
          >
            Work
          </a>
          <a 
            href="#about" 
            className="hover:text-editor-purple transition-colors"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="hover:text-editor-purple transition-colors"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <Button 
            asChild 
            size="lg"
            onClick={toggleMobileMenu}
            className="mt-4"
          >
            <a href="#contact" className="gap-1">Contact Me <ChevronRight className="w-4 h-4" /></a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
