import React from 'react'
import Busket from './Busket'
import Burgers_part from './Burgers_part'

const Burgers_Bin = ({state, setState}) => {
  // console.log(state)
  return (
    <>
      <section
        className="mx-[10px] flex flex-col gap-[30px] lg:flex-row justify-center items-start md:items-center lg:mx-8 mb-20"
      >
        <Busket />

        <Burgers_part state={state} setState={setState}/>
      </section>
    </>
  )
}

export default Burgers_Bin
