'use client'
import FeaturedCourses from "@/components/featuredCourses"; 
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseus from "@/components/WhyChooseus";

import Cooltooltip from '@/components/cooltooltip';
import MusicschoolTestimonials from "@/components/TestimonialCard";

import Footer from "@/components/footer";

import React from 'react'
import UpcommingWebinar from "@/components/UpcommingWebinar";

const page = () => {
  return (
    <main className= 'min-h-screen bg-black/[0.96] bg-grid-white/[0.o7]'>
<HeroSection/>
<Navbar/>

<FeaturedCourses/>
<WhyChooseus/>
<MusicschoolTestimonials/>
<UpcommingWebinar/>


<Cooltooltip/> 
<Footer/>

 </main>
 
)
}

export default page