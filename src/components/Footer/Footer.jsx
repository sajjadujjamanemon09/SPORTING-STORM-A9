import { FaTwitter,FaSquareFacebook,FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="footer footer-center p-10 bg-black text-base-content rounded mt-16">
      <nav className="grid grid-flow-col gap-4 text-cyan-600">
        <a className="link link-hover">Terms of Use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav className="gap-4 text-cyan-600">
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4 text-cyan-600 text-2xl">
          <a><FaTwitter></FaTwitter></a> 
          <a><FaSquareFacebook></FaSquareFacebook></a> 
          <a><FaYoutube></FaYoutube></a>
          <a><FaInstagram></FaInstagram></a>
        </div>
      </nav> 
      <aside>
        <p className="text-cyan-600">Copyright © 2023 - All right reserved by THE ULTIMATE SPORTING HEROES</p>
      </aside>
    </footer>
    );
};

export default Footer;