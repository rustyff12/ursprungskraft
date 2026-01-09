"use client";
// import { useState, useEffect } from "react";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { navItems } from "@/data/navigation";
import styles from "./Header.module.css";
import { useTranslations } from "next-intl";
export default function Header() {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("nav");

  // Detect mobile
  //   useEffect(() => {
  //     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
  //     checkMobile();
  //     window.addEventListener("resize", checkMobile);
  //     return () => window.removeEventListener("resize", checkMobile);
  //   }, []);

  //   // Lock scroll when menu open
  //   useEffect(() => {
  //     document.body.style.overflow = isMenuOpen ? "hidden" : "";
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [isMenuOpen]);

  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <h2 className={styles.heading}>Ursprungskraft</h2>

        {/* Desktop Menu*/}
        <LanguageSwitch />
      </nav>
    </header>
  );
}
