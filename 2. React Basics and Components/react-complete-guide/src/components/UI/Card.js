import "./Card.css";

// This is being used as our "Section"
const Card = (props) => {
  // anything we recieve as a class is added to this string
  const classes = "card " + props.className;

  // .children is not a prop to be set,
  // the value is the content between the opening
  // and closing tags of the component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
