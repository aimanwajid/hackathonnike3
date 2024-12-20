import React from 'react'
import Image from 'next/image'

const LoginPage = () => {
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
                    YOUR ACCOUNT FOR EVERYTHING NIKE
                </h1>
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Email address'
                />
                <input
                    className='w-full md:w-[324px] h-[40px] border border-[#E5E5E5] pl-4 mb-2'
                    placeholder='Password'
                />
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-[324px] mb-2'>
                    <div className='flex items-center justify-start gap-3'>
                        <Image
                            src="/images/check.png"
                            alt="logo"
                            width={20}
                            height={20}
                        />
                        <span>Keep me signed in</span>
                    </div>
                    <span className='text-sm md:text-base'>Forgotten your password?</span>
                </div>
                <p className='text-center text-[11px] w-full md:w-[279.31px] mb-2'>
                    By logging in, you agree to Nikes <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use.</span>
                </p>
                <button className='w-full md:w-[324px] h-[40px] bg-black text-white rounded mt-4'>
                    SIGN IN
                </button>
                <p className='text-center mt-2'>
                    Not a Member? <span className='text-black underline'>Join Us.</span>
                </p>
            </div>
        </>
    )
}

export default LoginPage