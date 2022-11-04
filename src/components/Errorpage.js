import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <p>404 ERROR</p>
      <p>PAGE NOT FOUND</p>
      <div className="error-page">
        <p>1. Are you sure the website url is correct</p>
        <p>2. Check the website url again</p>
      </div>

      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default ErrorPage;
