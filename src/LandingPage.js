import React from 'react';
import './LandingPage.css';
import Content from './Content';
import Body from './Body';
import Testimonials from './Testimonials';
import Contact from './Contact';


const LandingPage = () => {
  return (
    <div>
      <main>
        <body>
        <Content />
      <Body />
      <Testimonials />
      <Contact />
        </body>
      </main>
    </div>
  );
}

export default LandingPage;