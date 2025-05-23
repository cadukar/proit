import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

interface ServiceItem {
  title: string;
  price: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories: ServiceCategory[] = t('services.categories', { returnObjects: true });
  
  useEffect(() => {
    document.title = 'Services - Pro IT';
  }, []);

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? categories.flatMap(category => category.items.map(item => ({ ...item, category: category.id })))
    : categories
        .filter(category => category.id === activeCategory)
        .flatMap(category => category.items.map(item => ({ ...item, category: category.id })));

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-primary-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-xl text-neutral-200">
              {t('services.description')}
            </p>
          </div>
        </div>
      </div>

      <Section className="bg-white">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button 
            variant={activeCategory === 'all' ? 'primary' : 'outline'}
            onClick={() => setActiveCategory('all')}
            className="mb-2"
          >
            All Services
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${service.category}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <div className="text-secondary-600 font-medium mb-4">{service.price}</div>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <Button variant="secondary" size="sm">Request Quote</Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Process" subtitle="How we deliver our services" className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Line connecting the steps */}
            <div className="absolute left-[28px] top-10 bottom-10 w-1 bg-primary-200 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {[
                { number: 1, title: 'Consultation', description: 'We start by understanding your business needs and challenges.' },
                { number: 2, title: 'Assessment', description: 'Our experts evaluate your current IT infrastructure and identify areas for improvement.' },
                { number: 3, title: 'Strategy Development', description: 'We create a tailored solution designed specifically for your business objectives.' },
                { number: 4, title: 'Implementation', description: 'Our team efficiently implements the solution with minimal disruption to your operations.' },
                { number: 5, title: 'Support & Optimization', description: 'We provide ongoing support and continuously optimize the solution for peak performance.' }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-primary-600 text-white flex-shrink-0 rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold z-10">
                    {step.number}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your IT infrastructure?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can benefit your business.
          </p>
          <Button variant="secondary" size="lg" className="mx-auto">
            Request a Free Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Services;