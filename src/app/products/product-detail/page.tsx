import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductDetailPage = () => {
    return (
        <div className="mt-24 mx-4 sm:mx-12">
            <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8">
                {/* Product Image */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <Image
                        src="/images/main-card.png"
                        alt="main-card"
                        width={653}
                        height={653}
                        className="object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-4 w-full sm:w-1/2">
                    <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl w-[367px]">Nike Air Force 1 PLT.AF.ORM</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 w-full sm:w-3/4 lg:w-2/3">
                        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction, including unique layering and exposed foam accents ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
                    </p>

                    <span className="text-2xl sm:text-3xl font-bold">₹ 8 695.00</span>
                    <button className="w-full sm:w-48 h-12 rounded-full bg-black text-white flex items-center justify-center gap-2 mt-6">
                        <Image
                            src="/images/cart.png"
                            alt="cart-icon"
                            width={29}
                            height={29}
                        />
                        <Link href={"/cart"}>
                        <span>Add To Cart</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage