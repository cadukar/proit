import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import ServicesHighlight from '../components/home/ServicesHighlight';
import ClientsSection from '../components/home/ClientsSection';

const Home = () => {
  useEffect(() => {
    document.title = 'Pro IT - Smart IT Solutions';
  }, []);

  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesHighlight />
      <ClientsSection />
    </>
  );
};

export default Home;