import "./App.css";
import Card from "./PriceCard/Card.js"

function App() {

  return (
    <div className="App">
      <h2>Our Pricing</h2>

      <div className="picker">
        <p>Annualy</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Monthly</p>
      </div>

      <div className="cards">
        <Card 
          
        />
      </div>
    </div>
  );
}

export default App;
