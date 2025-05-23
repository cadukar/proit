import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <Logo className="text-white" />
            </Link>
            <p className="text-neutral-400 mt-4 max-w-xs">
              {t('Smart IT Solutions for Scalable Business in Azerbaijan and globally')}
            </p>
            <div className="flex items-center mt-6 text-neutral-400">
              <MapPin size={18} className="mr-2 text-secondary-400" />
              <span>{t('contact.info.address')}</span>
            </div>
            <div className="flex items-center text-neutral-400">
              <Phone size={18} className="mr-2 text-secondary-400" />
              <span>{t('contact.info.phone')}</span>
            </div>
            <div className="flex items-center text-neutral-400">
              <Mail size={18} className="mr-2 text-secondary-400" />
              <span>{t('contact.info.email')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              {t('footer.links.items', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>
                  <Link to="#" className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              {t('footer.services.items', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>
                  <Link to="/services" className="text-neutral-400 hover:text-secondary-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social.title')}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-neutral-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
            <div>
              <Link 
                to="/contact" 
                className="bg-secondary-500 hover:bg-secondary-600 text-neutral-900 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                {t('home.hero.cta')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">{t('footer.copyright')}</p>
            <div className="mt-4 md:mt-0">
              <Link to="#" className="text-neutral-500 hover:text-neutral-400 text-sm mx-2">
                {t('Privacy Policy')}
              </Link>
              <span className="text-neutral-700">|</span>
              <Link to="#" className="text-neutral-500 hover:text-neutral-400 text-sm mx-2">
                {t('Terms of Service')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;