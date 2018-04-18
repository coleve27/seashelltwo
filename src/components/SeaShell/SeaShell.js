import React from "react";
import "./SeaShell.css";
import img from "./images/seashell.png";

class SeaShell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pearlLocation: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const newState = { pearlLocation: true };

    this.setState(newState);
  }

  componentDidMount() {
    if (this.state.pearlLocation === this.props.id) {
      this.setState({
        pearlLocation: true
      });
    }
  }
  render() {
    return (
      <img
        className="seashells"
        src={img}
        alt="Seashell"
        onClick={() => this.props.handleClick(this.props)}
      />
    );
  }
}

export default SeaShell;
