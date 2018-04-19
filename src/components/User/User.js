import React from "react";
import "./User.css";

class User extends React.Component {
  render() {
    const { name, score } = this.props.userData;
    console.log(name);
    return (
      <span className="score_name">
        Name : {name}
        <br />
        Score: {score}
      </span>
    );
  }
}

export default User;

//convert user component to look more like navbar//
