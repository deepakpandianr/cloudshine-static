import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import BootstrapClient from './BootstrapClient'; // 👈 import client helper

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Cloudshine | Oracle SCM in Just 3 Months",
  description: "Duration of this course is 3 Months. We have Weekend batches as well. 4 hours each on Saturday and Sunday only. Duration of the weekend course is also 3 Months.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient /> 
        {children}
      </body>
    </html>
  );
}
