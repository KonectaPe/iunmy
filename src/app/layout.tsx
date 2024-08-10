'use client';

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
