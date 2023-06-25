const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    

// // Obtenha a estimativa de custo para implantar o contrato
// const estimatedGasCost = await nftContractFactory.estimateGas;
// console.log(estimatedGasCost);
// // Obtenha o preço atual do gas
// const gasPrice = await hre.ethers.provider.getGasPrice();
// console.log(gasPrice);
// // Calcule o custo total da implantação do contrato
// const deploymentCost = estimatedGasCost.mul(gasPrice);

// console.log(`O custo estimado da implantação do contrato é de ${deploymentCost.toString()} wei`);



    
    const nftContract = await nftContractFactory.deploy();
    // Chamar uma função "pagável" para enviar ether para o contrato
    //await nftContract.payableFunction({ value: ethers.utils.parseEther("1.0") });

    await nftContract.deployed();
    console.log("Contrato implantado em:", nftContract.address);

    // Chama a função.
    let txn = await nftContract.makeAnEpicNFT();
    // Espera ela ser minerada.
    await txn.wait();
    console.log("Cunhou NFT #1");
    // txn = await nftContract.makeAnEpicNFT()
    // // Espera ela ser minerada.
    // await txn.wait()
    // console.log("Cunhou NFT #2")
  }
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
  runMain();