"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import styles from "./LanguageSwitch.module.css";
export default function LanguageSwitch() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <div className={styles.languageSwitch}>
      <Link
        href="/"
        locale="de"
        className={locale === "de" ? styles.active : ""}
      >
        DE
      </Link>
      <span> | </span>
      <Link
        href="/"
        locale="en"
        className={locale === "en" ? styles.active : ""}
      >
        EN
      </Link>
    </div>
  );
}
