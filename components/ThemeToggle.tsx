'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
            aria-label="Toggle theme"
            suppressHydrationWarning
        >
            <Sun
                className={`absolute h-5 w-5 text-amber-400 transition-[opacity,transform] duration-150 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
                    }`}
                aria-hidden="true"
            />
            <Moon
                className={`absolute h-5 w-5 text-primary transition-[opacity,transform] duration-150 ${isDark ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                aria-hidden="true"
            />
        </button>
    );
}
