import React from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import {Link} from "@nextui-org/react";

function Contact() {
    return (
        <section className="flex flex-row justify-center items-center w-full p-3 pt-28 relative">
        <div className="before:content-[''] rounded-lg absolute top-0 h-24 w-0.5 bg-gradient-to-b from-white to-stone-500"></div>
            <div className="flex flex-col justify-center items-center w-full">
                <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Kontakt</span>
                <div className="contact-content flex flex-row justify-center items-center w-2/3 h-full p-3">
                    <div className="contact-desc flex flex-row justify-center items-center w-2/3">
                        <span className="text-md font-medium text-gray-500 text-center">Tražite kvalitetan i pristupačan tim za vaš sledeći građevinski projekat?</span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full p-3">
                    <div className="group flex flex-row justify-center items-center gap-3 rounded-full border border-gray-800 bg-black px-5 py-2 transition-all hover:bg-transparent hover:cursor-pointer">
                        <Link href="/contact" className="text-sm text-white group-hover:text-black">Kontaktirajte nas</Link>
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
