"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  mode: "dark",
  toggle: () => { },
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("themeMode");
    if (stored === "light" || stored === "dark") {
      setMode(stored);
    } else {
      setMode("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, []);

  useEffect(() => {
    if (mode) {
      localStorage.setItem("themeMode", mode);
    }
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (mode === null) return null; // لا تعرض شيء إلى أن نحدد الثيم

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
