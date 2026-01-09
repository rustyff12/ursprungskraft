import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback to 'de' if something goes wrong (shouldn't happen with proper proxy.ts)
  if (!locale || !["de", "en"].includes(locale)) {
    locale = "de";
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
