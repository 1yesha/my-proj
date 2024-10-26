"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ayesha Saleem",
    designation: "Content writer",
    image: "/Ayesha.jpeg"
    
  },
  {
    id: 2,
    name: "Misbah Arshad",
    designation: "web developmennt",
    image:"/images.jpeg"
  },
 
];

export function cooltooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items ={people} />
    </div>
  );
}

export default cooltooltip