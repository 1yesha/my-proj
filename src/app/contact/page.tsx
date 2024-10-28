"use client";
import React from "react";
// Import Label component
import { Input } from "@/components/ui/input"; // Import Input component
import { Meteors}from "@/components/ui/meteors"; // Import the Meteors component
import Footer from '@/components/footer';
const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="-auto h-screen relative absolute  "> {/* Full-screen container */}
      <div className="" /> {/* Full-page gradient */}

      {/* Contact form container */}
      <div className="py-60 relative shadow-xl bg-gray-900 border border-gray-800 w-full h-full overflow-hidden flex flex-col ">
        <div className="w-full h-full    ">
          {/* Optional path or additional content */}
        </div>

        {/* Contact form */}
        <div className="  space-y-10 max-w-md w-full mx-auto rounded-md p-4 shadow-lg bg-white dark:bg-gray-800">
          <h2 className="space-y-4 text-xl font-bold text-gray-800 dark:text-white">Contact Us</h2>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* First Name Input */}
            <div>
              
              <Input id="firstname" type="text" placeholder="Your Name" />
            </div>
            {/* Email Input */}
            <div className="text-slate-900">
              <Input id="email" type="email" placeholder="Your Email" />
            </div>

            {/* Message Input */}
            <div className="text-white" >
            
              <textarea
                id="message"
                rows={1}
                placeholder="Message"
                className="bg-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-whitenp"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Meteor effect at the end of the form */}
        <Meteors number={20} />
      </div>
      <Footer/>
   </div>
  );
};

export default ContactPage;
