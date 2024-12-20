import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center space-y-6 px-4 py-8 md:py-12 lg:py-16 bg-white">
      {/* Hero Text */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Hello Nike App
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base lg:text-lg">
          Download the app to access everything Nike. Get Your Great.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-[1440px] mx-auto">
        <Image
          src="/images/hero-img.png"
          alt="hero-image"
          width={1344}
          height={700}
          className="mx-auto"
        />
      </div> 
    </section>
  );
};

export default HeroSection;