import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibraahim Jawaad | Data Science Student",
  description:
    "Personal portfolio of Ibraahim Jawaad, a Data Science student at DHA Suffa University, Karachi.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
