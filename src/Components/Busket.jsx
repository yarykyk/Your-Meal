import React, { useEffect, useState } from "react";

import realBurger from "../img/Burgers/MeatBomb.png";
import HeavyBlow from "../img/Burgers/HeavyBlow.png";
import Italian from "../img/Burgers/Italian.png";
import Satisfing from "../img/Burgers/Satisfying.png";
import superCheesy from "../img/Burgers/SuperCheesy.png";
import timeLessClassic from "../img/Burgers/TimelessClassic.png";

const burgerPage = [
  {
    src: realBurger,
    price: 8.33,
    name: "Meat Bomb",
    weight: "520g",
  },
  {
    src: superCheesy,
    price: 6.82,
    name: "Super Cheesy",
    weight: "512g",
  },
  {
    src: Satisfing,
    price: 7.93,
    name: "Satisfying",
    weight: "580g",
  },
  {
    src: HeavyBlow,
    price: 5.95,
    name: "Heavy Blow",
    weight: "470g",
  },
  {
    src: timeLessClassic,
    price: 5.58,
    name: "TimelessClassic",
    weight: "450g",
  },
  {
    src: Italian,
    price: 6.95,
    name: "Italian",
    weight: "510g",
  },
];

const Busket = ({ choosedProducts, setChoosedProducts }) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const newQuantities = {};
    choosedProducts.forEach((id) => {
      if (quantities[id] === 0) {
        deleteChoise(id);
      }
      newQuantities[id] = quantities[id] || 1;
    });
    setQuantities(newQuantities);
  }, [choosedProducts]);

  useEffect(() => {
    choosedProducts.forEach((id) => {
      if (quantities[id] === 0) {
        deleteChoise(id);
      }
    });
  });

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 1) + delta),
    }));
  };

  const totalPrice = choosedProducts.reduce((sum, id) => {
    const quantity = quantities[id] || 1;
    return sum + burgerPage[id].price * quantity;
  }, 0);

  const deleteChoise = (idToremove) => {
    setChoosedProducts((prev) => prev.filter((id) => id !== idToremove));
  };

  return (
    <div className="shadow-[0_0_10px_0_rgba(0, 0, 0, 0.16)] flex flex-col absolute top-135 items-center w-[300px] justify-self-center bg-white rounded-[12px] h-auto py-4 lg:py-5 px-[10px] md:w-[300px] md:top-105 lg:w-[300px] lg:h-auto md:ml-[64px] md:self-start lg:ml-8 lg:mt-[62px] lg:static">
      <div className="flex items-center w-full">
        <h1 className="text-base font-semibold lg:text-2xl">Basket</h1>
        <div className="ml-auto w-8 h-4 lg:w-[41px] lg:h-[20px] rounded-[6px] bg-gray-medium text-[10px] lg:text-xs font-normal text-center leading-[20px]">
          {choosedProducts.length}
        </div>
      </div>
      <div className="flex flex-col w-100% mx-[10px] h-auto w-full mt-3">
        {choosedProducts.length === 0 ? (
          <p className="text-xs font-normal mt-2 lg:mt-3 max:text-base empty">
            It's empty here for now :(
          </p>
        ) : (
          choosedProducts.map((id, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-y border-y-gray-medium py-[11px]"
            >
              <div className="flex">
                <div className="relative">
                  <img
                    src={burgerPage[id].src}
                    alt=""
                    className="rounded-lg w-16 h-14"
                  />
                  <button
                    onClick={() => deleteChoise(id)}
                    className="w-16 h-14 bg-slate-300 opacity-0 duration-200 hover:opacity-75 absolute top-0 z-10 rounded-lg flex items-center justify-center"
                  >
                    <i className="fa-solid fa-xmark text-xl"></i>
                  </button>
                </div>

                <div className="ml-[6px]">
                  <p className="text-xs font-normal mb-px">
                    {burgerPage[id].name}
                  </p>
                  <p className="text-xs text-gray-txt font-normal mb-[6px]">
                    {burgerPage[id].weight}
                  </p>
                  <p className="text-xs font-normal">${burgerPage[id].price}</p>
                </div>
              </div>
              <div className="w-[74px] h-[30px] lg:h-10 lg:w-[84px] bg-gray-medium rounded-lg text-xs font-normal lg:text-base flex justify-around items-center">
                <button
                  type="button"
                  onClick={() => updateQuantity(id, -1)}
                  disabled={quantities[id] === 0}
                  className="disabled:text-gray-400"
                >
                  -
                </button>
                <p>{quantities[id]}</p>
                <button type="button" onClick={() => updateQuantity(id, +1)}>
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="w-full mt-[13px]">
        <div className="flex justify-between text-xs font-normal mb-[19px]">
          <p className="md:text-base">Total</p>
          <p className="md:text-base">${totalPrice.toFixed(2)}</p>
        </div>
        <button className="w-full h-[30px] lg:h-10 rounded-lg bg-orange text-white text-xs lg:text-base font-normal mb-2">
          Place an order
        </button>
        <div className="flex justify-between items-center">
          <p className="flex text-xs font-normal items-center gap-2">
            <img
              src="/src/img/food/delivery.svg"
              alt=""
              width="24"
              height="24"
            />
            Free shipping
          </p>
          <button className="text-xs font-normal text-gray-txt lg:hidden">
            Collapse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Busket;
