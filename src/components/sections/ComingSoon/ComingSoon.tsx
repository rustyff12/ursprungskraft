import styles from "./ComingSoon.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ComingSoon() {
  const t = useTranslations("comingSoon");
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerImage}>
          <Image src="/logo-1.png" alt="Ursprungskraft logo image" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>{t("header")}</h1>
          <p className={styles.subHeading}>{t("tag")}</p>
          <p>
            <a
              href="mailto:kontakt@ursprungskraftpraxis-erlangen.de"
              className={styles.email}
            >
              kontakt@ursprungskraftpraxis-erlangen.de
            </a>
          </p>
          <p>
            <a href="tel:+4915205555555" className={styles.phone}>
              01520-5555-555
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
