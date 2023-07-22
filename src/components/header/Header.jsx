import React from "react";
import headerImg from "../../assests/headerImg.svg";
import "./Header.css";
import headercircle from "../../assests/headercircle.png";
import headerdots from "../../assests/headerdots.png";
import amazon from "../../assests/amazon.png";
import airbnb from "../../assests/airbnb.png";
import ubereats from "../../assests/ubereats.png";
import google from "../../assests/google.png";

const Header = () => {
  return (
    <>
      {/* <main className="flex flex-col md:flex-row justify-center mx-auto    w-4/5 ">
        <div className="p-4 mb-5 w-full md:w-1/2 flex items-start justify-center flex-col">
          <h1 className="text-2xl mb-5 font-bold">A Digital Product Agency</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            iure nulla quas laudantium sed aspernatur odio? Repellat laboriosam
            cumque accusamus.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"
          >
            Default
          </button>
        </div>
        <div className="  flex justify-end	 border-solid border-2 border-sky-500  " >
          <img src={headerImg} alt="" className="w-full  "  />
        </div>
      </main> */}
      <div className="header">
        <div className="header__left">
          <h1>A Digital Product Agency</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            temporibus amet minus qui, veniam officia omnis accusamus maxime
            distinctio quisquam.
          </p>
          <button
            type="button"
            className="text-white bg-[#2639ed] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-2xl px-9 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 rounded-full 	"
          >
            Contact Now
          </button>
          <img
            src={headerdots}
            alt="error"
            className="absolute top-[65%] left-[3%]  z-[-1]"
          />
        </div>
        <div className="header__right relative">
          <img src={headerImg} alt="" />
          <img
            src={headercircle}
            alt=""
            className="absolute top-2 left-[-60px] z-[-1]"
          />
        </div>
      </div>

      {/* // client  */}
      <div className="w-[85%]  m-auto flex justify-between  mt-[100px] mb-[170px] ">
        <div className="">
          <h1 className="text-5xl font-bold mb-5	 ">Our Client</h1>
          <p className="font-medium text-[#757575]" >
            Several Selected Clients, who alredy <br /> believe in our service
          </p>
        </div>
        <div className="flex   items-center  ">
          <img src={google} alt="error" className=" object-contain mr-9" />
          <img src={airbnb} alt="error" className="object-contain  mr-9" />
          <img src={ubereats} alt="error" className="object-contain mr-9 " />
          <img src={amazon} alt="error" className="object-contain mr-12 mt-5" />
        </div>
      </div>
    </>
  );
};

export default Header;
