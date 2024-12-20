import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-around px-4 sm:px-8 lg:px-16 gap-8 lg:gap-12 mt-14">
      {/* Left Section */}
      <div className="w-full lg:w-2/3">
        {/* Free Delivery */}
        <div className="w-full lg:w-[717px] bg-[#F7F7F7] p-4 rounded-lg mb-6">
          <span className="font-bold block mb-2">Free Delivery</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-5">
            <span>Applies to orders of ₹ 14,000.00 or more.</span>
            <span className="underline">View details</span>
          </div>
        </div>

        {/* Bag Header */}
        <h3 className="font-bold text-[22px] text-black mb-4">Bag</h3>

        {/* Bag Items */}
        <div className="flex flex-col gap-10">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Image
              src="/images/man-cart.png"
              alt="man-cart"
              width={150}
              height={150}
              className="rounded"
            />
            <div className="text-[#757575]">
              <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-20">
                <h1 className="font-bold text-black">Nike Dri-FIT ADV TechKnit Ultra</h1>
                <span className="text-black">MRP: ₹ 3,895.00</span>
              </div>
              <p>Mens Short-Sleeve Running Top</p>
              <p>Ashen Slate/Cobalt Bliss</p>
              <div className="flex items-center gap-4 mt-2">
                <span>Size: L</span>
                <span>Quantity: 1</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image src="/images/heart.png" alt="Wishlist" width={24} height={24} />
                <Image src="/images/delete.png" alt="Delete" width={24} height={24} />
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Image
              src="/images/cart-shoes.png"
              alt="cart-shoes"
              width={150}
              height={150}
              className="rounded"
            />
            <div className="text-[#757575]">
              <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-20">
                <h1 className="font-bold text-black">Nike Air Max 97 SE</h1>
                <span className="text-black">MRP: ₹ 16,995.00</span>
              </div>
              <p>Mens Shoes</p>
              <p>Flat Pewter/Light Bone/Black/White</p>
              <div className="flex items-center gap-4 mt-2">
                <span>Size: 8</span>
                <span>Quantity: 1</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image src="/images/heart.png" alt="Wishlist" width={24} height={24} />
                <Image src="/images/delete.png" alt="Delete" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-[#F7F7F7] p-6 rounded-lg text-[#757575]">
        <h1 className="text-[21px] font-bold text-black mb-6">Summary</h1>
        <div className="flex items-center justify-between mb-4">
          <span>Subtotal</span>
          <span>₹ 20,890.00</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <div className="flex items-center justify-between mb-8">
          <span>Total</span>
          <span>₹ 20,890.00</span>
        </div>
        <Link href={"/checkout"}>
        <button className="w-full h-[60px] bg-black text-white rounded-full">Member Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default page;