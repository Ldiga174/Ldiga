import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase:new URL("https://ldiga.com"),
  title:"Rodion Lebedev — AI Product Builder",
  description:"Rodion Lebedev’s digital ecosystem: AI products, agents, automation, and technology ventures.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
