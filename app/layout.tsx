import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "donBarbos",
    template: "%s | donBarbos",
  },
  description:
    "Hi, my name is Semyon, I'm building open source solutions and I love socially impactful projects.",
  openGraph: {
    title: "donBarbos",
    description:
      "Hi, my name is Semyon, I'm building open source solutions and I love socially impactful projects.",
    url: "https://dontkillkenny.com",
    siteName: "dontkillkenny.com",
    images: [
      {
        url: "https://dontkillkenny.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "donBarbos",
    description:
      "Hi, my name is Semyon, I'm building open source solutions and I love socially impactful projects.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable, "custom-selection"].join(
        " "
      )}
    >
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
