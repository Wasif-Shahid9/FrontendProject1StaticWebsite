import React from "react";
import facebooklogo from "../../assests/facebook.png";
import linkedinlogo from "../../assests/linkedin.png";
import twitterlogo from "../../assests/twitter.png";

const Footer = () => {
  return (
    <>
      <hr className="mt-[100px] w-[85%] m-auto" />
      <div className="w-[85%] m-auto flex justify-center mt-[50px]">
        <div className="w-[20%] ">
          <p className="text-2xl mb-5	">
            <span className="font-bold">A+ </span> Sutodio
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sed
            similique fugiat quae optio ut accusamus cupiditate commodi,
            consectetur repellendus?
          </p>
        </div>
        <div className="w-[80%]    flex justify-evenly">
          <div>
            <p className="font-bold text-2xl mb-3">What we do</p>
            <ul className="border-none">
              <li className="py-1">Web Design</li>
              <li className="py-1">App Design</li>
              <li className="py-1">Social Media Manage</li>
              <li className="py-1">Market Analysis Project</li>
            </ul>
          </div>
          <div className="mx-8">
            <p className="font-bold text-2xl mb-3">Compnay</p>
            <ul className="list-none border-none">
              <li className="py-1">About us</li>
              <li className="py-1">Career</li>
              <li className="py-1">Become Investor</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl mb-3">Support</p>
            <ul className="border-none">
              <li className="py-1">FAQ</li>
              <li className="py-1">Policy</li>
              <li className="py-1">Business</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl mb-3">Contact</p>
            <ul className="border-none">
              <li className="py-1">Watsapp</li>
              <li className="py-1">Support 24</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[85%] m-auto flex mt-10">
        <img src={facebooklogo} alt="" className="mr-5" />
        <img src={linkedinlogo} alt="" className="mr-5" />
        <img src={twitterlogo} alt="" />
      </div>

      <hr className="mb-[40px] mt-[20px] w-[85%] m-auto" />
      <div className="w-[85%] m-auto">
        <p className="text-center mb-4">Copyright © 2022 Avi Yansah</p>
      </div>
    </>
  );
};

export default Footer;
