import React, { useState } from 'react'
import Minus from "../assets/images/icon-minus.svg"
import Plus from "../assets/images/icon-plus.svg"

const BtnGroup = ({handleAddItem}) => {
  const [count, setCount] = useState(0)

  const handleSubtract = () => {
    if (count > 0) {
        setCount(prevCount => prevCount - 1)
    }
  }

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className='2xl:mt-[34px] mt-[27.2px] md:pl-0 pl-10 pr-10 md:flex block items-center w-full'>
        <div className='2xl:w-[157px] 2xl:h-[55px] 2xl:mr-[15px] md:w-[125.6px] w-full h-[44px] mr-[12px] flex justify-between items-center bg-[#F7F8FD] rounded-lg'>
           <button className='2xl:pl-6 2xl:pr-6 h-full flex items-center font-bold 2xl:text-base 2xl:tracking-[.08em] pl-[19.2px] pr-[19.2px] text-[12.8px] leading-[19.2px] tracking-[.064em] text-[#FF7E1B] cursor-pointer'
           onClick={handleSubtract}>
            <img src={Minus} alt="subtract" />
           </button>
           <h2 className='h-full flex items-center font-bold 2xl:text-base 2xl:tracking-[.08em] text-[12.8px] leading-[19.2px] tracking-[.064em] text-black'>{ count }</h2>
           
           <button className='2xl:pl-6 2xl:pr-6  h-full flex items-center font-bold 2xl:text-base 2xl:tracking-[.08em]  pl-[19.2px] pr-[19.2px] text-[12.8px] leading-[19.2px] tracking-[.064em] text-[#FF7E1B] cursor-pointer' onClick={handleAdd}>
            <img src={Plus} alt="plus" />
          </button>
        </div>

        <ButtonComponent handleAddItem={handleAddItem} title={"Add to Cart"}/>
    </div>
  )
}

export default BtnGroup