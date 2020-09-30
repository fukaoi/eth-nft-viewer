import React, {useState, useEffect} from "react";
import axios from "axios";
import Web3 from "web3";
import abi from "../abi/erc721.json";
import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';

import "./App.css";

export const App = () => {
  const web3 = new Web3('https://mainnet.infura.io/v3/1835809e0e6a4de38eaf1f7afb51e0ec');
  const address = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";
  const ids = [
    '7391',
  ];

  const [images, setImages] = useState([]);
  const contract = new web3.eth.Contract(abi, address);

  // my cry
  // const address = "0x273f7f8e6489682df756151f5525576e322d51a3";
  // crypto kitty
  // const address = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
  // SuperRare
  useEffect(() => {
    (async () => {
      ids.map(async (id) => {
        const url = await contract.methods.tokenURI(id).call();
        ajax.getJSON(url).subscribe(setImages);
      })
    })();
  }, [])

  console.log(images);

  // let dict = [];
  // let n = 1;

  // for (let i in ids) {


    // axios.get(url).then(
      // res => {
        // dict.push(
          // <div
            // className="item"
            // style={{display: "inline-block"}}
            // key={n++}
          // >
            // <img src={res['data']['image']}
              // width="150"
              // height="150"
              // border="0"
            // />
          // </div>
        // );
        // setImages({imageList: dict});
      // }
    // );
  // }

  return <div className="App">{images.image}</div>;
}

export default App;
