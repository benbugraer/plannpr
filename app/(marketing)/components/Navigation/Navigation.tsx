"use client";
import Link from "next/link";
import { CSSProperties } from "react";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Components", href: "/docs/introduction" },
//   { label: "Blocks", href: "/blocks" },
// ];

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
      className="sticky top-0 h-[var(--header-height)] z-50 p-2 bg-primary backdrop-blur border-b border-primary"
      style={{ "--index": 0 } as CSSProperties}
    >
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl"></hr>

      <div className="container flex h-12 items-center">
        <Link
          href="/"
          className="relative text-lg font-normal tracking-tighter flex items-center space-x-0"
        >
          <span className="text-primary text-xl">
            <span className="font-thin">Plann</span>
            <span className="font-bold">PR</span>
          </span>
        </Link>
        <nav>
          <ul className="hidden md:flex gap-1 items-center justify-center text-center">
            {/* {navItems.map((items) => (
              <li key={items.href}>
                <NavLinks href={items.href}>{items.label}</NavLinks>
              </li>
            ))} */}
          </ul>
        </nav>
        <nav className="flex  items-center justify-end ml-auto">
          {/* {social.map((social) => (
            <a
              target="_blank"
              key={social.url}
              href={social.url}
              className="inline-flex text-tertiary items-center justify-center  text-sm font-medium transition-colors  rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-tertiary duration-500 hover:duration-500 hover:text-accent-foreground h-9 py-2 w-9"
            >
              {social.icon}
            </a>
          ))} */}
          <div className="ml-2">{/* <ThemeSwitcher /> */}</div>
        </nav>
        <div className="lg:hidden flex ml-2">{/* <MobileNavigation /> */}</div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-2xl"></hr>
    </header>
  );
}
