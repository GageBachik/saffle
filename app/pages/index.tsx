import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import loadAnchor from "./utils/loadAnchor";

const Home: NextPage = () => {
  const [program, setProgram] = useState({});
  useEffect(() => {
    loadAnchor(setProgram);
  }, []);
  return (
    <>
      <Header setProgram={setProgram} />
      <Main program={program} />
    </>
  );
};

export default Home;
