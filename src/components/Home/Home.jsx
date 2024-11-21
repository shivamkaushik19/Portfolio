import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Intro from '../intro/Intro';
import About from '../about/About';
import Card from '../card/Card';
import ContactForm from '../contactform/Contactform';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Intro />
      <About />
      <Card />
      <ContactForm />
    </>
  );
}

export default Home;
