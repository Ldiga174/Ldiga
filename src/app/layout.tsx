import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase:new URL("https://ldiga.com"),
  title:"Родион Лебедев — AI Product Builder",
  description:"Личная цифровая экосистема Родиона Лебедева: ИИ-продукты, агенты, автоматизация и технологические проекты.",
  openGraph:{title:"Родион Лебедев — AI Product Builder",description:"Создаю ИИ-продукты, агентные системы и автоматизацию — от идеи до работающего продукта.",url:"https://ldiga.com",siteName:"LDIGA",locale:"ru_RU",type:"website"},
  alternates:{canonical:"/"}
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ru"><body>{children}</body></html>;
}
