import "./App.css";
import Balance from "./Components/Balance";
import WeeklySpendings from "./Components/WeeklySpendings";
import Data from "../data.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Balance />
        <WeeklySpendings day={Data} />
      </div>
    </div>
  );
}

export default App;
