import "./App.scss";
import Billing from "./components/Billing";

function App() {
  return (
    <div className="app">
      <div className="plan">
        <span className="plan__title">Your current plan:</span>
        <span className="plan__type">Starter Trial • 500MAUs</span>
      </div>
      <span className="heading">Choose a plan</span>
      <Billing />
      <div></div>
    </div>
  );
}

export default App;
