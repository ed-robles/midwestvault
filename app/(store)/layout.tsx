import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftModeButton";
import Banner from "@/components/Banner";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "MIDWEST Vault",
  description:
    "DISCOVER A CURATED SELECTION OF QUALITY CLOTHING AND ACCESSORIES WITH MIDWESTVault",
};

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" className={`${roboto_mono.variable}`}>
        <body>
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}

          <main className="font-mon">
            <Banner />
            <Header />
            {children}
          </main>
          <SanityLive />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
