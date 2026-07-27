"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/data/i18n";

const labels: Record<Locale, string> = { ru: "RU", en: "EN", es: "ES" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();

  async function select(nextLocale: Locale) {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });
    router.push(`/${nextLocale}`);
  }

  return (
    <div className="language-switcher" aria-label="Language">
      {(Object.keys(labels) as Locale[]).map((value) => (
        <button
          type="button"
          key={value}
          className={locale === value ? "active" : ""}
          aria-current={locale === value ? "page" : undefined}
          onClick={() => select(value)}
        >
          {labels[value]}
        </button>
      ))}
    </div>
  );
}
