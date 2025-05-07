
const Choices = ({state, setState}) => {
    const choise = [
        {
            src: "./src/img/food/Burger.svg",
            name: 'Burger'
        }
        ,   
        {
            src: "./src/img/food/byblik.svg",
            name: 'Snacks'
        }
        , 
        {
            src: "./src/img/food/hoy-dogs.svg",
            name: "Hot-dogs"
        }
        ,
        {
            src: "./src/img/food/kombo.svg",
            name: 'Combo'
        }
        ,
        {
            src: "./src/img/food/shaurma.svg",
            name: 'Shawrma'
        }
        ,  
        {
            src: "./src/img/food/pizza.svg",
            name: 'Pizza'
        }      
        ,
        {
            src: "./src/img/food/lapsha.svg",
            name: 'Wok'
        }
        ,
        {
            src: "./src/img/food/donat.svg",
            name: 'Desserts'
        }
        ,
        {
            src: "./src/img/food/souces.svg",
            name: 'Sauces'
        }
    ];
return (
    <>
        <section
            className="my-[30px] h-[30px] lg:h-10 w-auto flex gap-2 md:gap-3 lg:gap-6 overflow-x-auto overflow-y-hidden text-xs font-normal lg:text-base ml-[10px] max:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:ml-[64px]"
        >   
        {choise.map((label, index) => (
                <div
                key={index}
                onClick={() => {
                    setState(index);
                    // console.log(index)
                } }
                className={`flex flex-row h-[30px] w-[97px] lg:w-[126px] lg:h-10 gap-2 rounded-[50px] bg-white items-center p-2 whitespace-nowrap
                    ${state === index ? 'bg-yellow-strong' : 'bg-white'}`}
                >
                <img src={label.src} alt="" width="24" height="24"/>
                <a className="pr-8">{label.name}</a>
                {/* href='#' */}
                </div>
            ))}
    </section>
    </>
)
}

export default Choices
