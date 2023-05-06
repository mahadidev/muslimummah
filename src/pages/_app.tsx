import { Navigation } from "@/components";
import "@/styles/globals.css";
import "flowbite";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="min-h-screen bg-gray-100 pb-20">
        <Component {...pageProps} />
      </main>
      <Navigation />
    </>
  );
}
