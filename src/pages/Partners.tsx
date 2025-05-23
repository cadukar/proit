import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { Handshake } from 'lucide-react';

// Company logo component
const CompanyLogo = ({ name, index }: { name: string; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white shadow-sm rounded-lg p-6 flex items-center justify-center h-28"
    >
      <span className="text-xl font-bold text-neutral-800">{name}</span>
    </motion.div>
  );
};

const Partners = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = 'Partners - Pro IT';
  }, []);
  
  const strategicPartners = t('partners.strategic.companies', { returnObjects: true }) as string[];
  const clients = t('partners.clients.companies', { returnObjects: true }) as string[];

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-primary-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('partners.title')}</h1>
            <p className="text-xl text-neutral-200">
              {t('partners.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Partners Section */}
      <Section title={t('partners.strategic.title')}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {strategicPartners.map((partner, index) => (
            <CompanyLogo key={index} name={partner} index={index} />
          ))}
        </div>
      </Section>

      {/* Partner Benefits Section */}
      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Handshake size={48} className="text-primary-600 mb-4" />
            <h2 className="text-3xl font-bold mb-6">Partnership Program</h2>
            <p className="text-lg text-neutral-600 mb-6">
              Join our partnership network and access a wide range of benefits designed to help your business grow and succeed. We believe in creating mutually beneficial relationships that drive innovation and excellence.
            </p>
            <ul className="space-y-3">
              {[
                "Access to exclusive resources and technical support",
                "Joint marketing and co-branding opportunities",
                "Preferential pricing and special offers",
                "Regular training and certification programs",
                "Collaborative project opportunities"
              ].map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Become a Partner</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-neutral-700 mb-1">Contact Person</label>
                <input
                  type="text"
                  id="contact"
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                />
              </div>
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-neutral-700 mb-1">Partnership Type</label>
                <select
                  id="partnershipType"
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                >
                  <option value="">Select partnership type</option>
                  <option value="technology">Technology Partner</option>
                  <option value="solution">Solution Provider</option>
                  <option value="reseller">Reseller</option>
                  <option value="consultant">Consultant</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Trusted Clients Section */}
      <Section title={t('partners.clients.title')} dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-neutral-800 shadow-md rounded-lg p-6 flex items-center justify-center h-28"
            >
              <span className="text-xl font-bold text-white">{client}</span>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Partners;