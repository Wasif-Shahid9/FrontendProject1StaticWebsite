import React from "react";
import "./Client.css";
import clientimg from "../../assests/clientimg.png";
import clientgroupimg from "../../assests/clientgroup.png";
import agencydotbg from "../../assests/agencydot.svg";
import clientcircle from "../../assests/clientcircle.png";
import clientdotimg1 from "../../assests/clientdotimg1.png";
import clientdotimg2 from "../../assests/clientdotimg2.png";
import clientbgcircle from "../../assests/clientbgcircle.svg";

const Client = () => {
  return (
    <div className="w-[85%] m-auto mt-[100px] ">
      <div className="mb-[100px]">
        <h1 className="text-center text-4xl font-bold	">
          What our happy client say
        </h1>
        <p className="text-center mt-5 ">
          Several Selected Clients, who already believe in our service
        </p>
      </div>
      <div className="flex  items-center justify-between ">
        <div className="w-1/2 relative">
          <img
            src={agencydotbg}
            alt="error"
            className="absolute right-[0] top-[-3%] z-[-1]"
          />
          <img
            src={clientcircle}
            alt="error"
            className="absolute left-[10%] bottom-[10%] z-[-1]"
          />
          <img src={clientimg} alt="error" />
        
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-5">Wasif Shahid</h1>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            illum rerum eveniet quisquam maiores eum perspiciatis aut tenetur
            cum saepe.
          </h1>
          <div className="flex">
            <img
              src={clientdotimg1}
              alt="error"
              className="mt-5 w-[15px] border mr-3"
            />
            <img
              src={clientdotimg2}
              alt="error"
              className="mt-5 w-[15px] mr-5 "
            />
            <img
              src={clientdotimg2}
              alt="error"
              className="mt-5 w-[15px] mr-5"
            />
            <img
              src={clientdotimg2}
              alt="error"
              className="mt-5 w-[15px] mr-5"
            />
            <img
              src={clientdotimg2}
              alt="error"
              className="mt-5 w-[15px] mr-5"
            />
          </div>
        </div>
        <div className="w-[40%] relative">
          <img src={clientgroupimg} alt="" className="w-[500px] " />
          <img src={clientbgcircle} alt="" className="absolute bottom-[20%] z-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default Client;
