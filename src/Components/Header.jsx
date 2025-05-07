import Logo from '../img/Logo.svg'
import BigBurger from '../img/burger.png'

const Header = () => {
    return(
        <>
            <header className="w-full h-auto bg-yellow-strong flex flex-col items-center pt-6 px-[10px] pb-[30px] custom-clip">
                <img src={Logo} alt="" />
                <div
                    className="flex flex-col justify-center items-center md:flex-row-reverse md:px-[103px] lg:px-[130px]"
                >
                    <div
                    className="text-center md:text-left items-start md:ml-[35px] lg:ml-[45px] max:ml-[59px]"
                    >
                    <h1
                        className="text-white font-extrabold text-3xl text-center mt-6 md:text-4xl md:text-left lg:text-[50px]"
                    >
                        Only the <span className="text-orange">juiciest burgers!</span>
                    </h1>
                    <p
                        className="text-white font-normal text-xs mt-4 md:mt-[26px] lg:mt-[52px] lg:text-base"
                    >
                        Free shipping from 7.25$
                    </p>
                    </div>
                    <img
                    src={BigBurger}
                    alt=""
                    className="mt-9 lg:w-[253px] lg:h-[290px]"
                    width="177"
                    height="204"
                    />
                </div>
            </header>
        </>
    )
}

export default Header;