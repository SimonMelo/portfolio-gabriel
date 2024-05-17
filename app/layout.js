import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Gabriel",
  description: "Portfolio profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
