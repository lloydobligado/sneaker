import React from 'react'
import ProductPictures from '../components/ProductPictures'
import ProductDetails from '../components/ProductDetails'

const Hero = ({cartItems, setCartItems, handleAddItem}) => {
  return (
    <section className='md:flex block justify-center items-center'>
        <ProductPictures />
        <ProductDetails cartItems={cartItems} setCartItems={setCartItems} handleAddItem={handleAddItem}/>
    </section>
  )
}

export default Hero