import "./Card.css";
const Card = (props) => {
  let info = props.content.map((i) => {
    return <p className="info">{i}</p>;
  });

  return (
    <div className="Card">
      <p className="type">{props.type}</p>
      <p className="price">{props.price}</p>
      <div>{info}</div>
      <a class="button" href={props.link} target="_blank">
        <button type="button">Learn more</button>
      </a>
    </div>
  );
};

export default Card;
