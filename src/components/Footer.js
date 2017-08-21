import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <div className="Footer">
      <div className="Footer__links">
        <a href="https://github.com/habiba2012" target="_blank">Github repository</a>
      </div>
      <div className="Footer__copy">
        {new Date().getFullYear()}  &copy;  Designed by <a href="https://www.linkedin.com/in/habiba-akhter-2884ba26/" target="_blank">Habiba Akhter</a>
      </div>
    </div>
);

export default Footer;