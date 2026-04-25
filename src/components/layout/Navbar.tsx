import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDarkTop = isHome || location.pathname === '/gallery' || location.pathname.startsWith('/services') || location.pathname === '/designs' || location.pathname === '/sewing';
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'es', label: 'Español' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: 'Services', path: '/services' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
  ];

  const textColorClass = !isScrolled && isDarkTop 
    ? 'text-white' 
    : 'text-black dark:text-white';

  const logoFilter = !isScrolled && isDarkTop 
    ? 'brightness-0 invert' 
    : 'brightness-0 dark:invert';

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0 -my-1 md:-my-2 block">
            <img 
              src="https://i.imgur.com/qa5gS0Z.png" 
              alt="The Silem Couture" 
              className={cn("h-10 md:h-12 object-contain transition-all duration-300 scale-[1.2] origin-left no-fx", logoFilter)}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={link.path === '/' ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider hover:text-peach-500 transition-colors",
                  location.pathname === link.path ? "text-peach-500" : textColorClass
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div 
              className="relative" 
              onMouseEnter={() => setIsDesktopLangOpen(true)} 
              onMouseLeave={() => setIsDesktopLangOpen(false)}
            >
              <button className={cn("relative flex items-center px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/50 rounded-2xl transition-all hover:bg-white/20 dark:hover:bg-black/20", textColorClass)}>
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold uppercase tracking-wider">{languages.find(l => l.code === i18n.language)?.label || 'en'}</span>
                <ChevronDown className="w-4 h-4 ml-2 opacity-70" />
              </button>
              
              <AnimatePresence>
                {isDesktopLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-zinc-900 drop-shadow-2xl rounded-[1.5rem] border border-gray-100 dark:border-gray-800 py-2 z-50 flex flex-col overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={cn(
                          "text-left px-5 py-2.5 text-sm font-medium hover:bg-peach-50 dark:hover:bg-white/5 transition-colors",
                          i18n.language === lang.code ? "text-peach-600 dark:text-peach-400 bg-peach-50/50 dark:bg-white/5" : "text-gray-700 dark:text-gray-300"
                        )}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setIsDesktopLangOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Container */}
          <div className="md:hidden relative">
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", textColorClass)} />
              ) : (
                <Menu className={cn("w-6 h-6", textColorClass)} />
              )}
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-4 w-60 bg-white dark:bg-zinc-900 shadow-2xl py-6 px-6 flex flex-col space-y-5 rounded-[2rem] border border-gray-100 dark:border-gray-800 z-50 origin-top-right"
                >
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path}
                      className="text-black dark:text-white text-sm font-bold uppercase tracking-wider hover:text-peach-500 transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileLangOpen(false);
                        if (link.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                    <div className="relative w-full">
                      <button 
                        className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl w-full text-black dark:text-white"
                        onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                      >
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          <span className="text-sm font-bold uppercase tracking-wider">{languages.find(l => l.code === i18n.language)?.label || 'en'}</span>
                        </div>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileLangOpen && "rotate-180")} />
                      </button>

                      <AnimatePresence>
                        {isMobileLangOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl flex flex-col w-full"
                          >
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                className={cn(
                                  "text-left px-5 py-3 text-sm font-medium hover:bg-peach-50 dark:hover:bg-white/5 transition-colors",
                                  i18n.language === lang.code ? "text-peach-600 dark:text-peach-400 bg-peach-50/50 dark:bg-white/5" : "text-gray-700 dark:text-gray-300"
                                )}
                                onClick={() => {
                                  i18n.changeLanguage(lang.code);
                                  setIsMobileLangOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {lang.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
