import { useState } from "react";
import "./styles.scss";

const Billing = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="billing">
      <span className="billing__month">Billed monthly</span>
      <label className="billing__switch">
        <input
          className="billing__switch__input"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <span
          className={`billing__switch__slider ${checked ? "checked" : ""}`}
        />
      </label>
      <span className="billing__year">Billed anually</span>
    </div>
  );
};

export default Billing;
