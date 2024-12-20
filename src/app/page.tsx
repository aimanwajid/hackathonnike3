import Essentials from '@/components/Essentials'
import Good from '@/components/Good'
import HeroSection from '@/components/HeroSection'
import Shoes from '@/components/Shoes'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <Shoes />
      <Good/>
      <Essentials/>
    </>
  )
}

export default page