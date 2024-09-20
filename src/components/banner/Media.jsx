import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <FaInstagram   /> 
           
            </span>
            <span className="bannerIcon">
             <FaGithub />
            </span>
            <span className="bannerIcon">
           <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <TbBrandJavascript />
            </span>
            <span className="bannerIcon">
              <IoLogoNodejs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media