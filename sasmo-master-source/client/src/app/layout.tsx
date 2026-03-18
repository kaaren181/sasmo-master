import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Sidebar } from "@/components/Sidebar";
import { ThemeInit } from "@/components/ThemeInit";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SASMO Master — Grade 8 Olympiad",
  description: "The ultimate tool to ace the Grade 8 SASMO Olympiad. Practice problems, lessons, and logic training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <AppProvider>
          <TooltipProvider>
            <Toaster />
            <ThemeInit />
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 ml-[220px]">
                {children}
              </main>
            </div>
          </TooltipProvider>
        </AppProvider>
      </body>
    </html>
  );
}
