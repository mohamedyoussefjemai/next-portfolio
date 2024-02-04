import { Inter } from "next/font/google";
import "./globals.css";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed youssef JEMAI",
  description: "Mohamed youssef JEMAI curriculum vitae portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
