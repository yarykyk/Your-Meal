import React from 'react'

const Busket = () => {
return (
    <>
        <div
            className="flex items-center w-full bg-white rounded-3 h-auto py-4 lg:py-5 px-[10px] md:w-[195px] lg:w-[300px] lg:h-auto md:ml-[64px] md:self-start lg:ml-8 lg:mt-[62px]"
        >
            <div>
                <h1 className="text-base font-semibold lg:text-2xl">Basket</h1>
                <p className="text-xs font-normal mt-2 lg:mt-3 max:text-base empty">
                    It's empty here for now :(
                </p>
            </div>
            <div
                className="ml-auto w-8 h-4 lg:w-[41px] lg:h-[20px] rounded-[6px] bg-gray-medium text-[10px] lg:text-xs font-normal text-center leading-[20px]"
            >
                0
            </div>
        </div>
    </>
)
}

export default Busket
