import Burger from "../img/food/Burger.svg";
import Snacks from "../img/food/byblik.svg";
import Hot_dog from "../img/food/hoy-dogs.svg";
import Combo from "../img/food/kombo.svg";
import Shawrma from "../img/food/shaurma.svg";
import Pizza from "../img/food/pizza.svg";
import Wok from "../img/food/lapsha.svg";
import Desserts from "../img/food/donat.svg";
import Sauces from "../img/food/souces.svg";

const Choices = ({ state, setState }) => {
  const choise = [
    {
      src: Burger,
      name: "Burger",
    },
    {
      src: Snacks,
      name: "Snacks",
    },
    {
      src: Hot_dog,
      name: "Hot-dogs",
    },
    {
      src: Combo,
      name: "Combo",
    },
    {
      src: Shawrma,
      name: "Shawrma",
    },
    {
      src: Pizza,
      name: "Pizza",
    },
    {
      src: Wok,
      name: "Wok",
    },
    {
      src: Desserts,
      name: "Desserts",
    },
    {
      src: Sauces,
      name: "Sauces",
    },
  ];
  return (
    <>
      <section className="my-[30px] h-[30px] lg:h-10 w-auto flex gap-2 md:gap-3 lg:gap-6 overflow-x-auto overflow-y-hidden text-xs font-normal lg:text-base ml-[10px] max:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:ml-[64px] mb-[108px] lg:mb-[30px]">
        {choise.map((label, index) => (
          <div
            key={index}
            onClick={() => {
              setState(index);
              // console.log(index)
            }}
            className={`flex flex-row h-[30px] w-[97px] lg:w-[126px] lg:h-10 gap-2 rounded-[50px] bg-white items-center p-2 whitespace-nowrap
                    ${state === index ? "bg-yellow-strong" : "bg-white"}`}
          >
            <img src={label.src} alt="" width="24" height="24" />
            <a className="pr-8">{label.name}</a>
            {/* href='#' */}
          </div>
        ))}
      </section>
    </>
  );
};

export default Choices;
