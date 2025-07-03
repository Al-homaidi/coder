"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  // {
  //   id: 3,
  //   title: "Blog",
  //   url: "/blog",
  // },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard",
  // },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  const handleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Coding
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* Hamburger Icon for mobile */}
      <button className={styles.menuIcon} onClick={handleSidebar} aria-label="Open menu">
        <FaBars color={mode === "dark" ? "white" : "black"} />
      </button>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className={`${styles.sidebar} ${styles.theme} ${mode === "dark" ? styles.dark : styles.light}`}>
          <button className={styles.closeIcon} onClick={closeSidebar} aria-label="Close menu">
            <FaTimes color={mode === "dark" ? "white" : "black"} />
          </button>
          <div className={styles.sidebarLinks}>
            <DarkModeToggle />
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.link} onClick={closeSidebar}>
                {link.title}
              </Link>
            ))}
            {session.status === "authenticated" && (
              <button className={styles.logout} onClick={() => { signOut(); closeSidebar(); }}>
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
