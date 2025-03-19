"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Brain, Home, Info, Menu, Phone, Puzzle } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/about",
    label: "About",
    icon: Info,
  },
  {
    href: "/features",
    label: "Features",
    icon: Puzzle,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Phone,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-9xl mx-auto">
        <Link href="/" className="flex items-center space-x-2 mx-4">
          <span className="font-bold size-md">OCIMUM</span>
        </Link>
        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center space-x-1",
                      pathname === route.href && "bg-accent"
                    )}
                  >
                    <route.icon className="h-4 w-4" />
                    <span>{route.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation (Drawer) */}
        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center space-x-4 mr-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Register as a Doctor</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex flex-col mt-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center space-x-2 p-4 text-base font-medium",
                        pathname === route.href && "bg-accent"
                      )}
                    >
                      <route.icon className="h-5 w-5" />
                      <span>{route.label}</span>
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
