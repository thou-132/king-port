import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
       
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize sm:font-size:0.7rem">Mohammed Thoufeeq</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am Mohammed Thoufeeq, a driven and adaptable professional with a strong commitment to continuous learning and excellence. I thrive on challenges and am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am poised to make meaningful contributions and achieve significant outcomes.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner