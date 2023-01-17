import React from "react";
import Navbar from "../components/Navbar";
import Vault from "../components/PersonalVault/Vault";
import RepoVault from "../components/PersonalVault/RepoVault";
import Footer from "../components/Footer";
// import Repository from "../components/Repository";
const VaultPage = () => {
  return (
    <div className="gradient  ">
      <div className="">
        <Navbar />
        <Vault />
        <RepoVault />
      </div>
      <Footer />
      <div className=""></div>
    </div>
  );
};
export default VaultPage;
