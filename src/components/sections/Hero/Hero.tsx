import { useTranslations } from "next-intl";
// import ContactButton from "@/components/ui/Button/ContactButton";
export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="hero">
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <p>{t("subtitle-2")}</p>
    </section>
  );
}
