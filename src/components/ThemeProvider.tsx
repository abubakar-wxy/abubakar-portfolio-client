"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Get saved theme from localStorage or default to light
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    if (!mounted) return <>{children}</>;

    return (
        <div>
            {children}
            <button
                onClick={toggleTheme}
                className="btn btn-sm fixed bottom-5 right-5"
            >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
    );
}
