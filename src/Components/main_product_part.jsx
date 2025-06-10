import React from "react";
import Busket from "./Busket";
import Burgers_part from "./Burgers_part";
import { useState } from "react";

const Burgers_Bin = ({ state, setState }) => {
  const [clickedBurger, setClickedBurger] = useState();
  const [choosedProducts, setChoosedProducts] = useState([]);
  const handleAddBurger = (burger) => {
    setChoosedProducts((prev) => {
      if (prev.includes(burger)) return prev;
      return [...prev, burger];
    });
  };

  // console.log(state)
  return (
    <>
      <section className="mx-[10px] flex flex-col gap-[30px] lg:flex-row justify-center items-start md:items-center lg:mx-8 mb-20">
        <Busket
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          choosedProducts={choosedProducts}
          setChoosedProducts={setChoosedProducts}
          handleAddBurger={handleAddBurger}
        />

        <Burgers_part
          state={state}
          setState={setState}
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          choosedProducts={choosedProducts}
          setChoosedProducts={setChoosedProducts}
          handleAddBurger={handleAddBurger}
        />
      </section>
    </>
  );
};

export default Burgers_Bin;
