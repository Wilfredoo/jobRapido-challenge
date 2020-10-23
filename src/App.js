import React, { useEffect } from "react";
import "./App.css";
import jobs from "./jobs.json";
import moment from "moment";

function App() {
  return (
    <div className="App">
      <h1>JobRapido Challenge</h1>
      <h2>Jobs in New Hampshire</h2>
      <div className="allPosts">
        {Object.entries(jobs).map(([key, value]) => {
          return (
            <div className="jobPost" key={value._id}>
              <p className="text employer">{value.employer}</p>
              <p className="text jobType">{value.jobType}</p>
              <p className="text area">{value.area}</p>
              <p className="text createdAt">{moment(value.createdAt).fromNow()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
