import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Menu from '../utils/menu';

const Navbar = () => {
  const NavList = Menu.map((menu) => {
    return (
      <li
        className="h-[112px] hidden md:flex items-center text-[#68707D] hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] ml-[16px] mr-[16px] cursor-pointer"
        key={menu.id}
      >
        <a href={menu.link}>{menu.name}</a>
      </li>
    );
  });

  const [cartDropdown, setCartDropdown] = useState(false);

  const handleCart = () => {
    setCartDropdown(prevCartDropdown => !prevCartDropdown);
  };

  return (
    <div className="w-full h-[68px] md:h-[112px] lg:pl-[164px] lg:pr-[164px] md:pl-[50px] md:pr-[50px] pl-[24px] pr-[24px] flex items-center bg-white">
      <div className="w-full h-[68px] md:h-[112px] flex items-center justify-between md:border-b-2 md:border-[#F7F8FD]">
        <div className="h-[112px] flex items-center">
          <img className="md:hidden pr-4" src="src/assets/images/icon-menu.svg" alt="menu" />
          <img className="w-[137px] mr-[42px] cursor-pointer" src="src/assets/images/logo.svg" alt="sneaker logo" />
          <ul className="h-[112px] flex items-center">{NavList}</ul>
        </div>

        <div className="md:w-[115px] md:h-[50px] w-[67px] h-[24px] flex items-center justify-between">
          <div>
            <img
              className="cursor-pointer"
              onClick={handleCart}
              src="src/assets/images/icon-cart.svg"
              alt="cart"
            />

            <Transition
              show={cartDropdown}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className='w-[360px] h-[256px] absolute bg-white md:right-[89px] md:top-[90px] right-[65px] top-[65px] shadow-custom rounded-[10px]'>
                        <div className='w-full h-[68px] flex items-center border-b-[2px] border-solid border-[#F7F8FD] '>
                            <h5 className='ml-[24px] w-full font-bold text-[15px] leading-[14px] text-[#1D2025]'>Cart</h5>
                        </div>

                        <div className='mt-[28px] flex flex-col justify-center items-center'>
                            <div className='w-[312px] flex justify-between items-center hover:bg-slate-50'>
                                <img className='w-[50px] h-[50px] rounded-[4px]' src="src/assets/images/image-product-1-thumbnail.jpg" alt="item"/>
                                <div>
                                    <p className='font-medium text-[16px] leading-[19.84px] text-bla
                                    '>Fall Limited Edition Sneakers</p>
                                    <div className='flex'>
                                        <p>$125.oo x 3</p>
                                        <p>$$375.00</p>
                                    </div>
                                </div>
                                <img className='w-[14px] h-[16px] cursor-pointer' src="src/assets/images/icon-delete.svg" alt="delete icon" />
                            </div>

                            <button className='flex justify-center items-center font-bold  mt-[26px] w-[312px] h-[54px] text-base text-white bg-[#FF7D1A] rounded-[10px] hover:shadow-lg hover:shadow-[#fbd8bf]'>
                                <img className='2xl:mr-4 mr-[12.8px]' src="src/assets/images/icon-cart.svg" alt="cart icon"  /> 
                                Add to Cart
                            </button>
                        </div>

                        
                    </div>
            </Transition>
          </div>
          <img
            className="md:w-[50px] md:h-[50px] w-[24px] h-[24px] hover:border-[1px] hover:rounded-full hover:border-[#FF7D1A] cursor-pointer"
            src="src/assets/images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
