import React from 'react';
import Logo_Orange from '../img/Logo-orange.svg';
import VK from '../img/VK.svg';
import Telegram from '../img/Telegram.svg'

const Footer = () => {
  return (
    <>
    <footer className={`bg-white flex flex-col mx-[10px] py-[21px] md:flex-row md:justify-between md:pt-[52px] md:pb-[39px] md:mx-8 max:px-[75px]`}>
      <div>
        <img src={Logo_Orange} alt="" width="199" height="44" />
        <p className="text-xs font-normal hidden md:block md:mt-[59px]">
          &copy; YouMeal, 2025 <br />Design: Yarykyk
        </p>
      </div>
      <div className="mt-6 md:flex md:gap-[50px] md:items-start md:mt-0">
        <div>
          <h1 className="text-lg font-normal max:text-2xl">Order number</h1>
          <p className="text-xs font-normal mt-2 md:mt-6 md:text-base select-text">+9(999)999-99-99</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h1 className="text-lg font-normal max:text-2xl">We are on social networks</h1>
          <div className="flex mt-2 md:mt-[22px]">
            <img src={VK} alt="" width="36" height="36" className="mr-4"/>
            <img src={Telegram} alt="" width="36" height="36" />
          </div>
        </div>
        <p className="text-xs font-normal md:hidden mt-[34px]">
          &copy; YouMeal, 2025 <br />Design: Yarykyk
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
