import React from 'react'
import BtnGroup from './BtnGroup'

const ProductDetails = () => {


  return (
    <div className='2xl:ml-[126px] md:ml-[100.8px] md:mt-[50px] md:mb-[50px] mt-[25px] flex flex-col items-center'>
        <div className='2xl:w-[424px] 2xl:h-[337px] md:w-[339.2px] md:h-[269.6px] md:pr-0 md:pl-0 w-full h-full pr-10 pl-10'>
            <h4 className='font-bold 2xl:text-[14px] 2xl:leading-[17px] 2xl:tracking-[0.08em] md:text-[11.2px] md:leading-[13.6px] md:tracking-[0.064em] text-[14px] leading-[17px] tracking-[0.08em] text-[#FF7D1A]'>SNEAKER COMPANY</h4>
            <h1 className='2xl:mt-[19px] font-bold 2xl:text-[44px] 2xl:leading-[48px] md:mt-[15.2px] md:text-[35.2px] md:leading-[38.4px] mt-[19px] text-[44px] leading-[48px] text-[#1D2025]'>Fall Limited Edition Sneakers</h1>
            <p className='2xl:mt-[35px] font-medium 2xl:text-[16px] 2xl:leading-[26px] md:mt-[28px] md:text-[12.8px] md:leading-[20.8px] mt-[35px] text-[16px] leading-[26px] text-[#68707D]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className='md:block flex justify-between items-center'>
                <div className='2xl:mt-[30px] md:mt-[24px] mt-[30px] flex items-center'>
                    <h2 className='2xl:mr-4 font-bold 2xl:text-[30px] 2xl:leadeing-[26px] md:mr-[12.8px] md:text-[24px] md:leading-[20.8px] mr-4 text-[30px]leadeing-[26px] text-[#1D2025]'>$125.00</h2>
                    <div className='2xl:w-[51px] 2xl:h-[27px] md:w-[40.8px] md:h-[21.6px] w-[51px] h-[27px] flex justify-center items-center bg-[#FFEDE0] rounded-[5px]'>
                        <p className='font-bold 2xl:text-[16px] 2xl:leading-[26px] md:text-[12.8px] md:leading-[20.8px] text-[16px] leading-[26px] text-[#FF7D1A]'>50%</p>
                    </div>
                </div>
                <p className='2xl:mt-[9px] font-bold 2xl:text-base 2xl:tracking-wide md:mt-[7.2px]  md:text-[12.8px] md:leading-[19.2px] md:tracking-[0.02px] mt-[30px] text-base tracking-wide line-through text-[#1D2025]'>$250.00</p>
            </div>
        </div>
        <div className='w-full mb-8'>
            <BtnGroup />
        </div>
    </div>
  )
}

export default ProductDetails