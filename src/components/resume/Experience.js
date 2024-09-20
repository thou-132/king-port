import React,{useEffect} from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import aos from 'aos';
import 'aos/dist/aos.css'
const Experience = () => {
  useEffect(()=>{
    aos.init({duration:2000})
  },[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  flex flex-col lgl:flex-row gap-10 lgl:gap-20 "
      data-aos='fade-right' 
    >
      <div className="">
        <div className="flex flex-col gap-4 mt-10 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Development"
            subTitle="Kitkat Software Technologies - (Feb 2024 -Present)"
            result="Coimbatore"
            des="I have worked in many live project for my company by using my skills. I was the top performer in every live project."
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      <div>
      
      </div>
    </motion.div>
  );
};

export default Experience;
