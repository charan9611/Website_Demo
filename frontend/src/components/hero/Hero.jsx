import React from 'react';
import banner from '../../assets/images/Banner.png';

const Hero = () => {
  return (
    <div className='mt-8 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-16'>
      {/* Text Section */}
      <div className='w-full order-2 md:w-1/2 mt-12 md:ml-8 md:pr-8 flex flex-col justify-center items-center text-center'>
        <div className='space-y-12'>
          <h1 className='text-4xl text-black font-bold align-middle justify-center mb-8'>
            " Welcome to{" "} <span className='text-black text-8x1'>EXE Factor Analytics Hub</span>, your partner in data-driven insights and expert web development solutions "
          </h1>
          <p className='text-xl text-black'> {/* Changed to text-xl for larger text */}
            At EXE Factor Analytics Hub, we leverage cutting-edge technology and a deep understanding of data analytics to empower businesses with actionable insights. Our team is dedicated to delivering high-quality web development services, ensuring that your digital presence is not only visually appealing but also optimized for performance and scalability.
          </p>
        </div>
      </div>

      {/* Image Section with hover effects */}
      <div className='w-full md:w-1/2 text-white mt-12 md:ml-10 md:mt-0'>
        <img 
          src={banner} 
          className='order-1 w-[550px] h-[550px] rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110' // Adjusted size
          alt="Banner" 
        />
      </div>
    </div>
  );
}

export default Hero;
