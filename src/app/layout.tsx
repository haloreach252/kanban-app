import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from "@/components/redux/provider";
import Navbar from "./components/Navbar";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: 'KANBAN',
  description: 'KABNANA'
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={pjs.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}