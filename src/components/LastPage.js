import React from "react";
import image1 from "../images/image-retro-pcs.jpg"
import image2 from "../images/image-top-laptops.jpg"
import image3 from "../images/image-gaming-growth.jpg"

const LastPage = () => {
    return (
        <div className="container mt-16 flex flex-col xl:flex-row xl:justify-between">
            <div className="flex flex-row mb-9">
                <img src={image1} alt="retro-pcs" className="w-24 h-32" />
                <div className="news-text flex flex-col text-sm ml-6 justify-between">
                    <h1 className="text-grayish-blue font-extrabold">01</h1>
                    <h2 className="font-extrabold text-very-dark-blue">Reviving Retro PCs</h2>
                    <p className="text-dark-grayish-blue">What happens when old PCs<br />are given modern upgrades?</p>
                </div>
            </div>
            <div className="flex flex-row mb-9">
                <img src={image2} alt="top-laptops" className="w-24 h-32" />
                <div className="news-text flex flex-col text-sm ml-6 justify-between">
                    <h1 className="text-grayish-blue font-extrabold">02</h1>
                    <h2 className="font-extrabold text-very-dark-blue">Top 10 Laptops of 2022</h2>
                    <p className="text-dark-grayish-blue">Our best picks for various<br />needs and budgets.</p>
                </div>
            </div>
            <div className="flex flex-row mb-9">
                <img src={image3} alt="gaming-growth" className="w-24 h-32" />
                <div className="news-text flex flex-col text-sm ml-6 justify-between">
                    <h1 className="text-grayish-blue font-extrabold">03</h1>
                    <h2 className="font-extrabold text-very-dark-blue">The Growt of Gaming</h2>
                    <p className="text-dark-grayish-blue">How the pandemic has sparked<br />fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default LastPage;