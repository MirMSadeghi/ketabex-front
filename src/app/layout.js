import { Vazirmatn } from 'next/font/google'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'; // Replace with your chosen theme
import 'primereact/resources/primereact.min.css'; // Core PrimeReact styles
import 'primeicons/primeicons.css'; // PrimeReact icons
import 'primeflex/primeflex.css';
import "./globals.css";

import Navbar from './navbar';

const vazir = Vazirmatn({
  subsets: ['arabic'],
})

export const metadata = {
  title: "کتاخت",
  description: "platform to exchange books",
};

export default function RootLayout({ children }) {

  return (
    <html className={vazir.className} dir="rtl">
      <body className={vazir.className}>
        <Navbar />
        <div className='t-px-3'>
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </div>
      </body>
    </html>
  );
}
