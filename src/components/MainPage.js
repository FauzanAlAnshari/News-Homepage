import React from "react";
import MainImage from "../images/image-web-3-mobile.jpg";
import MainImageDesktop from "../images/image-web-3-desktop.jpg"

const MainPage = () => {
    return (
        <div className="main-wrap container text-sm text-dark-grayish-blue md:mr-3 xl:w-8/12">
            <picture>
            <source media="(min-width: 768px)" srcSet={MainImageDesktop}/>
            <img src={MainImage} alt="web-image" className="mt-7" />
            </picture>
            <div className="md:flex md:flex-col mt-7 xl:flex-row">
            <h1 className="main-title font-extrabold text-very-dark-blue mb-6 xl:mb-0">The Bright<br/>Future of Web 3.0?</h1>
            <div className="main-content md:flex md:flex-col">
            <p>We dive into the next evolution of the web that<br/>claims to put the power of the platforms back into the hands of the people. But is it really<br/>fulfilling its promise?</p>
            <a href="#" className="main-button bg-soft-red block py-3 font-bold uppercase tracking-widest w-1/2 text-center mt-8  text-Off-white transition-all ease-in-out xl:mt-4">Read More</a>
            </div>
            </div>
        </div>
    )
}

export default MainPage;