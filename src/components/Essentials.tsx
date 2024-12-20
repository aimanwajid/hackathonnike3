import React from 'react';
import Image from 'next/image';

interface SectionProps {
    title: string;
    items: string[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
    <div className="flex flex-col gap-4 text-center sm:text-left">
        <h3 className="text-[18px] md:text-[20px] font-bold">{title}</h3>
        <ul className="list-none flex flex-col gap-2">
            {items.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
            ))}
        </ul>
    </div>
);

const Essentials: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 px-4">
                <h1 className="text-[36px] md:text-[54px] font-bold mt-8 text-center">FLIGHT ESSENTIALS</h1>
                <p className="text-center text-gray-600 max-w-[600px]">
                    Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                </p>
                <div className="flex items-center justify-center">
                    <button className="text-white rounded-full bg-black w-[100px] h-[40px] md:w-[120px] md:h-[50px]">Shop</button>
                </div>
            </div>

            <h3 className="text-[20px] md:text-[23px] font-bold ml-4 mt-8">The Essentials</h3>
            <div className="flex flex-wrap justify-around gap-4 px-4">
                <Image
                    src="/images/first.png"
                    alt="first-img"
                    width={440}
                    height={540}
                    className="w-full sm:w-[300px] md:w-[400px] lg:w-[440px] object-cover"
                />
                <Image
                    src="/images/second.png"
                    alt="second-img"
                    width={440}
                    height={540}
                    className="w-full sm:w-[300px] md:w-[400px] lg:w-[440px] object-cover"
                />
                <Image
                    src="/images/third.png"
                    alt="third-img"
                    width={440}
                    height={540}
                    className="w-full sm:w-[300px] md:w-[400px] lg:w-[440px] object-cover"
                />
            </div>

            <div className="flex flex-wrap justify-evenly gap-10 mt-16 px-4">
                <Section title="Icons" items={["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"]} />
                <Section title="Shoes" items={["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"]} />
                <Section title="Clothing" items={["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"]} />
                <Section title="Kids'" items={["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"]} />
            </div>
        </>
    );
};

export default Essentials;