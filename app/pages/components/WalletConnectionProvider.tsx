import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const WalletConnectionProvider: FC = ({ children }) => {
  //   // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  //   const network = WalletAdapterNetwork.Devnet;
  //   // You can also provide a custom RPC endpoint
  //   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const endpoint = "http://127.0.0.1:8899";

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      // getSlopeWallet(),
      // getSolflareWallet(),
      // getTorusWallet({
      //     options: { clientId: 'Get a client ID @ https://developer.tor.us' },
      // }),
      // getLedgerWallet(),
      // getSolletWallet({ network }),
      // getSolletExtensionWallet({ network }),
    ],
    // [network]
    ["http://127.0.0.1:8899"]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
