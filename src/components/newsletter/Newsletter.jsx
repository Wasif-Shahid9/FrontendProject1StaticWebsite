import React from "react";
import "./Newsletter.css";
// import newsletterbg from "../../assests/newsletterbg.png";
import newsletterinputimg from "../../assests/newsletterinput.png";
import newsletterrectangle from '../../assests/newsletterrectangle.png'

const Newsletter = () => {
  return (
    <>
      <div className="w-[85%] m-auto flex  items-center	 justify-evenly newsletter mt-[100px] relative 	">
      <img src={newsletterrectangle} alt="error" className="absolute top-[50%] left-[-3%] z-[-1]"  />
        <div className="flex flex-col	justify-center ml-10	">
          <p className="text-4xl font-bold	mb-5">Subscribe Newsletter</p>
          <p>I will update good news and promotion service not span</p>
        </div>
        <div className=" flex justify-end relative  ">
          <img
            src={newsletterinputimg}
            alt="error"
            className=" h-[250px] ml-[200px] "
          />
          <input
            type="text"
            className="absolute z-[1] w-[60%] top-[40%] p-5 left-[20%]  rounded-3xl	"
            placeholder="Enter your email adress "
          />
          <button className="absolute top-[44%] left-[60%] z-[1]  bg-[#2639ed] px-5 py-3 text-white	  rounded-full		">
            Contact us
          </button>
        </div>
   
      </div>
      ;
    </>
  );
};

export default Newsletter;
