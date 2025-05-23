import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { Shield, Server, Wifi, Code, Clock, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 rounded-lg"
    >
      <div className="bg-primary-50 p-4 rounded-full mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const IntroSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'IT Security',
      description: 'Protect your business with comprehensive security solutions'
    },
    {
      icon: <Server size={24} />,
      title: 'Infrastructure',
      description: 'Build reliable, scalable infrastructure for your operations'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Network Solutions',
      description: 'Design and implement secure, high-performance networks'
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Custom software and web development services'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock IT support and maintenance'
    },
    {
      icon: <Users size={24} />,
      title: 'Training',
      description: 'Comprehensive training programs for your team'
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {t('home.intro.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-600 max-w-3xl mx-auto"
        >
          {t('home.intro.description')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default IntroSection;