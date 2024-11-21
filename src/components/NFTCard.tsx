const NFTCard = ({ nft }: { nft: { name: string; imageURI: string; tokenID: number } }) => {
    return (
      <div className="flex flex-col items-center p-4 border rounded-xl shadow-lg">
        <img src={nft.imageURI} alt={`NFT ${nft.tokenID}`} className="w-32 h-32 object-cover mb-2" />
        <p className="font-semibold">{nft.name}</p>
        <p className="text-sm text-gray-600">Token ID: {nft.tokenID}</p>
      </div>
    );
  };
  
  export default NFTCard;
  