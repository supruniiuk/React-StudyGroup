import "./Card.css";
const Card = (props) => {
  let info = props.content.map((i) => {
    return <p className = "info">{i}</p>;
  });

  return (
    <div className="Card">
      <p className="type">{props.type}</p>
      <p className="price">{props.price}</p>
      <div>{info}</div>
      <button>Learn more</button>
    </div>
  );
};

export default Card;
