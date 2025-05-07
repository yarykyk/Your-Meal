import React from 'react'

const Burger_card = (props) => {
return (
    <>
        <div
            className="p-2 lg:w-[276px] lg:h-[421px] w-[145px] h-[243px] bg-white lg:p-3 rounded-[12px] lg:rounded-[18px]"
        >
            <img
                src={props.img}
                className="rounded-lg lg:w-[276px] lg:h-[220px]"
                width="137"
                height="120"
            />
            <h1 className="text-base font-semibold mt-[10px] lg:text-2xl lg:mt-4">
                {props.price}
            </h1>
            <p className="text-xs font-normal mt-2 lg:text-base">{props.name}</p>
            <p
                className="text-gray-txt text-xs font-semibold mt-4 mb-[7px] lg:text-base lg:mt-[29px] lg:mb-2"
            >
                {props.weight}
            </p>
            <button
                className="w-full bg-gray-medium h-[30px] lg:h-10 rounded-lg text-xs font-normal lg:text-base hover:bg-gray-200"
            >
                Add
            </button>
        </div>
    </>
    )
}

export default Burger_card
