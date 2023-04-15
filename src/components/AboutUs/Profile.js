import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Profile Functional Componen t</h1>
      <h2>Name : {props?.name}</h2>
      <h3>count : {count}</h3>
      <button
        onClick={() => {
          //   new Audio(sound).play();
          setCount(count + 1);
        }}
      >
        Press
      </button>
    </div>
  );
};

export default Profile;
