
export async function addNFTToMetaMask(tokenId: number) {
    
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

    if (typeof (window as any).ethereum === "undefined") {
      console.error("No Ethereum wallet detected.");
      return;
    }
  
    // Check if the wallet supports `wallet_watchAsset`
    const walletSupportsAssetWatching = (window as any).ethereum?.request?.({
      method: "wallet_watchAsset",
    });
  
    if (!walletSupportsAssetWatching) {
      console.error("Your wallet does not support adding assets via `wallet_watchAsset`.");
      // Optionally, provide manual instructions for unsupported wallets.
      return;
    }

    console.log(contractAddress, tokenId, "work");
  
    try {
      const isSupported = await (window as any).ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC721", // ERC-721 standard
          options: {
            address: contractAddress,
            token_id: tokenId.toString(),
          },
        },
      });
  
      if (isSupported) {
        console.log(`NFT with Token ID ${tokenId} successfully added to MetaMask.`);
      } else {
        console.error("The NFT could not be added to your wallet.");
      }
    } catch (error) {
      console.error("Error adding NFT to wallet:", error);
    }
  }
  
  
  // Example usage
