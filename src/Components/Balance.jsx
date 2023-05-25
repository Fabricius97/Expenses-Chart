import React from "react";
import "./Balance.css";
import myBalanceImg from "../../images/logo.svg";

const Balance = () => {
  return (
    <div className="balance">
      <div className="myBalance">
        <p>My balance</p>
        <h2 style={{ fontSize: "28px" }}>$927.48</h2>
      </div>
      <img src={myBalanceImg} alt="Balance Img" />
    </div>
  );
};

export default Balance;
