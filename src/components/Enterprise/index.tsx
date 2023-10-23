import { starter } from "../../data";
import "../common/styles.scss";

const Starter = () => {
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__header__title">Enterprise</span>
        <span className="card__header__subtitle">Let’s Talk!</span>
      </div>
      <ul className="card__list">
        {starter.list.map((item: any, index: number) => {
          return (
            <li key={index} className="card__list__item">
              {item}
            </li>
          );
        })}
      </ul>
      <button className="card__button">Choose plan</button>
    </div>
  );
};

export default Starter;
