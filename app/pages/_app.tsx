import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

import dynamic from "next/dynamic";

const WalletConnectionProvider = dynamic(
  () => import("./components/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  );
}
export default MyApp;
