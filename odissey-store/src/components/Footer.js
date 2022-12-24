import React from 'react';
import '../components/Footer.css';



const Footer=()=>{
    return(
        <>
        <footer>
  <div className="social">
    <p>Created by Orxan Aslan</p>
    <ul className="wrapper">
      <a href="https://www.linkedin.com/checkpoint/lg/login-submit" target="_blank">
        <li className="icon linkedin">
          <span className="tooltip">LinkedIn</span>
          <span><i className="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="https://github.com" target="_blank">
        <li className="icon github">
          <span className="tooltip">GitHub</span>
          <span><i className="fab fa-github"></i></span>
        </li>
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span><i className="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="https://api.whatsapp.com/qr/QWRCUXGHYD6LJ1?autoload=1&app_absent=0" target="_blank">
        <li className="icon whatsapp">
          <span className="tooltip">Whatsapp</span>
          <span><i className="fab fa-whatsapp"></i></span>
        </li>
      </a>
      <a href="https://www.telegram.com/" target="_blank">
        <li className="icon telegram">
          <span className="tooltip">Telegram</span>
          <span><i className="fab fa-telegram"></i></span>
        </li>
      </a>
      <a href="https://www.instagram.com/odissey_x/" target="_blank">
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span><i className="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="https://mobile.twitter.com " target="_blank">
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><i className="fab fa-twitter"></i></span>
        </li>
      </a>
      <a href="https://codepen.io/features/" target="_blank">
        <li className="icon github">
          <span className="tooltip">CodePen</span>
          <span><i className="fab fa-codepen"></i></span>
        </li>
      </a>
    </ul>
  </div>
  <div className="final_text">
  <h1>Created by Orxan Aslan</h1>
  </div>
 
</footer>
        </>
    );
}
export default Footer;