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

  let WalletButton;
  if (!wallet.connected) {
    WalletButton = <WalletMultiButton />;
  } else {
    WalletButton = <WalletDisconnectButton />;
  }
  return (
    <header className="flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold m-5"> Saffle </h1>
      </div>
      <div className="flex justify-end m-5">{WalletButton}</div>
    </header>
  );
};

export default Header;
