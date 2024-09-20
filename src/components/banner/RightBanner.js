import React from 'react'
import { thou } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] z-10 rounded-full p-5"
        src={thou}
        alt="ThouImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] rounded-full bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center "></div>
    </div>
  );
}

export default RightBanner