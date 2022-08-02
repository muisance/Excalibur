// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers,  upgrades } from "hardhat";

//Track Addresses (Fill in present addresses to prevent new deplopyment)
import contractAddr from "./_contractAddr";
import publicAddr from "./_publicAddrs";


/**
 * Deploy Independent Public Agents
 */
async function main() {

    //--- Assoc Repo
    if(!publicAddr.assocRepo){
        //Deploy Config
        let contractInstance = await ethers.getContractFactory("AssocRepo").then(res => res.deploy());
        await contractInstance.deployed();
        //Set Address
        publicAddr.assocRepo = contractInstance.address;
        //Log
        console.log("Deployed AssocRepo Contract to " + contractInstance.address);
    }

    //--- Open Repo
    if(!publicAddr.openRepo){
      //Deploy Config
      // let contractInstance = await ethers.getContractFactory("OpenRepo").then(res => res.deploy());
      // await contractInstance.deployed();

      //Deploy OpenRepo Upgradable (UUDP)
      let contractInstance = await ethers.getContractFactory("OpenRepoUpgradable").then(Contract => 
      upgrades.deployProxy(Contract, [],{
          kind: "uups",
          timeout: 120000
        })
      );

      //Set Address
      publicAddr.openRepo = contractInstance.address;
      //Log
      console.log("Deployed OpenRepo Contract to " + contractInstance.address);
  }
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
