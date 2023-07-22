import React from "react";
import Cards from "./cards/Cards";
// import businessbg from "../assests/Rectangle 24.png";
import  businessrectangle from '../../assests/businessrectangleimg.png'
import businessdotsbg from '../../assests/agencydot.svg'
import "./Business.css";


const Business = () => {
  return (
    <>
      <div className="w-[85%] m-auto h-full mt-28 flex align-center business ">
        <div className="w-[33%] flex justify-center align-center flex-col relative	  ">
        <img src={businessrectangle}  alt="error" className="absolute z-[-1] top-[32%] left-[-10%]"  />
          <h1 className="text-4xl mb-5 font-bold	 ">
          How can we help your Business ?
          </h1>
          <p>
          We build readymade websites, mobile applications, and elaborate online business services.
          </p>
          <img src={businessdotsbg} alt="error"  className="absolute top-[70%] z-[-1]"  />
        </div>
        <div className=" pl-[100px]  ">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Business;
