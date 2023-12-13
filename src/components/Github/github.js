import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./github.css";
const Github = () => {
  return (
    <div>
      <h1 className="heading">My GitHub Activity</h1>;
      <GitHubCalendar
        style={{ padding: "20px" }}
        id="calender"
        className="react-activity-calendar"
        username="105vivek"
        blockSize={18}
        blockMargin={7}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
};

export default Github;
