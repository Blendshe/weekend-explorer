import "./App.css";
import {useState} from "react";
import axios from "axios";

function App() {
  const [outdoorswim, setOutdoorSwim] = useState([]);

  async function getOutdoorSwimData() {
    const API = "http://localhost:8080/outdoorswim";
    const res = await axios.get(API);
    setOutdoorSwim(res.data);
  }

  return (
    <div className="App">
      <h1> Weekend Project </h1>
      <button onClick={getOutdoorSwimData}>Get information</button>
      {outdoorswim.map(function (member, index) {
        return (
          <p key={index}>
            {member.where} is where you'll find the swim spot {member.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
