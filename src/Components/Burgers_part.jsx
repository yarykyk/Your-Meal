import React, { useState, useEffect} from 'react'
import realBurger from '../img/food/Real_Burger.png'
import Burger_card from './Burger_card'
import Nachos from '../img/RealFood/Nachos.png'
import Hot_dog from '../img/RealFood/Hot-dog.png'

const Burgers_part = ({state}) => {
    // console.log(state);
    const [foodName, setfoodName] = useState('');
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('')
    useEffect(() => {
        if (state === 0) {
            setPrice('$8.33');
            setName('Meat Bomb');
            setWeight('520g');
            setfoodName('Burgers');
        } else if (state === 1) {
            setPrice('$3.10');
            setName('Nachos');
            setWeight('220g');
            setfoodName('Snacks');
        } else if (state === 2) {
            setPrice('$3.60');
            setName('Homemade hot dog');
            setWeight('250g');
            setfoodName('Hot-dogs');
        }
    }, [state]);
    
    const chooseImg = () => {
        if (state === 0) return realBurger;
        else if (state === 1) return Nachos;
        else if (state === 2) return Hot_dog;
    };

return (
    <>
        <div className="lg:basis-[662px] lg:flex-wrap">
            <h1
                className="text-[28px] lg:text-[40px] font-semibold ml-[10px] mb-4 max:ml-12"
            >
                {foodName}
            </h1>
            <div
                className="flex flex-wrap gap-[10px] md:gap-[20px] lg:gap-[30px] justify-center lg:justify-center md:justify-self-center max:w-[960px]"
            >
                <Burger_card img={chooseImg()} price={price} name={name} weight={weight}/>
                <Burger_card img={chooseImg()} price={price} name={name} weight={weight}/>
                <Burger_card img={chooseImg()} price={price} name={name} weight={weight}/>
                <Burger_card img={chooseImg()} price={price} name={name} weight={weight}/>
            </div>
        </div>
    </>
)
}

export default Burgers_part
