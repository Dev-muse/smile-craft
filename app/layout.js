import { Inter } from "next/font/google";



import "./globals.css";

import Navbar from './Navbar';
import Footer from './Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmileCraft Dentistry",
  description: "SmileCraft Dentistry - Your Trusted Dental Care Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />


      </head>
      <body >
        <Navbar />
        {children}
        <Footer />



      </body>
    </html>
  );
}
