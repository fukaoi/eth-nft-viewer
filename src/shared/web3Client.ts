import Web3 from "web3";
import abi from "../abi/erc721.json";

const web3 = new Web3('https://mainnet.infura.io/v3/1835809e0e6a4de38eaf1f7afb51e0ec');
const address = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";

export const getMetaData = async (id: string) => {
  return await new web3.eth.Contract(abi, address).methods.tokenURI(id).call();
}

export const getTokenIds = () =>
  [
    '7391',
    '14118',
    '14024',
    '14117',
    '14025',
    '14116',
  ];

