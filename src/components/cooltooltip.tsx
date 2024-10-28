"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Misbah Arshad",
    designation: "web developmennt",
    image:"/images.jpeg"
  },
  {
    id: 2,
    name: "Ayesha Saleem",
    designation: "Content writer",
    image: "/Ayesha.jpg"
    
  },
  
 
];

 function cooltooltip() {
  return (
   <div className="relative h-[40rem]  flex items-center justify-center  "
   style={{ backgroundImage: 'url("/logo.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' 
     }}>
    <div className="w-full max-w-7xl mx-auto flex 
    flex-col items-center justify-center h-full">
    <h2 className="text-2xl md:text-4xl lg:text-7xl
    text-white font-bold text-center mb-8">Meet Our Instructors</h2>
       <p className="text-base md:text-lg text-white text-center
       mb-4" >Discover the talented professionals who will guide your coding journey</p>
       <div className="flex flex-row items-center justify-center mb-10 w-full">
       <AnimatedTooltip items ={people} /></div>
       </div>
       </div>
  );
}

export default cooltooltip