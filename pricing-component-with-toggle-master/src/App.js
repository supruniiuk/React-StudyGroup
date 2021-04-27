import "./App.css";
import year from "./info/year";
import month from "./info/month";
import Card from "./PriceCard/Card.js";
import React, { useState } from "react";

function App() {
  const [yearState, setYear] = useState(false);
  let time = month;
  if (yearState) {
    time = year;
  }
  let content = time.map((suggestion) => {
    return (
      <Card
        type={suggestion.type}
        price={suggestion.price}
        content={suggestion.content}
        link={suggestion.link}
      />
    );
  });
  return (
    <div className="App">
      <h2>Our Pricing</h2>

      <div className="picker">
        <p>Annualy</p>
        <label class="switch">
          <input type="checkbox" onClick={() => setYear(!!!yearState)} />
          <span class="slider round"></span>
        </label>
        <p>Monthly</p>
      </div>

      <div className="cards">{content}</div>
    </div>
  );
}

export default App;
