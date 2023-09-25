import React from 'react'
import Cart from "../../assets/images/icon-cart-light.svg"

const ButtonComponent = ({handleAddItem, title}) => {
  console.log(handleAddItem)
  return (
    <button className='2xl:w-[273px] 2xl:h-[54px] flex justify-center items-center font-bold 2xl:text-base md:w-[218.4px] h-[43.2px] text-[12.8px] leading-[19.2px] w-full md:m-0 mt-[20px] text-white bg-[#FF7D1A] hover:bg-[#d56815] rounded-[10px] hover:shadow-lg hover:shadow-[#fbd8bf] transition duration-300' onClick={handleAddItem}>
        <img className='2xl:mr-4 mr-[12.8px]' src={Cart} alt="cart icon"  /> 
        {title}
    </button>
  )
}

export default ButtonComponent