/**
 *
 * HMR : Hot Module Replacement
 * File Watcher Algorithms - C++
 * Building
 * Minification
 * Cleaning the code
 * Dev and production build
 * Super Fast build algorithm
 * Image Optimisation
 * Caching while development
 * Compression
 * Compatible with older versions of browsers
 * It adds polyfills
 * HTTPS on dev
 * Port numbers
 * Consistent Hashing Algorithms
 * Zero Config Bundlers
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const headingForReact1 = React.createElement(
  "h1",
  { id: "title", key: "1" },
  "Heading from Parcel"
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
