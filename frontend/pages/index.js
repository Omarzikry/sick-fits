import React, { Component } from "react";
import Items from "../components/Items";

class Home extends Component {
  render() {
    return (
      <div>
        <Items page={parseFloat(this.props.query.page) || 1} />
      </div>
    );
  }
}

export default Home;
