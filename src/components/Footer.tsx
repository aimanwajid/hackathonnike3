import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-[#7E7E7E] mt-16">
      {/* Top Section */}
      <div className="flex flex-wrap gap-10 justify-around py-10 px-4 sm:px-10">
        {/* Column 1 */}
        <div className="w-full sm:w-auto flex flex-col gap-6">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-white">Find A Store</h3>
          <ul className="flex flex-col gap-4 list-none text-white">
            <li>Become A Member</li>
            <li>Sign Up for Email</li>
            <li>Send Us Feedback</li>
            <li>Student Discounts</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-auto flex flex-col gap-6">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-white">Get Help</h3>
          <ul className="flex flex-col gap-4 list-none">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-auto flex flex-col gap-6">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-white">About Nike</h3>
          <ul className="flex flex-col gap-4 list-none">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="w-full sm:w-auto flex justify-center items-start mt-6 sm:mt-0">
          <Image
            src="/images/social-icon.png"
            alt="Nike Social Media Icons"
            width={250}
            height={30}
            className="max-w-full"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="flex flex-wrap justify-between items-center px-4 py-4">
          {/* Location and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Image
              src="/images/location.png"
              alt="Location Icon"
              width={60}
              height={15}
            />
            <span className="text-sm">© 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm mt-4 sm:mt-0">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;