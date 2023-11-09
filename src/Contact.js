import React from "react";
import {HomeIcon} from "./components/icons/HomeIcon";
import {ContactIcon} from "./components/icons/ContactIcon";
import {Link, Input, Textarea, Button} from "@nextui-org/react";

function Contact() {
    return (
        <section className="flex flex-col justify-center items-center w-full p-3">
            <div className="fixed h-screen w-full bg-gradient-to-br from-white via-white to-warning-100 -z-10"></div>
            <div className="breadcrumbs flex flex-row justify-start items-center w-2/3 py-3 gap-1">
                <div className="breadcrumb flex flex-row justify-center items-center gap-1">
                    <HomeIcon />
                    <Link href="/home" className="text-xs text-black font-bold hover:text-warning-500 hover:cursor-pointer transition-all">Početna</Link>
                </div>
                <span className="text-xs text-gray-400 font-bold">/</span>
                <div className="breadcrumb flex flex-row justify-center items-center gap-1">
                    <ContactIcon />
                    <span className="text-xs text-gray-400 font-bold">Kontakt</span>
                </div>
            </div>
            <div className="about-container flex flex-col justify-center items-center w-1/2 p-3">
                <div className="flex flex-row justify-center items-center w-full p-3 relative">
                    <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Kontaktirajte nas.</span>
                    <div className="after:content-[''] rounded-lg absolute bottom-0 h-1 w-20 bg-warning-500 shadow-md"></div>
                </div>
                <div className="flex flex-row justify-start items-center w-full p-3 mt-5">
                    <span className="text-center font-display text-gray-500">Pišite nam slanjem popunjene forme ili javite nam se putem kontaktnih informacija na našem veb sajtu.</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-3/5 p-5 shadow-lg rounded-2xl">
                <div className="flex flex-col justify-center items-start w-full p-1">
                    <span className="font-bold text-2xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent">Pišite nam.</span>
                    <span className="font-display text-sm text-gray-400">Sva polja mora da bude popunjena da bih mogli kontaktirali nas!</span>
                </div>
                <div className="flex flex-row justify-center items-center w-full p-1">
                    <form className="flex flex-col justify-center items-center w-full gap-4">
                        <div className="flex flex-row justify-center items-center w-full gap-2">
                            <Input
                                isRequired
                                isClearable
                                type="text"
                                label="Ime"
                                variant="bordered"
                                placeholder="Unesi svoju ime"
                                defaultValue="Ime"
                                onClear={() => console.log("input cleared")}
                                className="w-1/2"
                            />
                            <Input
                                isRequired
                                isClearable
                                type="text"
                                label="Prezime"
                                variant="bordered"
                                placeholder="Unesi svoju prezime"
                                defaultValue="Prezime"
                                onClear={() => console.log("input cleared")}
                                className="w-1/2"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full gap-2">
                            <Input
                                isRequired
                                isClearable
                                type="email"
                                label="Email"
                                variant="bordered"
                                placeholder="Unesi svoju email"
                                defaultValue="email@email.com"
                                onClear={() => console.log("input cleared")}
                                className="w-1/2"
                            />
                            <Input
                                isRequired
                                isClearable
                                type="text"
                                label="Naslov"
                                variant="bordered"
                                placeholder="Unesi naslov"
                                defaultValue="Naslov"
                                onClear={() => console.log("input cleared")}
                                className="w-1/2"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <Textarea
                                isRequired
                                variant="bordered"
                                label="Poruka"
                                labelPlacement="outside"
                                placeholder="Unesi svoju poruku"
                                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <Button className="w-1/2 font-bold text-sm bg-warning-400 shadow-md hover:cursor-pointer hover:bg-warning-300 hover:text-gray-500 hover:tracking-wide transition-all">
                                Pošalji
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
