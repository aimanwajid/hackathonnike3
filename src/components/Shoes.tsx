import React from 'react';
import Image from 'next/image';

const Shoes = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-14 gap-6 px-4">
                {/* First Look Label */}
                <span className="text-gray-700 font-medium uppercase tracking-wide">
                    First Look
                </span>

                {/* Main Heading */}
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
                    Nike Air Max Pulse
                </h1>

                {/* Description Paragraph */}
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center max-w-[600px]">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —
                    designed to push you past your limits and help you go to the max.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-white">
                    <button className="bg-black rounded-full px-4 py-2 text-sm sm:w-auto">
                        Notify Me
                    </button>
                    <button className="bg-black rounded-full px-4 py-2 text-sm sm:w-auto">
                        Shop Air Max
                    </button>
                </div>
            </div>

            {/* Best of Air Max Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mx-4 mt-14">
                <h3 className="text-xl font-bold mb-4 sm:mb-0">Best of Air Max</h3>
                <div className="flex items-center gap-6">
                    <h4 className="text-gray-600">Shop</h4>
                    <Image src="/images/arrow.svg" alt="arrow" height={24} width={24} />
                    <Image src="/images/circle-arrow.svg" alt="arrow" height={48} width={48} />
                </div>
            </div>

            {/* Shoes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 mt-8">
                {[...Array(3)].map((_, index) => (
                    <div className="flex flex-col" key={index}>
                        <Image
                            src={`/images/shoes${index + 1}.png`}
                            alt={`shoes-${index + 1}`}
                            width={441.36}
                            height={441.36}
                            className="mx-auto"
                        />
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-lg">Nike Air Max Pulse</h2>
                                <p>{index === 0 ? "Women's Shoes" : "Men's Shoes"}</p>
                            </div>
                            <span className="font-bold text-lg">
                                ₹ {index === 2 ? "16 995" : "13 995"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

           {/* Featured Section */}
<h1 className="text-xl sm:text-2xl font-bold mt-16 ml-4">Featured</h1>
<div className="w-full px-4 sm:px-8 lg:px-16 mx-auto mt-8 max-w-screen-xl">
  <Image
    src="/images/featured-img.png"
    alt="featured-image"
    width={1344}
    height={700}
    className="rounded-lg w-full h-auto"
  />
</div>

        </>
    );
};

export default Shoes;