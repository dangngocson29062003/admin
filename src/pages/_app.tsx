"use client";
import { Layout } from "antd";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container p-4">
      <Component {...pageProps} />
    </div>
  );
}
