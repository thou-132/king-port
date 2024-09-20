import React,{useEffect} from 'react'
import Title from '../layouts/Title'
import { Project1, Project2, Project3,Project4,Project5,Project6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import aos from 'aos';
import 'aos/dist/aos.css'
const Projects = () => {
  useEffect(()=>{
    aos.init({duration:2000})
  },[])
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
data-aos='zoom-in'  
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CRUD Application"
          des="CRUD operations in React JS involve creating, reading, updating, and deleting data using components, state management, and API calls to manage application data."
          src={Project2}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" An e-commerce platform built with React JS provides a dynamic user interface for product browsing, shopping cart management, and secure checkout using state management and API integrations.!"
          src={Project1}
        />
        <ProjectsCard
          title="Wheather App"
          des=" A weather app built with React JS fetches real-time weather data via APIs and dynamically displays forecasts based on user input or geolocation.!"
          src={Project3}
        />
        <ProjectsCard
          title="Intuit Mailchimp CLONE"
          des=" Building a website with React JS enables the creation of dynamic, component-based user interfaces with efficient rendering and seamless navigation!"
          src={Project5}
        />
        <ProjectsCard
          title="Todo List"
          des=" A to-do list app built with a frontend (e.g., React) and Node.js backend allows users to manage tasks with real-time updates, persistent storage, and smooth user interaction!"
          src={Project6}
        />
        <ProjectsCard
          title="Kitkat Website Clone"
          des=" Building a dashboard with a frontend (e.g., React) and Node.js backend enables real-time data visualization, user interaction, and seamless data management for insights and monitoring!"
          src={Project4}
        />
      </div>
    </section>
  );
}

export default Projects