import React, { useState } from "react";
import { SliderData } from '../SliderData';

function Project({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="flex flex-row justify-center items-start w-full p-3 relative">
            <div className="flex flex-col justify-center items-center w-full">
                <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Naši radovi</span>
                <div className="contact-content flex flex-row justify-center items-center w-2/3 h-full p-3">
                    <div className="contact-desc flex flex-row justify-center items-center w-2/3">
                        <span className="text-md font-medium text-center text-gray-500">Pogledajte naše dosadašnje radove.</span>
                    </div>
                </div>
                <div className='slider flex justify-center items-center w-1/2 p-3 relative'>
                    <div className='left-arrow py-2 px-3 rounded-full backdrop-blur shadow-md border border-gray-300' onClick={prevSlide}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="1.5em" 
                            viewBox="0 0 320 512"
                        >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </div>
                    <div className='right-arrow py-2 px-3 rounded-full backdrop-blur shadow-md border border-gray-300' onClick={nextSlide}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            height="1.5em" 
                            viewBox="0 0 320 512"
                        >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </div>
                    {SliderData.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='Project image' loading="lazy" className='image shadow-lg' />
                            )}
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Project;

/*
        <div className="before:content-[''] rounded-lg absolute -top-28 h-24 w-0.5 bg-gradient-to-b from-[#E2E2E2] via-[#E2E2E2] to-warning-500"></div>
*/
