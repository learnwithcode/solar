import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Solar Rooftop Installation | PM Surya Ghar Yojna",
  description: "Save up to 90% on electricity bills with rooftop solar and govt subsidy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17634236773"
        />
        <Script id="google-ads-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17634236773');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
