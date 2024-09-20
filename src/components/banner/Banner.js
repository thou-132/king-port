import React, { useEffect } from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import aos from 'aos';
import 'aos/dist/aos.css'
const Banner = () => {

  useEffect(()=>{
    aos.init({duration:2000})
  },[])

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      data-aos='zoom-in'
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner