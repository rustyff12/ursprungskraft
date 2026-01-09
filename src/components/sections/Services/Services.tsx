import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./Services.module.css";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("neurology.title"),
      description: t("neurology.description"),
      image: "/images/water.jpg",
      alt: "",
    },
    {
      title: t("pediatrics.title"),
      description: t("pediatrics.description"),
      image: "/images/toys.jpg",
      alt: "",
    },
    {
      title: t("cfs.title"),
      description: t("cfs.description"),
      image: "/images/you-matter.jpg",
      alt: "",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("mainTitle")}</h2>

        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`${styles.serviceRow} ${
                isEven ? styles.textLeft : styles.textRight
              }`}
            >
              <div className={styles.content}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className={styles.serviceImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0} // only first image eager
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
