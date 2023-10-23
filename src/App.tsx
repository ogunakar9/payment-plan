import "./App.scss";
import { Billing, Starter, Pro, Enterprise } from "./components";

function App() {
  return (
    <div className="app">
      <div className="plan">
        <span className="plan__title">Your current plan:</span>
        <span className="plan__type">Starter Trial • 500MAUs</span>
      </div>
      <span className="heading">Choose a plan</span>
      <Billing />
      <div className="plan-wrapper">
        <Starter />
        <Pro />
        <Enterprise />
      </div>
    </div>
  );
}

export default App;
