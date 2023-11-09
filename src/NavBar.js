import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import logo from "./images/logo.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Početna",
    "O Nama",
    "Kontakt",
  ];

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
            <Link color="foreground" href="/home" className="text-sm">
                Početna
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="/about" color="foreground" className="text-sm">
                O Nama
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="/contact" className="text-sm">
                Kontakt
            </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className="w-full"
                color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
                >
                {item}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
  );
}