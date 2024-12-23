"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = Readonly<{
  href: string;
  children: ReactNode;
}>;

export default function NavigationLinks({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  // Eğer href docs ile başlıyorsa ve pathname de docs ile başlıyorsa aktif olarak işaretle
  const active = href.startsWith("/docs")
    ? pathname?.startsWith("/docs")
    : pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-1.5 rounded-lg text-sm font-medium hover:text-primary transition-all duration-300 hover:duration-300 hover:transition-all ease-linear",
        active ? "text-primary" : "text-tertiary "
      )}
    >
      {children}
    </Link>
  );
}
