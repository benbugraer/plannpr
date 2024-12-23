"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEME_CONFIG = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const ThemeIcon = THEME_CONFIG.find((t) => t.value === theme)?.icon || Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="inline-flex border border-primary items-center rounded-full space-x-2 focus:outline-none dark:focus:outline-none bg-tertiary dark:bg-tertiary dark:hover:bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-muted"
        >
          <ThemeIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" space-y-1 rounded-lg bg-primary dark:bg-primary ">
        {THEME_CONFIG.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={theme === value ? "bg-tertiary " : "group"}
          >
            <div className="flex items-center space-x-2">
              <Icon className="h-4 w-4 text-tertiary group-hover:text-primary" />
              <span>{label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
