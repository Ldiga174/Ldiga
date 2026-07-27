import { NextRequest, NextResponse } from "next/server";
import { locales, type Locale } from "@/data/i18n";

const spanishCountries = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ",
  "GT", "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE",
]);

function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("ldiga_locale")?.value;
  if (locales.includes(saved as Locale)) return saved as Locale;

  const languages = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (languages.startsWith("ru") || languages.includes(",ru")) return "ru";
  if (languages.startsWith("es") || languages.includes(",es")) return "es";

  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "RU" || country === "BY" || country === "KZ") return "ru";
  if (country && spanishCountries.has(country)) return "es";
  return "en";
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  return NextResponse.redirect(new URL(`/${detectLocale(request)}`, request.url));
}

export const config = {
  matcher: ["/"],
};
