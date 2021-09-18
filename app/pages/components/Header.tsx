import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import loadAnchor from "../utils/loadAnchor";
import { useEffect } from "react";

interface HeaderProps {
  setProgram: any;
}

const Header: NextPage<HeaderProps> = ({ setProgram }) => {
  const wallet = useWallet();
  useEffect(() => {
    loadAnchor(setProgram, wallet);
  }, [wallet.connected]);

  if (!wallet.connected) {
    /* If the user's wallet is not connected, display connect wallet button. */
    return (
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <WalletMultiButton />
      </header>
    );
  } else {
    return (
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <WalletDisconnectButton />
      </header>
    );
  }
  return <div> loadin? </div>;
};

export default Header;
