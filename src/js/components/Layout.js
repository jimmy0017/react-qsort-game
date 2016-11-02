import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import FirstStep from "./FirstStep";

export default class Layout extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Header  /> 
        <div class="container">
          <div class="row">
            <FirstStep />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
