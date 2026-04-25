import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block -ml-4 md:-ml-8 -mt-4 mb-2 block">
              <img 
                src="https://i.imgur.com/qa5gS0Z.png" 
                alt="The Silem Couture" 
                className="h-16 md:h-20 w-auto object-contain object-left brightness-0 invert scale-[1.2] origin-left no-fx"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              {t('footer.desc')}
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+2348060901607" className="hover:text-peach-400 transition-colors">+234 806 090 1607</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Surulere, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">{t('footer.quick_links')}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-peach-400 transition-colors">Home</button></li>
              <li><Link to="/services" className="hover:text-peach-400 transition-colors">Services</Link></li>
              <li><Link to="/courses" className="hover:text-peach-400 transition-colors">{t('nav.courses')}</Link></li>
              <li><Link to="/gallery" className="hover:text-peach-400 transition-colors">{t('nav.gallery')}</Link></li>
              <li><Link to="/about" className="hover:text-peach-400 transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">{t('footer.customer_care')}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="tel:+2348060901607" className="hover:text-peach-400 transition-colors">Contact Us</a></li>
              <li><a href="mailto:silem.couture@gmail.com" className="hover:text-peach-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="mailto:silem.couture@gmail.com" className="hover:text-peach-400 transition-colors">Size Guide</a></li>
              <li><span className="hover:text-peach-400 transition-colors cursor-default">FAQ</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">{t('footer.newsletter')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.subscribe_text')}
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="bg-transparent border border-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-peach-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-3 text-sm font-medium uppercase tracking-wider hover:bg-peach-200 transition-colors"
              >
                {t('footer.subscribe_btn')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/the_silem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@the_silem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/14dAKxadGpP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://pin.it/4hZ5Eogky" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@thesilem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
