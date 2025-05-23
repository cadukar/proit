import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { Check, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'About Us - Pro IT';
  }, []);

  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-primary-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pro IT</h1>
            <p className="text-xl text-neutral-200">
              Delivering innovative IT solutions to businesses across Azerbaijan and beyond
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 rounded-lg p-8"
          >
            <div className="text-primary-600 mb-4">
              <Target size={36} />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
            <p className="text-neutral-700">{t('about.mission.description')}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary-50 rounded-lg p-8"
          >
            <div className="text-secondary-600 mb-4">
              <Eye size={36} />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-neutral-700">{t('about.vision.description')}</p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section title={t('about.values.title')} dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t('about.values.items', { returnObjects: true }).map((item: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Value Proposition Section */}
      <Section title={t('about.proposition.title')} className="bg-neutral-50">
        <motion.ul 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {t('about.proposition.items', { returnObjects: true }).map((item: string, index: number) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <div className="bg-secondary-500 p-1 rounded-full mr-3 mt-1">
                <Check size={16} className="text-neutral-900" />
              </div>
              <span className="text-lg text-neutral-700">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Team/Expertise Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Award size={48} className="mx-auto text-primary-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-neutral-600">
              With over a decade of experience in the IT industry, our team of certified professionals 
              brings a wealth of knowledge and expertise to every project. We stay at the forefront of 
              technology to deliver innovative solutions that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <div className="font-bold text-4xl text-primary-600 mb-2">10+</div>
              <p className="text-neutral-600">Years of Experience</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-4"
            >
              <div className="font-bold text-4xl text-primary-600 mb-2">50+</div>
              <p className="text-neutral-600">Certified Experts</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4"
            >
              <div className="font-bold text-4xl text-primary-600 mb-2">200+</div>
              <p className="text-neutral-600">Successful Projects</p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;