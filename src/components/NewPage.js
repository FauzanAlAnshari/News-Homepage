import React from "react";

const NewPage = () => {
    return (
        <div className="container bg-very-dark-blue mt-16 text-sm px-5 py-8 md:max-w-xs md:px-3 md:py-6 md:mt-7 xl:px-5 xl:py-5" >
            <h1 className="new-title text-soft-orange font-extrabold">New</h1>
            <h1 className="new-capt-title text-Off-white  font-bold mb-4 ">Hydrogen VS Electric Cars</h1>
            <p className="text-grayish-blue font-normal">Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr className="text-grayish-blue mt-5"/>
            <h1 className="new-capt-title mt-10 text-Off-white  font-bold mb-4 xl:mt-5 ">The Downsides of AI Artistry</h1>
            <p className="text-grayish-blue font-normal">What are the possible adverse effects of on-demand AI image generation?</p>
            <hr className="text-grayish-blue mt-9"/>
            <h1 className="new-capt-title mt-10 text-Off-white  font-bold mb-4 xl:mt-5 ">is VC Funding Drying Up?</h1>
            <p className="text-grayish-blue font-normal">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    )
}

export default NewPage;