import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import sabifi from "../assets/sabifi.png";
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    // <footer>
    //   <div class="footer-line"></div>
    //   <div className='parent-footer'>
    //   <div className="footer-left">
    //     <img src={require('../assets/sabifi.png')} alt="logo" />
    //     <div className='md:w-3/6 w-full'>
    //       <h1>
    //       The world's best digital marketplace for crypto collectibles
    //     and non-fungible NFTs. Buy sell and discover exclusive digital items
    //     </h1>
    //     </div>
    //     <h1 className=" text-3xl text-white font-bold mt-6 text-center">
    //       JOIN THE COMMUNITY
    //     </h1>
    //     <div className="social-icons md:w-1/3" style={{color:"black",height:"auto",width:"inherit"}}>
    //     <div className='flex gap-2 py-2'>
    //       <a href="#">
    //         <FaFacebook className="social-icon" />
    //       </a>
    //       <a href="#">
    //         <FaTwitter className="social-icon" />
    //       </a>
    //       <a href="#">
    //         <FaInstagram className="social-icon" />
    //       </a>
    //       </div>
    //       <div className='flex py-2 justify-center gap-2'>
    //       <a href="#">
    //         <FaLinkedin className="social-icon" />
    //       </a>
    //       <a href="#">
    //         <FaYoutube className="social-icon" />
    //       </a>
    //       </div>
    //     </div>

    //   </div>
    //   <div className="footer-right">
    //     <div className="footer-col">
    //       <h4>Marketplace</h4>
    //       <a href="#">All NFTs</a>
    //       <a href="#">Art</a>
    //       <a href="#">Collections</a>
    //       <a href="#">Domain Names</a>
    //       <a href="#">Music</a>
    //       <a href="#">Photography</a>
    //       <a href="#">Sports</a>
    //     </div>
    //     <div className="footer-col">
    //       <h4>My Account</h4>
    //       <a href="#">Profile</a>
    //       <a href="#">Favourite</a>
    //       <a href="#">Watchlist</a>
    //       <a href="#">My Collection</a>
    //       <a href="#">Settings</a>
    //     </div>
    //     <div className="footer-col">
    //       <h4>Resources</h4>
    //       <a href="#">Link 1</a>
    //       <a href="#">Link 2</a>
    //       <a href="#">Link 3</a>
    //       <a href="#">Link 4</a>
    //     </div>
    //     <div className="footer-col">
    //       <h4>Company</h4>
    //       <a href="#">Link 1</a>
    //       <a href="#">Link 2</a>
    //       <a href="#">Link 3</a>
    //       <a href="#">Link 4</a>
    //     </div>
    //   </div>

    //   </div>

    // <div class="footer-line"></div>
    // <div className="flex flex-[0.25] py-8 justify-center items-center">
    //   <p className="text-gray-700 text-right text-xs">
    //     &copy;2023 All rights reserved
    //   </p>
    // </div>
    // </footer>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>Block 1, Johar Town, Lahore</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9276543210 0</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>contact@sabifi.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <img src={sabifi} alt="logo" />
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
           
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <NavLink
                      exact
                      activeClassName="active-link"
                      to="/"
                      className=" cursor-pointer
          "
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                  <NavLink
                exact
                activeClassName="active-link"
                to="/about"
                className=" cursor-pointer 
          "
              >
                About Us
              </NavLink>
                  </li>
                  <li>
                  <NavLink
                exact
                activeClassName="active-link"
                to="/token"
                className=" cursor-pointer 
          "
              >
                Token
              </NavLink>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Sabswap</a>
                  </li>
                  <li>
                    <a href="#">Our NFTs</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button className="text-white">
                      <TelegramIcon/>
                    </button>
                  </form>
                </div>
                <div class="footer-social-icon py-2">
                  <span>Follow us</span>
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class=" text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <a href="https://swap.sabifi.io/" target='_blank'>Sabifi</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
