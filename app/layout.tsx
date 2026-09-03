import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "the baking fairy report",
  description: "a journey of flour + fairy dust",
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧚🏼</text></svg>",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html> 
  );
}
