import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flower Shower',
  description: 'A beautiful interactive web application that displays falling flowers and provides information about different types of flowers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 