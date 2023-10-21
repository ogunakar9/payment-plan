const Button = (props: any) => {
  return (
    <button className={`card__button`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
