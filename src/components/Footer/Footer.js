import React from 'react';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TranslateIcon from '@mui/icons-material/Translate';

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_data">
          <div>
            <p>Questions? Call 1-844-505-2993</p>
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Buy Gift Cards</li>
              <li>Cookie Preferences</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Account</li>
              <li>Netflix Shop</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>

              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Redeem Gift Cards</li>

              <li>Privacy</li>
              <li>Speed Test</li>
              <li>Ad Choices</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <TranslateIcon className="translate_icon" />
          <h3>English</h3>
          <ArrowDropDownIcon />
        </div>
        <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
        {/* <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
