"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Share2, Youtube, Github, Twitch } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import * as React from "react";
import { useActiveSection } from "@/components/active-section-context";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// IMPORTANT NOTE: We use legacyBehavior with NavigationMenuLink because:
// 1. NavigationMenuLink from shadcn/ui renders its own <a> tag internally
// 2. Without legacyBehavior, next/link would also render an <a> tag
// 3. This would result in invalid nested <a> tags (<a><a>...</a></a>)
// This is a known issue when combining next/link with UI libraries
// that render their own anchor tags.

const navLinks = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

// Social links with more explicit icon configuration for consistent hydration
const socialLinks = [
  { href: "https://www.youtube.com/@wilsonrip", label: "YouTube", Icon: Youtube },
  { href: "https://github.com/WilsonRIP", label: "GitHub", Icon: Github },
  { href: "https://www.twitch.tv/wilsoniirip", label: "Twitch", Icon: Twitch },
  { href: "https://discord.gg/wKHnwHYgzF", label: "Discord", Icon: SiDiscord },
];

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    setTimeOfLastClick(Date.now());
    
    setActiveSection(sectionId as any);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <span className="font-bold">WilsonIIRIP</span>
        </Link>

        <div className="hidden md:flex items-center gap-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                
                return (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={navigationMenuTriggerStyle({
                          className: isActive ? "bg-accent text-accent-foreground" : ""
                        })}
                        onClick={(e) => handleLinkClick(e, link.id)}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Social Links</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {socialLinks.map(({ href, label, Icon }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                    {/* Set explicit dimensions and aria-hidden for consistent rendering */}
                    {label === "Discord" ? (
                      <SiDiscord size={16} aria-hidden="true" />
                    ) : (
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span>{label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                   <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold">WilsonIIRIP</span>
                   </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-lg font-medium transition-colors ${
                          isActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
                        }`}
                        onClick={(e) => handleLinkClick(e, link.id)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="flex items-center flex-wrap gap-x-2 mt-6 pt-6 border-t">
                {socialLinks.map(({ href, label, Icon }) => (
                  <Button key={href} variant="ghost" size="icon" asChild>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label === "Discord" ? (
                        <SiDiscord size={20} aria-hidden="true" />
                      ) : (
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      )}
                      <span className="sr-only">{label}</span>
                    </Link>
                  </Button>
                ))}
                <div className="ml-auto pl-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 