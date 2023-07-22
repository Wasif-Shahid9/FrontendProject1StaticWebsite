import React from "react";
import agencyimg from '../../assests/agencyimg.png'
import agencyrectanglebg from "../../assests/agencyrectangle.png";
import agencycirclebg from "../../assests/agencycircle.png";
import clientplaybutton from "../../assests/clientplaybutton.svg";
const Agency = () => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-around mt-[100px]">
      <div className="img w-[100%]  relative">
        <img
          src={agencycirclebg}
          alt="error"
          className="absolute bottom-[0%] right-[0] z-[-1] "
        />
        <img src={agencyimg} alt="error" />
        <img src={clientplaybutton} alt="" className="absolute top-[40%] left-[40%]  z-[11]	"  />
      </div>
      <div className="w-[100%] flex flex-col items-center relative">
        <img
          src={agencyrectanglebg}
          alt="error"
          className="absolute top-[-4%] left-[1%] z-[-1]"
        />
        <p className="text-[38px] w-[80%] font-bold	">
          Great Digital Product <br /> Agency Since 20000
        </p>
        <p className="mt-4 w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          laborum, enim et voluptatibus neque sunt vel odit eum eos hic nam
          assumenda accusamus sed nesciunt, aliquid officia laboriosam ex.
          Praesentium.
        </p>
      </div>
    </div>
  );
};

export default Agency;
