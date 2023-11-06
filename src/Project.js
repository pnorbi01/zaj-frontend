import React from "react";
import ceiling from "./images/ceiling.png";
import wall from "./images/wall.png";
import armstrong from "./images/armstrong.png";
import floor from "./images/floor.png";
import cascade from "./images/cascade.png";
import various from "./images/various-jobs.png";

function Project() {
    return (
        <section className="flex flex-col justify-center items-center w-full p-3 pt-28 bg-neutral-50 relative">
            <div className="before:content-[''] rounded-lg absolute top-0 h-24 w-0.5 bg-warning-500"></div>
            <div className="flex flex-row justify-center items-center w-2/3 p-3">
                <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Radovi</span>
            </div>
            <div className="flex flex-row justify-center items-start flex-wrap p-3 w-2/3 gap-5">
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={ceiling} alt="Gipsanih plafona" width={100} height={100} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Montaža gipsanih plafona</span>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={wall} alt="Gipsanih zidova" width={100} height={100} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Montaža gipsanih zidova</span>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={armstrong} alt="Armstrong plafon" width={100} height={100} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Armstrong plafoni</span>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={floor} alt="Postavljanje laminata" width={100} height={100} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Postavljanje laminata</span>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={cascade} alt="Gipsane kaskade" width={150} height={150} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Rušenje i saniranje gipsane kaskade</span>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 p-4 shadow-md rounded-lg border border-gray-200 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-start h-2/3 w-full">
                        <img src={various} alt="Razni poslovi" width={70} height={70} className="transition-all duration-500" />
                    </div>
                    <span className="font-normal text-lg text-gray-500 text-center">Razni poslovi</span>
                </div>
            </div>
        </section>
    );
}

export default Project;
