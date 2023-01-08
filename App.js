const headingForNomalJS = document.createElement("h1");
headingForNomalJS.innerHTML = "Namaste from Normal JavaScript";
const rootForNormalJS = document.getElementById("rootForNormalJS");
rootForNormalJS.appendChild(headingForNomalJS);

const headingForReact1 = React.createElement(
  "h1",
  { id: "title", key: "1" },
  "Heading 1"
);
const headingForReact2 = React.createElement(
  "h2",
  { id: "title", key: "2" },
  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  headingForReact1,
  headingForReact2,
]);

const rootForReact = ReactDOM.createRoot(
  document.getElementById("rootForReact")
);
rootForReact.render(container);
