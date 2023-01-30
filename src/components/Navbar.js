import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";


const Navbar = () => {


    const [srcValue, setSrcValue] = useState(menu);
    const [prevSrc, setPrevSrc] = useState();
    const [classValue, setClassValue] = useState("");

    const handleClick = () => {
        setPrevSrc(srcValue);
        setSrcValue(srcValue === menu ? menuClose : prevSrc);
        setClassValue(classValue === "" ? "slide" : "");
    };


    return (
        <header className="container pt-7 flex justify-between text-very-dark-blue md:text-dark-grayish-blue mx-auto">
            <a className="cursor-pointer" href="#"><img src={logo} alt="logo" className="w-8 md:w-9 xl:w-12" /></a>
            <nav>
                <ul className={classValue}>
                    <li>
                        <a className="cursor-pointer" href="#">Home</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" href="#">New</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" href="#">Popular</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" href="#">Trending</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" href="#">Categories</a>
                    </li>
                </ul>

                <div className="menu-button cursor-pointer md:hidden" onClick={handleClick}>
                    <img src={srcValue} alt="menu" className="w-8 md:w-0" />
                </div>

            </nav>
        </header>
    )
}

export default Navbar;