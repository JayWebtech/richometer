import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Richometer",
  description:
    "Find out if you're on the path to riches with just a few simple questions. Take the quiz now and see where your financial future is headed!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Script
          src="//pl24451842.cpmrevenuegate.com/83/fa/68/83fa685714f73bc0949b0333cb979098.js"
          async
        ></Script>
      </body>
    </html>
  );
}
