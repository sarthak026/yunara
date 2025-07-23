import { Link, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the homepage
  const isHomePage = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Client Success', href: '/client-success-stories' },
    { name: 'Hire Experts', href: '/careers' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' }
  ];

  // Dynamic styling based on page and scroll position
  const getNavStyles = () => {
    if (isHomePage && !isScrolled) {
      // Transparent navbar on homepage hero
      return {
        navBg: "bg-transparent",
        textColor: "text-white",
        textHover: "text-white/80 hover:text-white",
        activeColor: "text-white border-b-2 border-white pb-1",
        logoBg: "bg-white/20 backdrop-blur-md border border-white/30",
        logoIcon: "text-white",
        logoText: "text-white",
        mobileButton: "text-white hover:text-white/80",
        mobileBg: "bg-black/90 backdrop-blur-md border border-white/20"
      };
    } else {
      // Solid navbar on other pages or when scrolled
      return {
        navBg: "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100",
        textColor: "text-gray-900",
        textHover: "text-gray-600 hover:text-purple-600",
        activeColor: "text-purple-600 border-b-2 border-purple-600 pb-1",
        logoBg: "bg-gradient-to-r from-purple-600 to-pink-600",
        logoIcon: "text-white",
        logoText: "text-gray-900",
        mobileButton: "text-gray-900 hover:text-purple-600",
        mobileBg: "bg-white border border-gray-200 shadow-lg"
      };
    }
  };

  const styles = getNavStyles();

  return (
    <nav className={`${isHomePage ? 'absolute' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ${styles.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className={`w-10 h-10 ${styles.logoBg} rounded-xl flex items-center justify-center`}>
                <Bot className={`w-6 h-6 ${styles.logoIcon}`} />
              </div>
              <span className={`text-2xl font-bold ${styles.logoText}`}>
                YUNARA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location === item.href
                      ? styles.activeColor
                      : styles.textHover
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                Book Free Call
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${styles.mobileButton}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden ${styles.mobileBg} rounded-2xl mt-4`}>
            <div className="px-4 pt-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block px-4 py-3 text-base font-medium transition-colors cursor-pointer rounded-xl ${
                      location === item.href
                        ? (isHomePage && !isScrolled ? 'text-white bg-white/20' : 'text-purple-600 bg-purple-50')
                        : (isHomePage && !isScrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50')
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="px-4 py-2">
                <Link href="/contact">
                  <button 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-full text-sm font-semibold cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Free Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;