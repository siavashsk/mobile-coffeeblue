import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerBox">
        <div className="icons">
          <a href="#">
            <img className="social" src="/images/instagram.png" alt="social" />
          </a>
          <a href="#">
            <img className="social" src="/images/whatsapp.png" alt="social" />
          </a>
          <a href="#">
            <img className="social" src="/images/telegram.png" alt="social" />
          </a>
        </div>
        <div className="addressBox">
          <div>
            <a
              href="https://www.instagram.com/siavashtech/"
              className="developer"
            >
              Siavash Khani
            </a>
          </div>
          <p className="address">آدرس: لورم ایپسوم متن ساختگی با تولید سادگی</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
