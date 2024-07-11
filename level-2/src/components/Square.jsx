const Square = (props) => {
  const squareColor = props.color || "grey";
  return (
    <button className="square" style={{ backgroundColor: squareColor }}>
      {0}
    </button>
  );
};

export default Square;
