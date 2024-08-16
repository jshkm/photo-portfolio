import '@/styles/globals.css'
import localFont from 'next/font/local'
import { ModalProvider } from '../utils/modalContext'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"

const ArchivoBlack = localFont({ src: '../public/fonts/ArchivoBlack.ttf', variable: "--archivoblack"});
const Jost = localFont({ src: '../public/fonts/Jost.ttf', variable: "--jost"});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <main className={`${ArchivoBlack.variable} ${Jost.variable}`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ModalProvider>
  )
}
