import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ErrorBoundaries() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>Oops something went wrong. Page not Found</h3>
      <Link to="/"> Click to redirect to home</Link>

      {/* To navigate on a button click or after an api call u need to use useNavigate */}
      <button onClick={onClickHandler}>Click Me also to go to homepage</button>
    </div>
  );
}

export default ErrorBoundaries;
