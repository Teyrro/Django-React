import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6D0bgFw7SuigUPGz7RPVujSEzxObLn6wmA"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
         alt={}/>
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;