import React from "react";
import moment from "moment";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log(`Constructor Function Child ${this?.props?.chronology}`);
  }

  async componentDidMount() {
    console.log(`Component Dids Mount Child  ${this?.props?.chronology}`);
    const data = await fetch("https://api.github.com/users/mihir131011");
    const json = await data.json();
    this?.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this?.state?.count !== prevState?.count) {
      console.log("Component Did Update");
    }
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    {
      console.log(`Render Function Child ${this?.props?.chronology}`);
    }
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img
          src={this?.state?.userInfo?.avatar_url}
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <h2>Name : {this?.state?.userInfo?.name}</h2>
        <h3>
          Created At:{" "}
          {moment(this?.state?.userInfo?.createdAt).format("DD MMMM YYYY")}
        </h3>

        <button
          onClick={() =>
            this?.setState({
              count: this?.state?.count + 1,
            })
          }
        >
          Update count
        </button>
      </div>
    );
  }
}

export default Profile;
