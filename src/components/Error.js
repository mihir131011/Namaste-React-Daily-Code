import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("🚀 ~ file: Error.js:5 ~ Error ~ err", err);
  return (
    <div>
      <h1>Oops !!</h1>
      <h2>Something went wrong</h2>
      <>{err.status + " : " + err.statusText}</>
    </div>
  );
};

export default Error;
