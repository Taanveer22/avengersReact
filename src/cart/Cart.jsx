import "./Cart.css";
// props type validation
import PropTypes from "prop-types";

// 11th selectedActors passing
// 24th remaining , totalcost passing
const Cart = ({ selectedActors, remaining, totalCost }) => {
//   console.log(selectedActors);
  return (
      <div>
          
      {/* 13th total actors selectd */}
          <h5>total actors: {selectedActors.length}</h5>

          {/* 25th */}
          <h4>remaining: {remaining}</h4>
          
          {/* 26th */}
          <h3>total cost: {totalCost}</h3>
          
      {/* 12th cart item actor mapping data showed */}
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};


// prop types validation
Cart.propTypes = {
    selectedActors: PropTypes.array,
    remaining: PropTypes.number,
    totalCost: PropTypes.number
}
export default Cart;
