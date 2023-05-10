import React from 'react'
import ProductPhotos from '../utils/product-photos'

const ProductPictures = () => {

  const ProdPhotos = ProductPhotos.map(productPhoto => {
    return (
        <img className='2xl:w-[88px] 2xl:h-[88px] w-[70.4px] h-[70.4px] rounded-[10px] hover:opacity-50 cursor-pointer' key={productPhoto.id} src={productPhoto.image} alt={productPhoto.name} />
    )
  })
  return (
    <>
        <div className='2xl:w-[447px] 2xl:h-[567px] w-[357.6px] h-[453.6px] md:mt-[50px] md:mb-[50px] md:block hidden'>
            <img className='rounded-[15px] lg:cursor-pointer' src="src/assets/images/image-product-1.jpg" alt="image-product-1" />
            <div className='flex justify-between 2xl:mt-[32px] mt-[25.6px]'>
                { ProdPhotos }
            </div>
        </div>
        <div className='md:hidden block'>
            <img src="src/assets/images/image-product-1.jpg" alt="image-product-1" />
        </div>
    </>
  )
}

export default ProductPictures