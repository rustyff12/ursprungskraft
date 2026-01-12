import styles from "./Impressum.module.css";
import { useTranslations } from "next-intl";
export default function Impressum() {
  const t = useTranslations("impressum");
  return (
    <section>
      <h2>Impressum</h2>
      <div className={styles.textContainer}>
        <h3>{t("practice.label")}:</h3>
        <p>{t("practice.description")}</p>
      </div>

      <div className={styles.textContainer}>
        <h3>{t("operator.label")}:</h3>
        <p>{t("operator.description")}</p>
      </div>

      <div className={styles.textContainer}>
        <h3>{t("address.label")}:</h3>
        <p>{t("address.description.street")}</p>
        <p>{t("address.description.zipCity")}</p>
        <p>{t("address.description.country")}</p>
      </div>

      <div className={styles.textContainer}>
        <h3>{t("contact.label")}:</h3>
        <p>{t("contact.description.phone")}</p>
        <p>{t("contact.description.email")}</p>
      </div>
    </section>
  );
}
