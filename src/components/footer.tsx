import React from 'react'

const footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
 <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg-px-8'>
    <div>
        <h3 className='text-lg font-bold text-white mb-4 '>about us</h3>
        <p>With a friendly approach and a focus on collaboration, we’re here to help you turn your ideas into reality. </p>
        </div>           
    <div>
    <h3 className='text-lg font-bold text-white mb-4 '>links </h3>
<ul>
    <li><a href="/" className='hover:text-slate-300'></a></li>
    <li><a href="/course"className='hover:text-slate-300'>courses</a></li>
    <li><a href="/about"className='hover:text-slate-300'></a>about</li>
    <li><a href="/contact"className='hover:text-slate-300'>contact</a></li>
</ul>
</div>
<div>
    <h3 className='text-lg font-bold text-white mb-4 '>follow </h3>
<ul>
    <li><a href="/" className='hover:text-slate-300'></a></li>
    <li><a href="/linkedin"className='hover:text-slate-300'>linkedin</a></li>
    <li><a href="/instagram"className='hover:text-slate-300'>instagram</a></li>
    <li><a href="/facebook"className='hover:text-slate-300'>facebook</a></li>
    <li><a href="/github"className='hover:text-slate-300'>github</a></li>
</ul>
</div>
<div>
<h3 className='text-lg font-bold text-white mb-4 '>contact us </h3>
<p>email <a href="/.mail@gmail.com">ayeshasaleem786.com@gmail.com</a></p>
<p>phone <span className='hover:text-white'>0300 8764532</span></p>
</div>
</div>
   
<p className='text-center'> lorem ipsum dolar, sit amet consectetur adipisicing elit.undo</p>
    </footer>
  )
}

export default footer