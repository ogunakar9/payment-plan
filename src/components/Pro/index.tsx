import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { pro } from "../../data";
import "../common/styles.scss";
import "./styles.scss";

const Pro = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="card pro-section">
      <div className="card__header">
        <span className="card__header__title">Pro</span>
        <div>
          <span className="card__header__subtitle">$99</span>
          <span className="card__header__division"> / month</span>
        </div>
      </div>
      <div className="pro-section__form">
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Monthly active users</FormHelperText>
        </FormControl>
        <ul className="card__list">
          {pro.list.map((item: any, index: number) => {
            return (
              <li key={index} className="card__list__item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="card__button pro">Choose plan</button>
    </div>
  );
};

export default Pro;
