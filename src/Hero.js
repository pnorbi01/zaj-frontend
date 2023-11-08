import React from "react";
import {Chip} from "@nextui-org/react";
import { DotIcon } from "./DotIcon";
import { ArrowIcon } from "./ArrowIcon";
import trowel from "./images/trowel.png";
import hammer from "./images/hammer.png";

function Hero() {
    return (
        <section className="flex flex-row justify-center items-center h-full w-full text-slate-100 absolute top-0 left-0">
            <div className="fixed h-screen w-full bg-gradient-to-br from-slate-100 via-white to-warning-100 -z-10"></div>
            <div className="hero-content flex flex-col justify-center items-center w-1/2 z-10 gap-6 relative">
                <div className="float-element animate-[float_2s_ease-in-out_infinite] flex flex-col justify-center items-center p-3 bg-warning-200 rounded-full absolute top-0 left-0 shadow-md border border-gray-300" style={{animationDelay: '0.15s', animationFillMode: 'forwards'}}>
                    <img src={trowel} width={40} height={40} alt="Trowel" />
                </div>
                <div className="float-element animate-[float_2s_ease-in-out_infinite] flex flex-col justify-center items-center p-3 bg-warning-200 rounded-full absolute top-[50%] right-0 shadow-md border border-gray-300" style={{animationDelay: '0.55s', animationFillMode: 'forwards'}}>
                    <img src={hammer} width={40} height={40} alt="Hammer" />
                </div>
                <Chip
                    startContent={<DotIcon size={18} />}
                    variant="flat"
                    color="warning"
                    className="animate-[fade_0.5s_ease-in] opacity-0 p-4 shadow-md"
                    style={{animationDelay: '0.01s', animationFillMode: 'forwards'}}
                >
                    Srbobranski put 8, Bačko Gradište
                </Chip>
                <span className="hero-title animate-[fade_0.5s_ease-in] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center opacity-0 font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[4rem] p-2" style={{animationDelay: '0.10s', animationFillMode: 'forwards'}}>Kuću pretvorite u Vaš najtopliji dom.</span>
                <span className="animate-[fade_0.5s_ease-in] text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl z-10" style={{animationDelay: '0.25s', animationFillMode: 'forwards'}}>Sanjajte to - Ostalo prepustite nama.</span>
                <div className="flex animate-[fade_0.5s_ease-in] flex-row justify-center items-center opacity-0 gap-4 z-10" style={{animationDelay: '0.35s', animationFillMode: 'forwards'}}>
                    <div className="group flex flex-row justify-center items-center gap-3 rounded-full border border-gray-800 bg-black px-5 py-2 text-sm text-white transition-all hover:bg-white hover:text-black hover:cursor-pointer">
                        Početi
                        <ArrowIcon />
                    </div>
                    <div className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 hover:cursor-pointer">
                        Kontaktirajte nas
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
