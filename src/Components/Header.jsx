import React from 'react'
import Navbar from './Navbar'
import CarouselComponent from './CarouselComponent';

const Header = () => {
  return (
    <div className="">
      <div className='fixed top-0 z-10 bg-white w-full'>
        <Navbar />
      <hr className="h-[2px] w-full bg-slate-400 mt-16" />
      </div>
      <section className="relative container mx-auto h-screen bg-gray-900 flex items-center justify-center mt-16">
        <div className="w-full">
          <CarouselComponent />
        </div>
      </section>
    </div>
  );
}

export default Header