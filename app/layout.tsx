import type { Metadata } from "next";
import "./globals.scss";
import { ContextProvider } from "./context";

export const metadata: Metadata = {
  title: "the baking fairy report",
  description: "a journey of flour + fairy dust",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ContextProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ContextProvider>
    
  );
}
