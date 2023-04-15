import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React, { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("Parent Constructor");
  }

  componentDidMount() {
    // API call
    console.log("Parent Component Did Mount");
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>AboutUs Us Page</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Parent
        </button>
        {/* <ProfileFunctionalComponent name={"Madhav Poojara"} /> */}
        <ProfileFunctionalComponent name={"Madhav Poojara"} />
        {/* <Profile name={"Mihir Poojara"} chronology={1} /> */}
        {/* <Profile /> */}
      </div>
    );
  }
}

export default AboutUs;
