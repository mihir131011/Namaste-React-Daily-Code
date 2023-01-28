import React from "react";
import ReactDOM from "react-dom/client";

const Component = () => <h3>React Component</h3>;

const FunctionalComponent = () => (
  <div>
    <h1>Namaste</h1>
    <h2>React Functional Component</h2>
    <Component />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
