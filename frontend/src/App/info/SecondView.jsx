import React from "react";
import NavBar from "../FirstView/NavBar/NavBar.jsx";
import "./SecondView.css";

function SecondView() {
  return (
    <>
      <NavBar />
      <div className="secondView">
        <div className="text">
            <p>learn more about us.</p>
        </div>
      </div>
    </>
  );
}

export default SecondView;
