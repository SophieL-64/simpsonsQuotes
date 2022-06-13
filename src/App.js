import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import { useState } from "react";

function App() {
  const [simpson, setSimpson] = useState({});

  const getSimpsons = () => {
    console.log("test");
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard simpson={simpson} getSimpsons={getSimpsons} />
    </div>
  );
}

export default App;
