import "./globals.css";
import { Press_Start_2P, Share_Tech_Mono } from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
  display: "swap",
});

export const metadata = {
  title: "Rudraksh Portfolio",
  description: "Minimal dark portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${shareTechMono.variable}`}>
      <body className="bg-black text-gray-200 font-[var(--font-share-tech)]">
        {children}
      </body>
    </html>
  );
}
