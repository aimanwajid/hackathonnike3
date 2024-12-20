import React from 'react'
import Image from 'next/image'

const CheckOutPage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className='flex flex-wrap items-center justify-end gap-4 md:gap-10 p-4 md:p-6'>
                <span className='text-sm md:text-base'>000 800 100 9538</span>
                <Image
                    src='/images/nav-icon1.png'
                    alt='icon1'
                    width={20}
                    height={20}
                />
                <Image
                    src='/images/nav-icon2.png'
                    alt='icon2'
                    width={20}
                    height={20}
                />
            </nav>

            {/* Main Content */}
            <div className='flex flex-col md:flex-row items-start justify-around mt-8 md:mt-16 px-4 md:px-8'>
                {/* Left Section */}
                <div className='w-full md:w-2/3'>
                    <h3 className='font-bold text-lg md:text-xl'>How would you like to get your order?</h3>
                    <p className='text-sm md:text-base text-[#757575] mt-3 leading-relaxed w-full sm:w-[440px]'>
    Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
</p>

                    
                    <div className='w-full md:w-[440px] border border-black rounded-md flex items-center gap-4 pl-3 py-4 my-6'>
                        <Image
                            src='/images/case.png'
                            alt='case'
                            width={24}
                            height={24}
                        />
                        <span>Deliver It</span>
                    </div>

                    {/* Form Section */}
                    <form>
                        <h1 className='font-bold text-lg my-6'>Enter your name and address:</h1>
                        <div className='grid grid-cols-1 gap-4'>
                            <input
                                type='text'
                                placeholder='First Name'
                                className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                            />
                            <input
                                type='text'
                                placeholder='Last Name'
                                className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                            />
                            <input
                                type='text'
                                placeholder='Address Line 1'
                                className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                            />
                            <span className='text-xs'>We do not ship to P.O. boxes</span>
                            <input
                                type='text'
                                placeholder='Address Line 2'
                                className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                            />
                            <input
                                type='text'
                                placeholder='Address Line 3'
                                className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                            />
                            <div className='flex flex-col md:flex-row gap-4'>
                                <input
                                    type='text'
                                    placeholder='Postal Code'
                                    className='w-full md:w-[211px] h-[54px] border border-[#757575] pl-4'
                                />
                                <input
                                    type='text'
                                    placeholder='Locality'
                                    className='w-full md:w-[211px] h-[56px] border border-[#757575] pl-4'
                                />
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <input
                                    type='text'
                                    placeholder='State/Territory'
                                    className='w-full md:w-[211px] h-[54px] border border-[#757575] pl-4'
                                />
                                <input
                                    type='text'
                                    placeholder='Pakistan'
                                    className='w-full md:w-[211px] h-[56px] border border-[#757575] pl-4'
                                />
                            </div>
                        </div>

                        <h1 className='font-bold text-lg mt-8 mb-4'>Whats your contact information?</h1>
                        <input
                            type='text'
                            placeholder='Email'
                            className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                        />
                        <span className='text-xs block mt-2'>A confirmation email will be sent after checkout.</span>
                        
                        <h1 className='font-bold text-lg mt-6'>Whats your PAN?</h1>
                        <input
                            type='text'
                            placeholder='PAN'
                            className='w-full md:w-[440px] h-[56px] border border-[#757575] pl-4'
                        />
                        <span className='text-xs block mt-2'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</span>
                        <div className='flex items-center justify-start gap-4 mt-4'>
    <Image
        src="/images/square.png"
        alt="arrow"
        width={20}
        height={20}
    />
    <span>Save PAN details to Nike Profile</span>
</div>

<div className='flex items-start justify-start gap-4 mt-4'>
    <Image
        src="/images/black-square.png"
        alt="arrow"
        width={20}
        height={20}
    />
    <span className='w-full sm:w-[404.5px]'>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</span>
</div>

<div className='flex items-center justify-center w-full sm:w-[440px] h-[60px] bg-[#F5F5F5] mt-14 rounded-full'>
    <span className='text-[#757575]'>Continue</span>
</div>

<div className='border-b border-[#E5E5E5] w-full sm:w-[440px] mt-8'></div>

<div className='flex items-start justify-start gap-8 flex-col text-[#757575]'>
    <span className='text-black'>Delivery</span>
    <div className='border-b border-[#E5E5E5] w-full sm:w-[440px] mt-4'></div>
    <span>Shipping</span>
    <div className='border-b border-[#E5E5E5] w-full sm:w-[440px] mt-4'></div>
    <span>Billing</span>
    <div className='border-b border-[#E5E5E5] w-full sm:w-[440px] mt-4'></div>
    <span>Payment</span>
</div>

                    </form>
                </div>

                {/* Right Section */}
                <div className='w-full md:w-1/3 mt-8 md:mt-0'>
                    <h1 className='text-lg md:text-xl font-bold text-black'>Summary</h1>
                    <div className='flex items-center justify-between mt-6'>
                        <span>Subtotal</span>
                        <span>₹ 20 890.00</span>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <span>Estimated Delivery & Handling</span>
                        <span>Free</span>
                    </div>
                    <div className='flex items-center justify-between mt-6 font-bold text-black'>
                        <span>Total</span>
                        <span>₹ 20 890.00</span>
                    </div>
                    <h3 className='mt-6 font-bold'>Arrives Mon, 27 Mar - Wed, 12 Apr</h3>

                    <div className='flex items-start justify-start gap-4 mt-4 flex-col sm:flex-row'>
    <Image
        src={"/images/man-cart.png"}
        alt='cart-men'
        width={208}
        height={208}
    />
    <div className='flex items-start flex-col'>
        <h3 className='w-full sm:w-[100.53px] h-[120px] text-black'>Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</h3>
        <span>Qty 1</span>
        <span>Size L</span>
        <span>₹ 3 895.00</span>
    </div>
</div>

<div className='flex items-start justify-start gap-4 mt-4 flex-col sm:flex-row'>
    <Image
        src={"/images/cart-shoes.png"}
        alt='cart-shoes'
        width={208}
        height={208}
    />
    <div className='flex items-start flex-col'>
        <h3 className='w-full sm:w-[99.26px] h-[72px] text-black'>Nike Air Max 97 SE Mens Shoes</h3>
        <span>Qty 1</span>
        <span>Size UK 8</span>
        <span>₹ 16 995.00</span>
    </div>
</div>

                    
                </div>
            </div>
        </>
    )
}

export default CheckOutPage