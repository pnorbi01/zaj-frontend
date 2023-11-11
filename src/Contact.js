import React, { useState } from "react";
import { HomeIcon } from "./components/icons/HomeIcon";
import { ContactIcon } from "./components/icons/ContactIcon";
import {Link, Input, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { CheckIcon } from "./components/icons/CheckIcon";

function Contact() {

    const sendEmailApi = process.env.REACT_APP_SEND_MAIL_API_URL;
    const [isSending, setIsSending] = useState(false);
    const [isInvalidFirstname, setIsInvalidFirstname] = useState(false);
    const [isInvalidLastname, setIsInvalidLastname] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidSubject, setIsInvalidSubject] = useState(false);
    const [isInvalidMessage, setIsInvalidMessage] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [emailDetails, setEmailDetails] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: '',
    });

    function validateForm() {
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        let isValid;

        let isValidFirstname = firstname === "" ? (setIsInvalidFirstname(true), false) : (setIsInvalidFirstname(false), true);
        let isValidLastname = lastname === "" ? (setIsInvalidLastname(true), false) : (setIsInvalidLastname(false), true);
        let isValidEmail = email === "" ? (setIsInvalidEmail(true), false) : (setIsInvalidEmail(false), true);
        let isValidEmailRegex = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) ? (setIsInvalidEmail(false), true) : (setIsInvalidEmail(true), false);
        let isValidSubject = subject === "" ? (setIsInvalidSubject(true), false) : (setIsInvalidSubject(false), true);
        let isValidMessage = message === "" ? (setIsInvalidMessage(true), false) : (setIsInvalidMessage(false), true);

        if(isValidFirstname && isValidLastname && isValidEmail && isValidEmailRegex && isValidSubject && isValidMessage){
            return isValid = true;
        }
        else {
            return isValid = false;
        }
    }

    const sendMail = async () => {
        if(validateForm()){
            setIsSending(true);
            await fetch(sendEmailApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailDetails),
            })
            .then((response) => {
                if(response.ok) {
                    onOpen();
                    setIsSending(false);
                } 
                else {
                    console.log('Error occured');
                    setIsSending(false);
                }
            })
            .catch((error) => {
                console.log('Error occured:', error);
                setIsSending(false);
            });
        } else {
            console.log('From validation failed.')
            setIsSending(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailDetails({
          ...emailDetails,
          [name]: value,
        });
    };

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
            <div className="form-container flex flex-col justify-center items-center w-3/5 p-5">
                <div className="flex flex-col justify-center items-start w-full p-1">
                    <span className="font-bold text-2xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent">Pišite nam.</span>
                    <span className="font-display text-sm text-gray-400">Sva polja mora da bude popunjena da bih mogli kontaktirali nas!</span>
                </div>
                <div className="flex flex-col justify-center items-center w-full p-1">
                    <form id="form" className="flex flex-col justify-center items-center w-full gap-4">
                        <div className="input-wrapper flex flex-row justify-center items-center w-full gap-2">
                            <Input
                                isInvalid={isInvalidFirstname}
                                value={emailDetails.firstname}
                                isRequired
                                type="text"
                                label="Ime"
                                placeholder="Unesi svoju ime"
                                color={isInvalidFirstname ? "danger" : "default"}
                                className="input w-1/2"
                                onChange={handleInputChange}
                                id="firstname"
                                name="firstname"
                            />
                            <Input
                                isInvalid={isInvalidLastname}
                                value={emailDetails.lastname}
                                isRequired
                                type="text"
                                label="Prezime"
                                placeholder="Unesi svoju prezime"
                                color={isInvalidLastname ? "danger" : "default"}
                                className="input w-1/2"
                                onChange={handleInputChange}
                                id="lastname"
                                name="lastname"
                            />
                        </div>
                        <div className="input-wrapper flex flex-row justify-center items-center w-full gap-2">
                            <Input
                                isInvalid={isInvalidEmail}
                                value={emailDetails.email}
                                isRequired
                                type="email"
                                label="Email"
                                placeholder="Unesi svoju email"
                                color={isInvalidEmail ? "danger" : "default"}
                                className="input w-1/2"
                                onChange={handleInputChange}
                                id="email"
                                name="email"
                            />
                            <Input
                                isInvalid={isInvalidSubject}
                                value={emailDetails.subject}
                                isRequired
                                type="text"
                                label="Naslov"
                                placeholder="Unesi naslov"
                                color={isInvalidSubject ? "danger" : "default"}
                                className="input w-1/2"
                                onChange={handleInputChange}
                                id="subject"
                                name="subject"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <Textarea
                                isInvalid={isInvalidMessage}
                                value={emailDetails.message}
                                isRequired
                                label="Poruka"
                                labelPlacement="inside"
                                placeholder="Unesi svoju poruku"
                                color={isInvalidMessage ? "danger" : "default"}
                                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                onChange={handleInputChange}
                                id="message"
                                name="message"
                            />
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <Button id="button" isLoading={`${isSending ? 'true' : ''}`} className="contact-button w-1/2 font-bold text-sm bg-warning-400 shadow-md hover:cursor-pointer hover:bg-warning-300 hover:text-gray-500 hover:tracking-wide transition-all" onClick={() => sendMail()}>
                                Pošalji
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col justify-center items-center gap-1">
                            <CheckIcon size={40} className="animate-[fade_0.5s_ease-in] opacity-0" style={{animationDelay: '0.10s', animationFillMode: 'forwards'}} />
                            <span className="text-success font-bold animate-[fade_0.5s_ease-in] opacity-0" style={{animationDelay: '0.20s', animationFillMode: 'forwards'}}>Uspešno poslato</span>
                        </ModalHeader>
                        <ModalBody className="animate-[fade_0.5s_ease-in] opacity-0" style={{animationDelay: '0.30s', animationFillMode: 'forwards'}}>
                            <p> 
                            Hvala Vam što ste kontaktirali nas!
                            </p>
                            <p>
                            Na Vaše pitanje će biti uskoro odgovoreno.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" variant="light" className="w-full font-medium animate-[fade_0.5s_ease-in] opacity-0" style={{animationDelay: '0.40s', animationFillMode: 'forwards'}} onPress={onClose}>
                                U redu
                            </Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </section>
    );
}

export default Contact;
