import React, { useState, useEffect } from "react";
import Burger_card from "./Burger_card";

import realBurger from "../img/Burgers/MeatBomb.png";
import HeavyBlow from "../img/Burgers/HeavyBlow.png";
import Italian from "../img/Burgers/Italian.png";
import Satisfing from "../img/Burgers/Satisfying.png";
import superCheesy from "../img/Burgers/SuperCheesy.png";
import timeLessClassic from "../img/Burgers/TimelessClassic.png";

import Nachos from "../img/Snacks/Nachos.png";
import FrenchFries from "../img/Snacks/FrenchFries.png";
import OnionRings from "../img/Snacks/OnionRings.png";

import Hot_dog from "../img/HotDogs/Hot-dog.png";
import FlamingHotDog from "../img/HotDogs/FlamingHotDog.png";
import ClassicHotDog from "../img/HotDogs/ClassicHotDog.png";

import Combo from "../img/Combo/Combo.png";
import BigCombo from "../img/Combo/BigCombo.png";

const Burgers_part = ({
  state,
  clickedBurger,
  setClickedBurger,
  choosedProducts,
  setChoosedProducts,
  handleAddBurger,
}) => {
  const [foodName, setfoodName] = useState("");

  const burgerPage = [
    {
      src: realBurger,
      price: "$8.33",
      name: "Meat Bomb",
      weight: "520g",
    },
    {
      src: superCheesy,
      price: "$6.82",
      name: "Super Cheesy",
      weight: "512g",
    },
    {
      src: Satisfing,
      price: "$7.93",
      name: "Satisfying",
      weight: "580g",
    },
    {
      src: HeavyBlow,
      price: "$5.95",
      name: "Heavy Blow",
      weight: "470g",
    },
    {
      src: timeLessClassic,
      price: "$5.58",
      name: "TimelessClassic",
      weight: "450g",
    },
    {
      src: Italian,
      price: "$6.95",
      name: "Italian",
      weight: "510g",
    },
  ];

  const SnacksPage = [
    {
      src: Nachos,
      price: "$3.10",
      name: "Nachos",
      weight: "220g",
    },
    {
      src: FrenchFries,
      price: "$3.00",
      name: "French Fries",
      weight: "180g",
    },
    {
      src: OnionRings,
      price: "$2.82",
      name: "Onion Rings",
      weight: "160g",
    },
  ];

  const HotDogPage = [
    {
      src: Hot_dog,
      price: "$3.55",
      name: "Homemade Hot-Dog",
      weight: "250g",
    },
    {
      src: FlamingHotDog,
      price: "$2.93",
      name: "Flaming Hot-Dog",
      weight: "245g",
    },
    {
      src: ClassicHotDog,
      price: "$2.69",
      name: "Classic Hot-Dog",
      weight: "215g",
    },
  ];

  const ComboPage = [
    {
      src: Combo,
      price: "$14.55",
      name: "Cola, burger, French Fries",
      weight: "850g",
    },
    {
      src: BigCombo,
      price: "$27.51",
      name: "Cola, burger, French Fries...",
      weight: "1550g",
    },
  ];

  const ShawwrmaPage = [];

  const PizzaPage = [];

  const WokPage = [];

  const DessertPage = [];

  const SaucesPage = [];

  useEffect(() => {
    if (state === 0) {
      setfoodName("Burgers");
    } else if (state === 1) {
      setfoodName("Snacks");
    } else if (state === 2) {
      setfoodName("Hot-dogs");
    } else if (state === 3) {
      setfoodName("Combo");
    } else if (state === 4) {
      setfoodName("Shawrma");
    } else if (state === 5) {
      setfoodName("Pizza");
    } else if (state === 6) {
      setfoodName("Wok");
    } else if (state === 7) {
      setfoodName("Dessert");
    } else if (state === 8) {
      setfoodName("Sauces");
    }
  }, [state]);

  const choosePage = () => {
    if (state === 0) return burgerPage;
    else if (state === 1) return SnacksPage;
    else if (state === 2) return HotDogPage;
    else if (state === 3) return ComboPage;
    else if (state === 4) return ShawwrmaPage;
    else if (state === 5) return PizzaPage;
    else if (state === 6) return WokPage;
    else if (state === 7) return DessertPage;
    else if (state === 8) return SaucesPage;
  };

  // const handleClick = (index) => {
  //   console.log("Натиснули на елемент з індексом:", index);
  // };
  return (
    <>
      <div className="lg:basis-[662px] lg:flex-wrap">
        <h1 className="text-[28px] lg:text-[40px] font-semibold ml-[10px] mb-4 max:ml-12">
          {foodName}
        </h1>
        {choosePage().length === 0 ? (
          <h1 className="text-left mt-10 lg:m- font-medium text-xl">
            This product is currently unavailable:(
          </h1>
        ) : (
          <div className="flex flex-wrap gap-[10px] md:gap-[20px] lg:gap-[30px] justify-center lg:justify-center md:justify-self-center max:w-[960px]">
            {choosePage().map((src, index) => (
              <Burger_card
                // onClick={handleClick}
                key={index}
                img={src.src}
                price={src.price}
                name={src.name}
                weight={src.weight}
                index={index}
                clickedBurger={clickedBurger}
                setClickedBurger={setClickedBurger}
                setChoosedProducts={setChoosedProducts}
                choosedProducts={choosedProducts}
                handleAddBurger={handleAddBurger}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Burgers_part;
