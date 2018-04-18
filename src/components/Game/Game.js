import React from "react";
// import data from "../../data.json";
import Nav from "../Nav/Nav.js";
import Container from "../Container/Container.js";
import SeaShell from "../SeaShell/SeaShell.js";
import User from "../User/User.js";

var data = [];

// var user = [
//   {
//     name: this.props.match.params.userName,
//     score: 100
//   }
// ];

for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    hasPearl: false,
    clicked: false
  });
}

class Game extends React.Component {
  state = {
    isPlacing: false,
    data,
    user: {
      name: this.props.match.params.userName,
      score: 100
    }
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.userId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.setState({ data: this.shufflePearl(this.state.data) });
  }

  shufflePearl(data) {
    data[Math.floor(Math.random() * data.length)].hasPearl = true;
    return data;
  }

  resetShell(data) {}

  /* componentWillReceiveProps({ data }) {
    const newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }
  */

  userChoosesShell = props => {
    console.log("user");
    this.setState({ isPlacing: !this.state.isPlacing });
    this.setState({ date: (this.state.data[props.id].hasPearl = true) });
  };

  handleItemClick = props => {
    console.log(this.state.isPlacing);
    if (props.hasPearl) {
      alert("you found the pearl");
      this.setState({ isPlacing: !this.state.isPlacing });
      this.setState({ date: (this.state.data[props.id].hasPearl = false) });
      this.setState({
        userData: (this.state.user.score = this.state.user.score + 1)
      });
      // console.log(user[0].score);
    } else {
      alert("try a different pearl");
      this.setState({
        userData: (this.state.user.score = this.state.user.score - 1)
      });
      // console.log(user[0].score);
    }
  };

  render() {
    console.log("render");
    return (
      <div>
        <Nav userData={this.state.user} />

        <Container>
          {this.state.data.map(item => (
            <div key={item.id}>
              {JSON.stringify(item)}

              <SeaShell
                id={item.id}
                hasPearl={item.hasPearl}
                handleClick={
                  this.state.isPlacing
                    ? this.userChoosesShell
                    : this.handleItemClick
                }
                // userChoosesShell={this.userChoosesShell}
              />
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
