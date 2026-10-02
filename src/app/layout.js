import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { Toaster } from 'react-hot-toast';
import Contextprovider from "./context/context";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fit log",
  description: "FitLog is a workout library to pick lifts, plan your day and log every set",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     data-theme = 'dark'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black" suppressHydrationWarning>
  
        <Contextprovider>

    <Navbar></Navbar>
        
           <main className="flex-1">
        {children}
      </main>
          <Footer></Footer>
          
          
       <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#1a1a1a",
      color: "#fff",
      border: "1px solid #2a2a2a",
    },
    success: {
      iconTheme: { primary: "#ccff00", secondary: "#0a0a0a" },
    },
  }}
/>
 

        </Contextprovider>
       
      </body>
    </html>
  );
}
