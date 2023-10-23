import { pro } from "../../data";
import "../common/styles.scss";

const Pro = () => {
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__header__title">Pro</span>
        <div>
          <span className="card__header__subtitle">$99</span>
          <span className="card__header__division"> / month</span>
        </div>
      </div>
      <ul className="card__list">
        {pro.list.map((item: any, index: number) => {
          return (
            <li key={index} className="card__list__item">
              {item}
            </li>
          );
        })}
      </ul>
      <button className="card__button pro">Choose plan</button>
    </div>
  );
};

export default Pro;
