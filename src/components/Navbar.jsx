import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Menu from '../utils/menu';
import Close from "../assets/images/icon-close.svg"
import AddCart from "../assets/images/icon-cart-light.svg"
import Img1 from "../assets/images/image-product-1-thumbnail.jpg"
import Logo from "../assets/images/logo.svg"
import MenuIcon from "../assets/images/icon-menu.svg"
import Cart from "../assets/images/icon-cart.svg"
import Delete from "../assets/images/icon-delete.svg"
import Avatar from "../assets/images/image-avatar.png"

const Navbar = ({cartItems, setCartItems, handleAddItem}) => {
  const NavList = Menu.map((menu) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(prevIsHovered => !prevIsHovered);
    };

    const handleMouseLeave = () => {
      setIsHovered(prevIsHovered => !prevIsHovered);
    };

    const listItemClasses = `md:h-[112px] flex items-center md:font-normal text-[#68707D] hover:text-[#1D2025] md:ml-[16px] md:mr-[16px] mx-auto my-[8.5px] font-bold cursor-pointer transition duration-300 ${
      isHovered ? 'border-b-4 border-[#FF7D1A] ease-in' : 'ease-out mt-[3.5px]'
    }`;

    return (
      <li
        className={listItemClasses}
        key={menu.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={menu.link}>{menu.name}</a>
      </li>
    );
  });

  const [cartDropdown, setCartDropdown] = useState(false);

  const handleCart = () => {
    setCartDropdown(prevCartDropdown => !prevCartDropdown);
  };

  
  const [slideMenu, setSlideMenu] = useState(true);

  const handleMenu = () => {
    setSlideMenu(prevSlide => !prevSlide)
  }

  const handleDelete = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };
  
  const addedItem = cartItems.map(cartItem => {
    return (
      <div key={cartItem.id} className='mt-[28px] w-[312px] flex justify-between items-center hover:bg-slate-50 transition duration-300'>
        <img className='w-[50px] h-[50px] rounded-[4px]' src={Img1} alt="item"/>
        <div>
            <p className='font-medium text-[16px] leading-[19.84px] text-black'>Fall Limited Edition Sneakers</p>
            <div className='flex'>
                <p className='text-[16px] leading-[20px] tracking-wide text-black'>${cartItem.price} x {cartItem.quantity} <span className='font-bold '>${cartItem.total}</span></p>
                
            </div>
        </div>
        <img  className='w-[14px] h-[16px] cursor-pointer'
              src={Delete} 
              alt="delete icon" 
              onClick={() => handleDelete(cartItem.id)}
        />
      </div>
    )
  });

  return (
    <div className="w-full h-[68px] md:h-[112px] lg:pl-[164px] lg:pr-[164px] md:pl-[50px] md:pr-[50px] pl-[24px] pr-[24px] flex items-center bg-white ">
      <div className="w-full h-[68px] md:h-[112px] flex items-center justify-between md:border-b-2 md:border-[#F7F8FD]">
        <div className="h-[112px] flex items-center">
          <img className="md:hidden pr-4 cursor-pointer" onClick={handleMenu} src={MenuIcon} alt="menu" />
          <img className="w-[137px] mr-[42px] cursor-pointer" src={Logo} alt="sneaker logo" />
          <ul className={`md:relative md:w-auto md:h-[112px] md:flex ${slideMenu ? 'hidden' : 'flex'} md:flex-row md:items-center fixed h-full bg-white top-0 left-0 flex-col w-[75%]`}>
            <img className='md:hidden block mt-[25px] ml-[25px] mb-[36px] w-[15px] h-[15px] cursor-pointer' onClick={handleMenu} src={Close} alt="close" />
            {NavList}
          </ul>
        </div>

        <div className="md:w-[115px] md:h-[50px] w-[67px] h-[24px] flex items-center justify-between">
          <div>
            <div className='relative'>
              <img
                className="cursor-pointer"
                onClick={handleCart}
                src={Cart}
                alt="cart"
              />
              {cartItems.length > 0 &&
              <div className='flex justify-center items-center absolute top-[-50%] right-[-50%] w-[20px] h-[13px] bg-[#FF7D1A] hover:bg-[#d56815] rounded-[9px] cursor-pointer'>
                 <p className='text-[#FFEDE0] font-bold text-[10px] leading-[12px]'>{cartItems.length}</p>
              </div>
              }
            </div>

            <Transition
              show={cartDropdown}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className='w-[360px] h-[256px] absolute bg-white md:right-[89px] md:top-[90px] right-[65px] top-[65px] shadow-custom rounded-[10px] overflow-auto scroll-p-[24rem]'>
                        <div className='w-full h-[68px] flex items-center border-b-[2px] border-solid border-[#F7F8FD] '>
                            <h5 className='ml-[24px] w-full font-bold text-[15px] leading-[14px] text-[#1D2025]'>Cart</h5>
                        </div>

                        {cartItems.length > 0 ? (
                        <div className='flex flex-col justify-center items-center'>

                            { addedItem }

                            <button className='flex justify-center items-center font-bold  mt-[26px] mb-[26px] w-[312px] h-[54px] text-base text-white bg-[#FF7D1A] hover:bg-[#d56815] rounded-[10px] hover:shadow-lg hover:shadow-[#fbd8bf] transition duration-300'  onClick={handleAddItem}>
                                <img className='2xl:mr-4 mr-[12.8px]' src={AddCart} alt="cart icon" /> 
                                Add to Cart
                            </button>
                        </div>
                        ) : (
                        <div className='w-full h-[70%] flex flex-col justify-center items-center font-bold text-4 tracking-wider text-[#68707D]'>
                          <p>Your cart is empty.</p>
                        </div>
                        )}
                        
                    </div>
            </Transition>
          </div>
          <img
            className="md:w-[50px] md:h-[50px] w-[24px] h-[24px] hover:border-[4px] hover:rounded-full hover:border-[#FF7D1A] cursor-pointer transition duration-300"
            src={Avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
