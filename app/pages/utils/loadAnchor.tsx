import * as anchor from "@project-serum/anchor";
const { Connection, PublicKey, Keypair } = anchor.web3;
import idl from "./idl";

const loadAnchor = async (setProgram: any, wallet?: any) => {
  const programId = new PublicKey(
    "7oyrzFtYfb8RYGBJ3YgosEXGFe3ezR9NpgeLCnCpcSRX"
  );
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "processed",
  });

  let provider;
  if (wallet) {
    provider = new anchor.Provider(connection, wallet, {
      commitment: "processed",
    });
  } else {
    provider = new anchor.Provider(
      connection,
      new anchor.Wallet(Keypair.generate()),
      {
        commitment: "processed",
      }
    );
  }

  const newProgram = new anchor.Program(idl, programId, provider);

  console.log(newProgram, "Is Anchor Working?");
  setProgram(newProgram);
};

export default loadAnchor;
