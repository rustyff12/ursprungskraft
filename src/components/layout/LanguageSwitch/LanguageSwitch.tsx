// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import styles from "./LanguageSwitch.module.css";

// export default function LanguageSwitch() {
//   const pathname = usePathname(); // e.g., /en/impressum
//   const router = useRouter();

//   // Extract the current locale from the pathname
//   const segments = pathname.split("/").filter(Boolean); // ["en", "impressum"]
//   const currentLocale = segments[0] || "de"; // default fallback

//   // Build new paths when switching locale
//   const buildLocalePath = (newLocale: string) => {
//     // Replace the first segment (locale) with newLocale
//     const newSegments = [newLocale, ...segments.slice(1)];
//     return "/" + newSegments.join("/");
//   };

//   return (
//     <div className={styles.languageSwitch}>
//       <button
//         className={currentLocale === "de" ? styles.active : ""}
//         onClick={() => router.push(buildLocalePath("de"))}
//       >
//         DE
//       </button>
//       <span> | </span>
//       <button
//         className={currentLocale === "en" ? styles.active : ""}
//         onClick={() => router.push(buildLocalePath("en"))}
//       >
//         EN
//       </button>
//     </div>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./LanguageSwitch.module.css";

export default function LanguageSwitch() {
  const pathname = usePathname(); // e.g., /en/impressum

  // Split path into segments and get current locale
  const segments = pathname.split("/").filter(Boolean); // ["en", "impressum"]
  const currentLocale = segments[0] || "de"; // fallback

  // Build the new path when switching locale
  const buildLocalePath = (newLocale: string) => {
    const newSegments = [newLocale, ...segments.slice(1)];
    return "/" + newSegments.join("/");
  };

  return (
    <div className={styles.languageSwitch}>
      <Link
        href={buildLocalePath("de")}
        className={currentLocale === "de" ? styles.active : ""}
      >
        DE
      </Link>
      <span> | </span>
      <Link
        href={buildLocalePath("en")}
        className={currentLocale === "en" ? styles.active : ""}
      >
        EN
      </Link>
    </div>
  );
}
