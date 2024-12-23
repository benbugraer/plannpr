"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import ThemeSwitcher from "@/components/Theme/ThemeSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import NavigationLinks from "./NavigationLİnks";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

// const social = [
//   {
//     url: "https://github.com/benbugraer",
//     icon: <Github className="w-4 h-4" />,
//   },
//   {
//     url: "https://x.com/benbugraer",
//     icon: <XformerlyTwitter className="w-4 h-4" />,
//   },
// ];

export default function Navigation() {
  return (
    <header
      className="sticky top-0 h-[var(--header-height)] z-50 p-2 bg-primary backdrop-blur border-b border-primary animate-in-reverse"
      style={{ "--index": 0 } as CSSProperties}
    >
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="relative text-lg font-normal tracking-tighter flex items-center space-x-0"
        >
          <span className="text-primary text-xl">
            <span className="font-thin">P</span>
            <span className="font-extralight">l</span>
            <span className="font-light">a</span>
            <span className="font-normal">n</span>
            <span className="font-medium">n</span>
            <span className="font-semibold">P</span>
            <span className="font-bold">R</span>
          </span>
        </Link>
        <nav className="ml-auto">
          <ul className="hidden md:flex gap-1">
            {navItems.map((items) => (
              <li key={items.href}>
                <NavigationLinks href={items.href}>
                  {items.label}
                </NavigationLinks>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hidden md:flex items-center justify-end ml-auto gap-4">
          <Link href="/docs/introduction">
            <Button className="bg-tertiary group rounded-full flex max-w-2xl items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0  dark:hover:bg-tertiary dark:hover:text-primary duration-500 ease-linear transition-all hover:transition-colors hover:duration-300">
              Giriş Yap
              <MoveRight
                className="-me-1 ms-2  transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Link>
          <Link href="/docs/introduction">
            <Button className="group rounded-full flex max-w-2xl items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0 bg-blueA text-white hover:bg-tertiary hover:text-primary dark:hover:bg-tertiary dark:hover:text-primary duration-500 ease-linear transition-all hover:transition-colors hover:duration-300">
              Hemen Başlayın
              <MoveRight
                className="-me-1 ms-2  transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </Link>
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
        </nav>
        <div className="lg:hidden flex ml-2">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
