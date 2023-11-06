import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent py-2"
    >
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            <p className="font-bold text-inherit">ZAJ</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10 font-bold uppercase" justify="end">
            <NavbarBrand>
            <p className="font-bold text-inherit">ZAJ</p>
            </NavbarBrand>
            <NavbarItem>
            <Link color="foreground" href="#" className="text-sm">
                Početna
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link href="#" color="foreground" className="text-sm">
                O Nama
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="text-sm">
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