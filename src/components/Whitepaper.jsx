import React, { Component } from 'react';
import Pdf from '../assets/Whitepaper.pdf'

class Whitepaper extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Whitepaper</a>
        </div>
    );

  }
}
export default Whitepaper;