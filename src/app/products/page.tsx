import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ShoesCard {
    image: string;
    subTitle: string;
    title: string;
    para1: string;
    para2: string;
    price: string;
}

const ProductsPage = () => {
    const shoesData: ShoesCard[] = [
        {
            image: '/images/card1.png',
            subTitle: 'Just In',
            title: "Nike Air Force 1 Mid '07",
            para1: "Men's Shoes",
            para2: '1 Colour',
            price: 'MRP : ₹ 10 795.00',
        },
        {
            image: '/images/card2.png',
            subTitle: 'Just In',
            title: 'Nike Court Vision Low Next Nature',
            para1: "Men's Shoes",
            para2: '1 Colour',
            price: 'MRP : ₹ 4 995.00',
        },
        {
            image: '/images/card3.png',
            subTitle: 'Just In',
            title: 'Nike Air Force 1 PLT.AF.ORM',
            para1: "Women's Shoes",
            para2: '3 Colours',
            price: 'MRP : ₹ 8 695.00',
        },
        {
            image: '/images/card4.png',
            subTitle: 'Just In',
            title: 'Nike Air Force 1 React',
            para1: "Men's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 13 295.00',
        },
        {
            image: '/images/card5.png',
            subTitle: 'Promo Exclusion',
            title: 'Air Jordan 1 Elevate Low',
            para1: "Women's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 11 895.00',
        },
        {
            image: '/images/card6.png',
            subTitle: 'Just In',
            title: 'Nike Standard Issue',
            para1: "Women's Basketball Jersey",
            para2: '1 Colours',
            price: 'MRP : ₹ 2 895.00',
        },
        {
            image: '/images/card7.png',
            subTitle: 'Promo Exclusion',
            title: 'Nike Dunk Low Retro SE',
            para1: "Men's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 9 695.00',
        },
        {
            image: '/images/card8.png',
            subTitle: 'Sustainable Materials',
            title: 'Nike Dri-FIT UV Hyverse',
            para1: "Men's Short-Sleeve Graphic Fitness Top",
            para2: '1 Colours',
            price: 'MRP : ₹ 2 495.00',
        },
        {
            image: '/images/card9.png',
            subTitle: 'Just In',
            title: 'Nike Standard Issue',
            para1: "Women's Basketball Jersey",
            para2: '1 Colours',
            price: 'MRP : ₹ 2 895.00',
        },
        {
            image: '/images/card10.png',
            subTitle: 'Just In',
            title: 'Nike Dri-FIT Ready',
            para1: "Men's Short-Sleeve Fitness Top",
            para2: '3 Colours',
            price: 'MRP : ₹ 2 495.00',
        },
        {
            image: '/images/card11.png',
            subTitle: 'Just In',
            title: 'Nike One Leak Protection: Period',
            para1: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
            para2: '2 Colours',
            price: 'MRP : ₹ 3 395.00',
        },
        {
            image: '/images/card12.png',
            subTitle: 'Just In',
            title: 'Nike Air Force 1 LV8 3',
            para1: "Older Kids' Shoe",
            para2: '1 Colours',
            price: 'MRP : ₹ 7 495.00',
        },
        {
            image: '/images/card13.png',
            subTitle: 'Just In',
            title: 'Nike Blazer Low Platform',
            para1: "Women's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 8 195.00',
        },
        {
            image: '/images/card14.png',
            subTitle: 'Just In',
            title: 'Nike Air Force 1 LV8 3',
            para1: "Women's Shoe",
            para2: '2 Colours',
            price: 'MRP : ₹ 8 195.00',
        },
        {
            image: '/images/card15.png',
            subTitle: 'Just In',
            title: 'Nike Pro Dri-FIT',
            para1: "Men's Tight-Fit Sleeveless Top",
            para2: '1 Colours',
            price: 'MRP : ₹ 1 495.00',
        },
        {
            image: '/images/card16.png',
            subTitle: 'Just In',
            title: 'Nike Dunk Low Retro',
            para1: "Men's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 8 695.00',
        },
        {
            image: '/images/card17.png',
            subTitle: 'Just In',
            title: 'Nike Air Max SC',
            para1: "Women's Shoes",
            para2: '2 Colours',
            price: 'MRP : ₹ 5 995.00',
        },
        {
            image: '/images/card18.png',
            subTitle: 'Just In',
            title: 'Nike Dri-FIT UV Miler',
            para1: "Men's Short-Sleeve Running Top",
            para2: '1 Colours',
            price: 'MRP : ₹ 1 695.00',
        },
        {
            image: '/images/card19.png',
            subTitle: 'Just In',
            title: 'Nike Air Max SYSTM',
            para1: "Older Kids' Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 6 495.00',
        },
        {
            image: '/images/card20.png',
            subTitle: 'Just In',
            title: 'Nike Alate All U',
            para1: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
            para2: '1 Colours',
            price: 'MRP : ₹ 2 195.00',
        },
        {
            image: '/images/card21.png',
            subTitle: 'Just In',
            title: 'Nike Court Legacy Lift',
            para1: "Women's Shoes",
            para2: '3 Colours',
            price: 'MRP : ₹ 7 495.00',
        },
        {
            image: '/images/card22.png',
            subTitle: 'Just In',
            title: 'Nike Swoosh',
            para1: "Women's Medium-support Padded Sports Bra Tank",
            para2: '2 Colours',
            price: 'MRP : ₹ 3 095.00',
        },
        {
            image: '/images/card23.png',
            subTitle: 'Just In',
            title: 'Nike SB Zoom Janoski OG+',
            para1: "Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 8 595.00',
        },
        {
            image: '/images/card24.png',
            subTitle: 'Just In',
            title: 'Nike Dri-FIT Run Division Rise 365',
            para1: "Men's Running Tank",
            para2: '2 Colours',
            price: 'MRP : ₹ 3 495.00',
        },
        {
            image: '/images/card25.png',
            subTitle: 'Just In',
            title: 'Nike Dri-FIT Challenger',
            para1: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            para2: '1 Colours',
            price: 'MRP : ₹ 2 495.00',
        },
        {
            image: '/images/card26.png',
            subTitle: 'Just In',
            title: 'Jordan Series ES',
            para1: "Men's Shoes",
            para2: '2 Colours',
            price: 'MRP : ₹ 7 495.00',
        },
        {
            image: '/images/card27.png',
            subTitle: 'Just In',
            title: 'Nike Outdoor Play',
            para1: "Older Kids' Oversized Woven Jacket",
            para2: '1 Colours',
            price: 'MRP : ₹ 3 895.00',
        },
        {
            image: '/images/card28.png',
            subTitle: 'Just In',
            title: 'Nike Sportswear Trend',
            para1: "Older Kids' (Girls') High-waisted Woven Shorts",
            para2: '2 Colours',
            price: 'MRP : ₹ 2 495.00',
        },
        {
            image: '/images/card29.png',
            subTitle: 'Just In',
            title: 'Nike Dri-FIT Run Division Rise 365',
            para1: "Women's Shoes",
            para2: '1 Colours',
            price: 'MRP : ₹ 8 595.00',
        },
        {
            image: '/images/card30.png',
            subTitle: 'Just In',
            title: 'Nike SB Force 58',
            para1: "Skate Shoe",
            para2: '1 Colours',
            price: 'MRP : ₹ 5 995.00',
        },
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
                {/* Left Header: New */}
                <h3 className="font-bold text-xl">New (500)</h3>

                {/* Right Header: Filters and Sort */}
                <div className="flex items-center gap-4">
                    <h3 className="cursor-pointer text-gray-600">Hide Filters</h3>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/images/filter.png" alt="filter" width={24} height={24} />
                        <h3 className="text-gray-600">Sort By</h3>
                        <Image src="/images/arrow.png" alt="sort-arrow" width={14} height={14} />
                    </div>
                </div>
            </div>

            {/* Sidebar and Products Grid */}
            <div className="flex flex-col-reverse sm:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full sm:w-1/6">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer hover:underline">Shoes</li>
                        <li className="cursor-pointer hover:underline">Sports Bras</li>
                        <li className="cursor-pointer hover:underline">Tops & T-Shirts</li>
                        <li className="cursor-pointer hover:underline">Hoodies & Sweatshirts</li>
                        <li className="cursor-pointer hover:underline">Jackets</li>
                        <li className="cursor-pointer hover:underline">Trousers & Tights</li>
                        <li className="cursor-pointer hover:underline">Shorts</li>
                        <li className="cursor-pointer hover:underline">Tracksuits</li>
                        <li className="cursor-pointer hover:underline">Jumpsuits & Rompers</li>
                        <li className="cursor-pointer hover:underline">Skirts & Dresses</li>
                        <li className="cursor-pointer hover:underline">Socks</li>
                        <li className="cursor-pointer hover:underline w-[101.57px]">Accessories & Equipment</li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-10">
                        <div className='flex items-center justify-between'>
                            <h3 className='font-bold'>Gender</h3>
                            <Image
                                src={"/images/up-arrow.png"}
                                alt='up-arrow'
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className='flex flex-col items-start justify-start gap-4'>
                            <div className='flex items-start justify-start gap-4'>
                                <Image
                                    src={"/images/square.png"}
                                    alt='up-arrow'
                                    width={20}
                                    height={20}
                                />
                                <h3>Men</h3>
                            </div>
                            <div className='flex items-start justify-start gap-4'>
                                <Image
                                    src={"/images/square.png"}
                                    alt='up-arrow'
                                    width={20}
                                    height={20}
                                />
                                <h3>Women</h3>
                            </div>
                            <div className='flex items-start justify-start gap-4'>
                                <Image
                                    src={"/images/square.png"}
                                    alt='up-arrow'
                                    width={20}
                                    height={20}
                                />
                                <h3>Unisex</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-10'>
                        <h3 className='font-bold'>Gender</h3>
                        <Image
                            src={"/images/up-arrow.png"}
                            alt='up-arrow'
                            width={14}
                            height={14}
                        />
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4'>
                        <div className='flex items-start justify-start gap-4'>
                            <Image
                                src={"/images/square.png"}
                                alt='up-arrow'
                                width={20}
                                height={20}
                            />
                            <h3>Boys</h3>
                        </div>
                        <div className='flex items-start justify-start gap-4'>
                            <Image
                                src={"/images/square.png"}
                                alt='up-arrow'
                                width={20}
                                height={20}
                            />
                            <h3>Girls</h3>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-10'>
                        <h3 className='font-bold'>Shop By Price</h3>
                        <Image
                            src={"/images/up-arrow.png"}
                            alt='up-arrow'
                            width={14}
                            height={14}
                        />
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4'>
                        <div className='flex items-start justify-start gap-4'>
                            <Image
                                src={"/images/square.png"}
                                alt='up-arrow'
                                width={20}
                                height={20}
                            />
                            <h3>Under ₹ 2 500.00</h3>
                        </div>
                        <div className='flex items-start justify-start gap-4'>
                            <Image
                                src={"/images/square.png"}
                                alt='up-arrow'
                                width={20}
                                height={20}
                            />
                            <h3>₹ 2 501.00 - ₹ 7 500.00</h3>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
                    {shoesData.map((shoe, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <Link href={"/products/product-detail"}>
                                <Image
                                    src={shoe.image}
                                    alt={shoe.title}
                                    width={300}
                                    height={300}
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </Link>
                            <div className="mt-4">
                                <h4 className="font-semibold text-lg">{shoe.title}</h4>
                                <p className="text-gray-600">{shoe.para1}</p>
                                <p className="text-gray-600">{shoe.para2}</p>
                                <p className="text-gray-800 mt-2">{shoe.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;