"use client";
import React, { useState } from "react";
import {   Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
function Navbar ({ className }: { className?: string }) {
const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  rounded-full bg-black text-white",className)}>
        <Menu  setActive={setActive}>
        <Link href = "/" >
        <MenuItem setActive={setActive}  active={active} item="Home"> </MenuItem>
           </Link>
           <Link href="courses">
           <MenuItem setActive={setActive}  active={active} item="our courses"></MenuItem>
          </Link>
          <Link href ="/contact">
           <MenuItem setActive={setActive}  active={active} item="contact"></MenuItem>
          </Link> 
        </Menu> 
    </div>
  )
}
export default Navbar;

