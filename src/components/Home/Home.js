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
      <div className="login_positioner">
        <h1 className="title_game"> 100 Seashells</h1>

        <form className="login_container" onSubmit={this.goToGame}>
          <input
            className="user_input"
            type="text"
            ref="myInput"
            required
            placeholder="Username"
            defaultValue=""
          />
          <button type="submit">PLAY</button>
        </form>
      </div>
    );
  }
}

export default Home;
