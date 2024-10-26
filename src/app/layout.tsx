import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Import Google Poppins font
// Import Google Poppins font
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "Created by thedirtyastro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
