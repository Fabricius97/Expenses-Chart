import React from "react";
import "./MonthlySpendings.css";

const MonthlySpendings = ({ day }) => {
  const totalAmount = day.reduce((sum, day) => sum + day.amount, 0);
  return (
    <div className="monthlySpendings">
      <div className="thisMonth">
        <div style={{ color: "grey", fontSize: "14px" }}>Total this month</div>
        <div className="total-amount">
          <h1 style={{ color: "hsl(25, 47%, 15%)" }}>${totalAmount}</h1>
        </div>
      </div>
      <div className="lastMonth">
        <div
          className="percentLastMonth"
          style={{ color: "hsl(25, 47%, 15%)", fontWeight: "bold" }}
        >
          +2.4%
        </div>
        <div style={{ color: "grey", fontSize: "14px" }}>from last month</div>
      </div>
    </div>
  );
};

export default MonthlySpendings;
