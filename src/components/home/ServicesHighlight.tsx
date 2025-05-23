import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import Button from '../common/Button';
import { ShieldCheck, LineChart, Cloud, Network, HardDrive, Webcam } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-secondary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
      >
        Learn more →
      </Link>
    </motion.div>
  );
};

const ServicesHighlight = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'IT Security & Audit',
      description: 'Comprehensive security solutions to protect your business assets and data.'
    },
    {
      icon: <LineChart size={28} />,
      title: 'IT Strategy',
      description: 'Strategic planning and implementation of digital transformation initiatives.'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud Solutions',
      description: 'Microsoft 365, Azure, and cloud migration services for modern workplaces.'
    },
    {
      icon: <Network size={28} />,
      title: 'Network Solutions',
      description: 'Secure network architecture, VPN setup, and infrastructure optimization.'
    },
    {
      icon: <HardDrive size={28} />,
      title: 'Server & Virtualization',
      description: 'VMware, Hyper-V, and Proxmox setup for optimized server infrastructure.'
    },
    {
      icon: <Webcam size={28} />,
      title: 'Surveillance Systems',
      description: 'Professional CCTV and video surveillance system design and installation.'
    }
  ];

  return (
    <Section className="bg-neutral-50">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          {t('home.services.title')}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <Button variant="primary">
            {t('home.services.viewAll')}
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default ServicesHighlight;