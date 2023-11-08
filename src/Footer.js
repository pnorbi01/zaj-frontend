import React from "react";
import logo from "./images/logo.png";

function Footer() {
    return (
        <section className="flex flex-col justify-center items-center w-full p-3">
            <div className="flex flex-row justify-center items-flex-start flex-wrap w-full p-3 gap-3">
                <div className="flex flex-row justify-center items-start p-3 w-3/12">
                    <img src={logo} alt="ZAJ logo" width={50} height={50} />
                </div>
                <div className="flex flex-row justify-center items-start p-3 w-3/12">
                    <div className="flex flex-col justify-start items-center w-full">
                        <div className="flex flex-row justify-center items-center">
                            <span className="text-lg font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Meni sajta</span>
                        </div>
                        <div className="flex flex-col justify-start items-center w-full p-3 gap-2">
                            <span className="footer-item text-sm text-gray-500 hover:cursor-pointer hover:text-slate-400 transition-all">O Nama</span>
                            <span className="footer-item text-sm text-gray-500 hover:cursor-pointer hover:text-slate-400 transition-all">Usluge</span>
                            <span className="footer-item text-sm text-gray-500 hover:cursor-pointer hover:text-slate-400 transition-all">Kontakt</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-start p-3 w-3/12">
                    <div className="flex flex-col justify-start items-center w-full">
                        <div className="flex flex-row justify-center items-center">
                            <span className="text-lg font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Kontakt podaci</span>
                        </div>
                        <div className="flex flex-col justify-start items-start p-3 gap-2">
                            <div className="flex flex-row justify-center items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1em" 
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="#CCC" />
                                </svg>
                                <a href="tel:0691850137" className="footer-item text-sm text-gray-500 hover:cursor-pointer hover:text-slate-400 transition-all">0691850137</a>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1em" 
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#CCC" />
                                </svg>
                                <a href="mailto:gy.jozsi96@gmail.com" className="footer-item text-sm text-gray-500 hover:cursor-pointer hover:text-slate-400 transition-all">gy.jozsi96@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="designed flex flex-row justify-between items-center p-1 pt-3 w-3/4">
                <span className="text-xs text-gray-400">Powered by: <a href="https://www.ranwebdesign.xyz" className="font-bold hover:underline">RAN Webdesign</a></span>
                <span className="text-xs text-gray-400">© 2023 ŽAJ BAU - Sva prava zadržana.</span>
            </div>
        </section>
    );
}

export default Footer;
