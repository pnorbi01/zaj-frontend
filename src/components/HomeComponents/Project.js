import React from "react";
import wave from "../../images/wave.png";

function Project() {
    return (
        <section className="flex flex-col justify-center items-center w-full p-3 relative">
            <div className="absolute bottom-0 -left-5 -z-10">
                <img src={wave} alt="Wave" width={150} height={150} />
            </div>
            <div className="flex flex-row justify-center items-center w-2/3 p-3">
                <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Usluge</span>
            </div>
            <div className="card-container flex flex-row justify-center items-start flex-wrap p-3 w-2/3 gap-5">
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['01'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Montaža gipsanih plafona</span>
                    </div>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['02'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Montaža gipsanih zidova</span>
                    </div>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['03'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Armstrong plafoni</span>
                    </div>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['04'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Postavljanje laminata</span>
                    </div>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['05'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Rušenje i saniranje gipsane kaskade</span>
                    </div>
                </div>
                <div className="card flex flex-col justify-start items-center w-3/12 h-44 shadow-md rounded-bl-xl rounded-br-xl border border-gray-200 bg-white hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center h-1/2 w-full bg-warning-100 rounded-br-[30px] rounded-bl-full shadow-md relative z-10">
                    <div className="card-pseudo before:content-['06'] absolute top-[50%] left-[50%] translate -translate-x-1/2 -translate-y-1/2 text-8xl font-bold -z-10 text-white"></div>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="#fdba74"/>
                        </svg>
                    </div>
                    <div className="flex flex-row justify-center items-center h-1/2 p-1 w-full">
                        <span className="font-normal text-md text-gray-500 text-center">Razni poslovi</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
