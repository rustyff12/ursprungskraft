import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
});

export const { Link, useRouter, usePathname, redirect, getPathname } =
  createNavigation(routing);
