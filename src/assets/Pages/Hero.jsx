import React from 'react'
import ProductPictures from '../components/ProductPictures'
import ProductDetails from '../components/ProductDetails'

const Hero = () => {
  return (
    <section className='md:flex block justify-center items-center'>
        <ProductPictures />
        <ProductDetails />
    </section>
  )
}

export default Hero