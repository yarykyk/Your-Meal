import React, { useState } from 'react'
import Choices from './Choices'
import Burgers_Bin from './main_product_part'


const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(activeIndex)
  return (
    <>
        <Choices  state={activeIndex} setState={setActiveIndex}/>
        <Burgers_Bin state={activeIndex} setState={setActiveIndex}/>
    </>
  )
}

export default MainSection
