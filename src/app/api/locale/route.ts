import { NextResponse } from "next/server";
import { locales, type Locale } from "@/data/i18n";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const locale = body?.locale as Locale | undefined;

  if (!locale || !locales.includes(locale)) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
  }

  const response = NextResponse.json({ locale });
  response.cookies.set("ldiga_locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
