import React from "react";
// import data from "../../data.json";
import Nav from "../Nav/Nav.js";
import "./Home.css";

class Home extends React.Component {
  // myInput = React.createRef();

  goToGame = event => {
    event.preventDefault();
    const userName = this.refs.myInput.value;
    console.log(this);
    this.props.history.push(`/game/${userName}`);
  };

  render() {
    console.log("render");
    return (
      <form className="login_container" onSubmit={this.goToGame}>
        <h2>Please Enter A Username</h2>

        <input
          type="text"
          ref="myInput"
          required
          placeholder="Username"
          defaultValue="user1"
        />
        <button type="submit">Start →</button>
      </form>
    );
  }
}

export default Home;
