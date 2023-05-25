import React, { useState } from "react";
import "./WeeklySpendings.css";
import "./MonthlySpendings";
import MonthlySpendings from "./MonthlySpendings";

const WeeklySpendings = ({ day }) => {
  const maximumAmount = Math.max(...day.map((item) => item.amount));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="spendings">
      <div>
        <h2 style={{ color: "hsl(25, 47%, 15%)" }}>Spending - Last 7 days</h2>
        <div className="stapels">
          {day.map((item, index) => {
            const isHighest = item.amount === maximumAmount;

            return (
              <div className="dayAndStapels" key={item.day}>
                <div
                  className="dayAmount"
                  style={{
                    visibility: hoveredIndex === index ? "visible" : "hidden",
                  }}
                  id={`dayAmount-${index}`}
                >
                  ${item.amount}
                </div>
                <div
                  className={`stapel ${isHighest ? "highest" : ""}`}
                  style={{
                    height: `${item.amount}%`,
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <div className="day">{item.day}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="borderDiv"></div>
      <MonthlySpendings day={day} />
    </div>
  );
};

export default WeeklySpendings;
