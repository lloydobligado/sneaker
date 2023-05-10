import React from 'react'

const AddtoCart = () => {
  return (
    <button className='2xl:w-[273px] 2xl:h-[54px] flex justify-center items-center font-bold 2xl:text-base md:w-[218.4px] h-[43.2px] text-[12.8px] leading-[19.2px] w-full md:m-0 mt-[20px] text-white bg-[#FF7D1A] rounded-[10px] hover:shadow-lg hover:shadow-[#fbd8bf]'>
        <img className='2xl:mr-4 mr-[12.8px]' src="src/assets/images/icon-cart.svg" alt="cart icon"  /> 
        Add to Cart
    </button>
  )
}

export default AddtoCart