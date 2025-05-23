import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const ClientsSection = () => {
  const { t } = useTranslation();

  // Industries served with their icons
  const industries = [
    {
      name: 'Finance',
      icon: '🏦',
      description: 'Banks, investment firms, and financial institutions'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Hospitals, clinics, and healthcare providers'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Production facilities and industrial companies'
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Schools, universities, and educational institutions'
    },
    {
      name: 'Government',
      icon: '🏛️',
      description: 'Public sector and government agencies'
    },
    {
      name: 'Retail',
      icon: '🛒',
      description: 'Stores, e-commerce, and retail businesses'
    }
  ];

  // Animation variants for staggered appearance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {t('home.clients.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-600 max-w-3xl mx-auto"
        >
          {t('home.clients.description')}
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {industries.map((industry, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-neutral-50 rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
            <p className="text-neutral-600">{industry.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonial/Featured Client */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 bg-primary-50 rounded-lg p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/4 text-center mb-6 md:mb-0">
            <div className="inline-block bg-white p-4 rounded-full shadow-sm">
              <div className="text-5xl">🏢</div>
            </div>
            <h4 className="mt-4 font-semibold">Azerbaijan Airlines</h4>
          </div>
          <div className="w-full md:w-3/4 md:pl-8">
            <p className="text-lg italic text-neutral-700 mb-4">
              "Pro IT transformed our IT infrastructure, significantly improving security and efficiency. Their team's expertise and dedicated support have made them an invaluable partner in our digital journey."
            </p>
            <p className="font-semibold">- IT Director, Azerbaijan Airlines</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ClientsSection;