import React from "react";

function About() {
    return (
        <section className="flex flex-row justify-center items-start w-full p-3 relative">
        <div className="before:content-[''] rounded-lg absolute -top-28 h-24 w-0.5 bg-gradient-to-b from-white to-warning-500"></div>
            <div className="about-content flex flex-col justify-center items-center w-2/3 p-5">
                <span className="text-xl text-gray-600 text-center">Bavimo se postavljanjem gipsanih zidova, podnih obloga i drugim sličnim uslugama. Zamislite to - mi to isporučujemo. <span className="font-bold text-warning text-xl">Naš glavni cilj je Vaš uspeh.</span></span>
                <div className="group flex flex-row justify-center items-center gap-3 mt-5">
                    <span className="about-link text-lg text-gray-600 hover:cursor-pointer">Saznajte više o nama</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="0.8em" 
                        viewBox="0 0 320 512"
                        className="group-hover:translate-x-1 transition-all"
                    >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="#2997ff" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default About;
