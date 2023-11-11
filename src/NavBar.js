import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import logo from "./images/logo.png";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = {
        'home': 'Početna',
        'about': 'O Nama',
        'contact': 'Kontakt'
    }

    const handleClickOnPhone = (event, href) => {
        setIsMenuOpen(false);

        setTimeout(() => {
            window.location.href = href;
          }, 500);

        event.preventDefault();
    };

  return (
    <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent"
    >
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
                <img src={logo} alt="ZAJ logo" width={100} height={100} />
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 font-bold uppercase" justify="end">
            <NavbarBrand>
                <img src={logo} alt="ZAJ logo" width={100} height={100} />
            </NavbarBrand>
            <NavbarItem>
            <Link color="foreground" to="/home" className="text-sm focus:text-warning-500">
                Početna
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link to="/about" color="foreground" className="text-sm focus:text-warning-500">
                O Nama
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" to="/contact" className="text-sm focus:text-warning-500">
                Kontakt
            </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
        {Object.keys(menuItems).map((key, index) => (
            <NavbarMenuItem key={`${key}-${index}`}>
                <Link
                    className="w-full font-bold"
                    color={
                        index === 2 ? "foreground" : index === Object.keys(menuItems).length - 1 ? "danger" : "foreground"
                    }
                    href={`/${key}`}
                    size="lg"
                    onClick={(e) => handleClickOnPhone(e, key)}
                >
                    {menuItems[key]}
                </Link>
            </NavbarMenuItem>
        ))}
        </NavbarMenu>
    </Navbar>
  );
}