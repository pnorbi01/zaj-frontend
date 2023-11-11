import React from "react";
import {HomeIcon} from "./components/icons/HomeIcon";
import {UserIcon} from "./components/icons/UserIcon";
import {Accordion, AccordionItem, Link} from "@nextui-org/react";

function About() {
    return (
        <section className="flex flex-col justify-center items-center w-full p-3">
            <div className="fixed h-screen w-full bg-gradient-to-br from-slate-200 via-white to-warning-100 top-0 left-0 -z-10"></div>
            <div className="breadcrumbs flex flex-row justify-start items-center w-2/3 py-3 gap-1">
                <div className="breadcrumb flex flex-row justify-center items-center gap-1">
                    <HomeIcon />
                    <Link href="/home" className="text-xs text-black font-bold hover:text-warning-500 hover:cursor-pointer transition-all">Početna</Link>
                </div>
                <span className="text-xs text-gray-400 font-bold">/</span>
                <div className="breadcrumb flex flex-row justify-center items-center gap-1">
                    <UserIcon />
                    <span className="text-xs text-gray-400 font-bold">O Nama</span>
                </div>
            </div>
            <div className="about-container flex flex-col justify-center items-center w-1/2 p-3">
                <div className="flex flex-row justify-center items-center w-full p-3 relative">
                    <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Saznajte više o nama.</span>
                    <div className="after:content-[''] rounded-lg absolute bottom-0 h-1 w-20 bg-warning-500 shadow-md"></div>
                </div>
                <div className="flex flex-row justify-start items-center w-full p-3 mt-5">
                    <span className="text-center font-display text-gray-500">Zanima nas Vaš udoban i ušuškan dom. Specijalizirani smo za montažu gipsanih plafona i zidova, postavljanje Armstrong plafona, laminata, kao i rušenje i sanaciju gipsanih kaskada. Obavljamo razne individualne zadatke kako bismo Vaš dom potpuno oblikovali prema Vašem ukusu.</span>
                </div>
            </div>
            <div className="faq flex flex-col justify-center items-center w-1/2 p-3">
                <div className="flex flex-row justify-center items-center w-full p-3 relative">
                    <span className="text-3xl font-extrabold tracking-[0.02em] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent text-center">Često postavljene pitanje.</span>
                    <div className="after:content-[''] rounded-lg absolute bottom-0 h-1 w-20 bg-warning-500 shadow-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center w-full p-3">
                    <Accordion
                        motionProps={{
                            variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                height: "auto",
                                transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1,
                                },
                                },
                            },
                            exit: {
                                y: -10,
                                opacity: 0,
                                height: 0,
                                transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3,
                                },
                                },
                            },
                            },
                        }}
                        >
                        <AccordionItem key="1" aria-label="Zašto odabrati Vas za gipsane i laminatne radove?" title="Zašto odabrati Vas za gipsane i laminatne radove?" className="font-bold">
                            <span className="font-normal text-gray-500">Naše stručnosti i iskustvo garantuju da Vaš dom bude udoban i estetski privlačan.</span>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Koliko vremena obično traje jedan projekat?" title="Koliko vremena obično traje jedan projekat?" className="font-bold">
                            <span className="font-normal text-gray-500">Vreme zavisi od veličine projekta, ali trudimo se da poštujemo sve rokove.</span>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Kakve individualne usluge pružate?" title="Kakve individualne usluge pružate?" className="font-bold">
                            <span className="font-normal text-gray-500">Fleksibilni smo i spremni preuzeti projekte koji zadovoljavaju vaše specifične potrebe.</span>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Kakve materijale koristite u Vašem radu?" title="Kakve materijale koristite u Vašem radu?" className="font-bold">
                            <span className="font-normal text-gray-500">Radimo isključivo s visokokvalitetnim materijalima kako bismo postigli dugotrajne i zadovoljavajuće rezultate.</span>
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Da li pružate garanciju na Vaše radove?" title="Da li pružate garanciju na Vaše radove?" className="font-bold">
                            <span className="font-normal text-gray-500">Da, garantujemo za sve naše radove kako bismo osigurali zadovoljstvo i poverenje naših klijenata.</span>
                        </AccordionItem>
                        <AccordionItem key="6" aria-label="Kako mogu započeti projekt sa Vama?" title="Kako mogu započeti projekt sa Vama?" className="font-bold">
                            <span className="font-normal text-gray-500">Javite nam se putem kontaktnih informacija na našem veb sajtu i rado ćemo vam pomoći u svim koracima planiranja i izvođenja projekta.</span>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default About;
