import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed by 
        <a
          href="#"   // add link
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="#" // add link
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="#"  // add link
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;