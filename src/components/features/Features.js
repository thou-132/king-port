import React,{useEffect} from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import aos from 'aos';
import 'aos/dist/aos.css'
const Features = () => {
  useEffect(()=>{
    aos.init({duration:2000})
  },[])
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
      data-aos='zoom-in'
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-100">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
