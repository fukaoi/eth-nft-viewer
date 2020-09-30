import React, {Component} from "react";
import axios from "axios";
import Web3 from "web3";
import abi from "./abi/erc721.json";

import "./App.css";

class App extends Component {
  state = {imageList: []};

  componentDidMount = async () => {
    try {
      const web3 = new Web3('https://mainnet.infura.io/v3/1835809e0e6a4de38eaf1f7afb51e0ec');

      // my cry
      // const address = "0x273f7f8e6489682df756151f5525576e322d51a3";
      // crypto kitty
      // const address = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
      // SuperRare
      const address = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";
      const ids = [
        '7391',
      ];

      let dict = [];
      let n = 1;

      const c = new web3.eth.Contract(abi, address);
      for (let i in ids) {
        const response = await c.methods.tokenURI(ids[i]).call();
        console.log(response);
        axios.get(response).then(
          res => {
            dict.push(
              <div
                className="item"
                style={{display: "inline-block"}}
                key={n++}
              >
                <img src={res['data']['image']}
                  width="150"
                  height="150"
                  border="0"
                />
              </div>
            );
            this.setState({imageList: dict});
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return <div className="App">{this.state.imageList}</div>;
  }
}

export default App;
