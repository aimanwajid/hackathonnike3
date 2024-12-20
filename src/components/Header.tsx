"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        <Image
          src="/images/header-logo.svg"
          alt="header-logo"
          width={40}
          height={40}
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              Find a Store
            </Link>
          </li>
          <div className="hidden md:block border-l border-gray-300 h-5"></div>
          <li>
            <Link href="/contact-us" className="text-gray-700 hover:text-blue-500">
              Help
            </Link>
          </li>
          <div className="hidden md:block border-l border-gray-300 h-5"></div>
          <li>
            <Link href="/join-us" className="text-gray-700 hover:text-blue-500">
              Join Us
            </Link>
          </li>
          <div className="hidden md:block border-l border-gray-300 h-5"></div>
          <li>
            <Link href="login" className="text-gray-700 hover:text-blue-500">
              Sign In
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="space-y-4 px-4">
            <li>
              <Link href="#" className="block text-gray-700 hover:text-blue-500">
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="block text-gray-700 hover:text-blue-500">
                Help
              </Link>
            </li>
            <li>
              <Link href="/join-us" className="block text-gray-700 hover:text-blue-500">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="block text-gray-700 hover:text-blue-500">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="hidden md:flex items-center justify-between px-4 py-3 md:px-8">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <ul className="flex space-x-6">
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              Men
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              Women
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              Kids
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              Sale
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-700 hover:text-blue-500">
              SNKRS
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="w-[180px] h-[40px] bg-gray-100 flex items-center px-4 rounded-lg">
            <Image
              src="/images/search-icon.svg"
              alt="Search Icon"
              width={20}
              height={20}
            />
            <span className="text-gray-500 ml-2">Search</span>
          </div>
          <Image
            src="/images/heart-icon.svg"
            alt="Wishlist"
            width={24}
            height={24}
          />
          <Image
            src="/images/briefcase-icon.svg"
            alt="Cart"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;