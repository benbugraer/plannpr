import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Plannpr | Planning and scheduling made easy",
  description:
    "Plannpr is a planning and scheduling tool that makes it easy to plan and schedule your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          (clsx("antialiased w-full bg-primary text-primary"), onest.className)
        }
      >
        {children}
      </body>
    </html>
  );
}
