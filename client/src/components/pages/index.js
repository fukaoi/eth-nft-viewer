import React, {useState, useEffect} from "react";
import Web3 from "web3";
import abi from "../../abi/erc721.json";
import {ajax} from 'rxjs/ajax';
import Templates from "../templates";

export const Pages = () => {
  const web3 = new Web3('https://mainnet.infura.io/v3/1835809e0e6a4de38eaf1f7afb51e0ec');
  const address = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";
  const ids = [
    '7391',
    '14118',
    '14024',
    '14117',
    '14025',
    '14116',
  ];

  const [metaDatas, setMetaDatas] = useState([]);
  const contract = new web3.eth.Contract(abi, address);

  useEffect(() => {
    ids.map(async (id) => {
      const url = await contract.methods.tokenURI(id).call();
      ajax.getJSON(url).subscribe(
        res => {
          metaDatas.push(res);
          setMetaDatas(metaDatas);
        });
    })
  }, [])

  return <Templates metaDatas={metaDatas} />;
}

export default Pages;
