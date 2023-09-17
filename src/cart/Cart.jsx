import "./Cart.css";
// props type import
import PropTypes from "prop-types";

// 11th selectedActors passing
// 24th remaining , totalcost passing
const Cart = ({ selectedActors, remaining, totalCost }) => {
  return (
    <div>
      {/* 13th total actors selectd */}
      <h1>selected artist numbers: {selectedActors.length}</h1>

      {/* 25th */}
      <h1>remaining budget: {remaining}</h1>

      {/* 26th */}
      <h1>total cost: {totalCost}</h1>

      <h2>selected artist names: </h2>

      {/* 12th cart item actor mapping data showed */}
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};

// prop types declared
Cart.propTypes = {
  selectedActors: PropTypes.array,
  remaining: PropTypes.number,
  totalCost: PropTypes.number,
};
export default Cart;
