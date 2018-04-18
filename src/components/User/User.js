import React from "react";

class User extends React.Component {
  render() {
    const { name, score } = this.props.userData;
    console.log(name);
    return (
      <span>
        Name : {name}
        <br />
        Score: {score}
      </span>
    );
  }
}

export default User;

//convert user component to look more like navbar//
