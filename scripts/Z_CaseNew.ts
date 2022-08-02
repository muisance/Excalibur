// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { ethers, upgrades } from "hardhat";

// import publicAddr from "./_publicAddrs";
// import contractAddr from "./_contractAddr";

/**
 * Create a new Jurisdiction Script
 */
async function main() {
    //Data
    let test_uri = "ipfs://QmQxkoWcpFgMa7bCzxaANWtSt43J1iMgksjNnT4vM1Apd7"; //"TEST_URI";

    //Jurisdiction
    // let jurisdictionContract = await ethers.getContractFactory("JurisdictionUpgradable").then(res => res.attach("0x688600ad8896e30270c5d24f30590792f48b0627"));
    let jurisdictionContract = await ethers.getContractFactory("JurisdictionUpgradable")
    .then(res => res.attach("0xd474f8655dd1bc1f9d8f78dbec24149a2755da5e"));
    

    let rolehas = await jurisdictionContract.roleHas("0xE1a71E7cCCCc9D06f8bf1CcA3f236C0D04Da741B", "member");
    console.log("Account roleHas Member:", rolehas);
    
    let targetContract = await jurisdictionContract.getTargetContract()
    console.log("targetContract:", targetContract);

     //Soul Tokens
     let selfSoulToken = 4;
     let otherSoulToken = 2;
   
     let caseName = "Test Case #1";
     let ruleRefArr = [
       {
         jurisdiction: jurisdictionContract.address, 
         ruleId: 1,
       }
     ];
     let roleRefArr: any = [
    //    {
    //     tokenId: selfSoulToken,
    //     role: "subject",
    //    },
    //    {
    //      tokenId: otherSoulToken,
    //      role: "affected",
    //    },
     ];
     let posts: any = [
       {
         tokenId: selfSoulToken, 
         entRole: "admin",
         uri: test_uri,
       }
     ];

     //Simulate - Get New Case Address
     let caseAddr = await jurisdictionContract.callStatic.caseMake(caseName, test_uri, ruleRefArr, roleRefArr, posts);
     console.log("New Case Address: ", caseAddr);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
