import React,{useEffect} from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import aos from 'aos';
import 'aos/dist/aos.css'
const Education = () => {

    useEffect(()=>{
      aos.init({duration:2000})
    },[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div data-aos='fade-right'>
        <div className="py-6 lgl:py-12 font-titleFont text-center flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-16 w-full h-[1100px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.com-Computer Application"
            subTitle="Nallamuthu Gounder Mahalingam College (2020 - 2023)"
            result="7.1/10"
            des="I have done a Bachelors degree in Commerce With Computer Application at Nallamuthu Gounder Mahalingam College, Pollachi.Im passed out with a CGPA of 7.01. I have taken courses in Fullstack Development at Kitkat Software Technologies, where I am learning and working on exciting projects with a team of talented developers."
          />
          <ResumeCard
            title="Arts and Computer Application"
            subTitle="Our Lady of Louders Matric Higher Secondary School (2019 - 2020)"
            result="5.9/10"
            des="I completed my class 12 high school education at Our Lady Of Louders Matric Higher Secondary School, Pollachi, where I studied Arts and Computer Application."
          />
          <ResumeCard
            title="SSLC"
            subTitle="vivehandha vidthiyalaya matric Higher Secondary School, (2017 - 2018)"
            result="7/10"
            des="I completed my class 10 high school education at vivehandha vidthiyalaya matric Higher Secondary School, Pollachi, where I studied Mathematics,Science,SocailSciencs and Languages ."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
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
        {/* </div> */}
      {/* </div> */}
    </motion.div>
  );
}

export default Education