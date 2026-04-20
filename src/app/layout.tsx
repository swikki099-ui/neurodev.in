import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  weight: ["400", "700"],
  variable: "--font-kalam",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NeroDev AI Driven community",
  description: "A community of developers, creators, and AI enthusiasts working together to push the boundaries of AI engineering and open-source innovation.",
  keywords: ["AI", "Community", "Open Source", "NeroDev", "AI Engineering", "LLM", "Computer Vision"],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[#fdfbf7] text-[#2d2d2d]" style={{ backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)", backgroundSize: "24px 24px" }}>{children}</body>
    </html>
  );
}
