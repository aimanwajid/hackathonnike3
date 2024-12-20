import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className='flex items-center justify-center flex-col gap-3 text-[#8D8D8D] px-4 md:px-8 lg:px-16'>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={78.47}
                    height={78.47}
                />
                <h1 className='font-bold text-[18px] text-center text-black max-w-[250px] md:max-w-[350px] lg:max-w-[400px]'>
                    BECOME A NIKE MEMBER
                </h1>
                <p className='max-w-[282.08px] text-center'>
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                </p>
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Email address'
                />
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Password'
                />
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='First Name'
                />
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Last Name'
                />
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Date of Birth'
                />
                <span className='text-[11px] mb-2'>
                    Get a Nike Member Reward every year on your Birthday.
                </span>
                <div className="relative w-full md:w-[324px] mb-2">
                    <input
                        className="w-full h-[40px] border border-[#E5E5E5] pl-4 pr-10"
                        placeholder="Pakistan"
                    />
                    <Image
                        src="/images/arrow.png"
                        alt="arrow"
                        width={20}
                        height={20}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-start gap-4 mb-2'>
                    <input
                        className="w-full md:w-[153.89px] h-[40px] border border-[#E5E5E5] pl-4 pr-10"
                        placeholder="Male"
                    />
                    <input
                        className="w-full md:w-[153.89px] h-[40px] border border-[#E5E5E5] pl-4 pr-10"
                        placeholder="Female"
                    />
                </div>

                <div className='flex items-center justify-start gap-3 mb-2'>
                    <Image
                        src="/images/square.png"
                        alt="logo"
                        width={20}
                        height={20}
                    />
                    <span className='text-[11px] w-full md:w-[247px]'>
                        Sign up for emails to get updates from Nike on products, offers, and your Member benefits
                    </span>
                </div>
                <p className='text-center text-[11px] w-full md:w-[279.31px]'>
                    By creating an account, you agree to Nikes <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use.</span>
                </p>
                <button className='w-full md:w-[324px] h-[40px] bg-black text-white rounded mt-4'>
                    JOIN US
                </button>
                <p className='text-center mt-2'>
                    Already a Member?<span className='text-black underline'> Sign In.</span>
                </p>
            </div>
        </>
    )
}

export default page