import Button from "./Button";
import Dropdown from "./Dropdown";
import List from "./List";
import Money from "./Money";

const Card = (props: any) => {
  const { isDropdown, moneyData, ListData, ButtonData } = props;

  return (
    <div className="card">
      <Money {...moneyData} />
      {isDropdown ? <Dropdown /> : <></>}
      <List {...ListData} />
      <Button {...ButtonData} />
    </div>
  );
};

export default Card;
