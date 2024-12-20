import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Good: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-4 px-4 text-center">
        <h1 className="text-[36px] md:text-[54px] font-bold mt-8">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 max-w-[600px]">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className="flex items-center justify-center">
          <Link href={"/products"}>
            <button className="text-white rounded-full bg-black px-6 py-2 md:px-8 md:py-3">
              Find Your Shoe
            </button>
          </Link>
        </div>
      </div>

      {/* Gear Up Section */}
      <h3 className="text-[20px] md:text-[23px] font-bold ml-4 mt-12">Gear Up</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-96 px-4 mt-6">
        <div className="flex items-center gap-4">
          <h4 className="text-[18px] font-medium">Shop Mens</h4>
          <Image src="/images/arrow.svg" alt="arrow" height={24} width={24} />
          <Image src="/images/circle-arrow.svg" alt="circle-arrow" height={48} width={48} />
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-[18px] font-medium">Shop Womens</h4>
          <Image src="/images/arrow.svg" alt="arrow" height={24} width={24} />
          <Image src="/images/circle-arrow.svg" alt="circle-arrow" height={48} width={48} />
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap justify-around gap-6 px-4 mt-12">
        {/* Men's Products */}
        <div className="flex flex-col items-center max-w-[300px]">
          <Image src="/images/shirt.png" alt="men-shirt" height={300} width={300} className="object-cover" />
          <div className="flex items-center justify-between w-full mt-2">
            <h3 className="font-bold text-[18px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
            <span className="font-bold text-[16px]">₹ 3,895</span>
          </div>
          <p className="text-gray-600 text-center mt-1">Mens Short-Sleeve Running Top</p>
        </div>
        <div className="flex flex-col items-center max-w-[300px]">
          <Image src="/images/pent.png" alt="men-shorts" height={300} width={300} className="object-cover" />
          <div className="flex items-center justify-between w-full mt-2">
            <h3 className="font-bold text-[18px]">Nike Dri-FIT Challenger</h3>
            <span className="font-bold text-[16px]">₹ 2,495</span>
          </div>
          <p className="text-gray-600 text-center mt-1">Mens 18cm (approx.) 2-in-1 Versatile Shorts</p>
        </div>

        {/* Women's Products */}
        <div className="flex flex-col items-center max-w-[300px]">
          <Image src="/images/w-shirt.png" alt="women-shirt" height={300} width={300} className="object-cover" />
          <div className="flex items-center justify-between w-full mt-2">
            <h3 className="font-bold text-[18px]">Nike Dri-FIT ADV Run Division</h3>
            <span className="font-bold text-[16px]">₹ 5,295</span>
          </div>
          <p className="text-gray-600 text-center mt-1">Womens Long-Sleeve Running Top</p>
        </div>
        <div className="flex flex-col items-center max-w-[300px]">
          <Image src="/images/w-pent.png" alt="women-leggings" height={300} width={300} className="object-cover" />
          <div className="flex items-center justify-between w-full mt-2">
            <h3 className="font-bold text-[18px]">Nike Fast</h3>
            <span className="font-bold text-[16px]">₹ 3,795</span>
          </div>
          <p className="text-gray-600 text-center mt-1">
            Womens Mid-Rise 7/8 Running Leggings with Pockets
          </p>
        </div>
      </div>

      {/* Don't Miss Section */}
      <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold mt-24 ml-4 sm:ml-6 md:ml-10">
        Dont Miss
      </h3>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-6">
        <Image
          src="/images/miss.png"
          alt="dont-miss"
          width={1344}
          height={700}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

    </>
  );
};

export default Good;