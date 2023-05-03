import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen bg-green-200">
      <Component {...pageProps} />
    </main>
  );
}
