import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  // 2nd
  const [allActors, setAllActors] = useState([]);

  // 7th
  const [selectedActors, setSelectedActors] = useState([]);

  // 19th
  const [remaining, setRemaining] = useState(0);

  // 21th
  const [totalCost, setTotalCost] = useState(0);

  // 1st
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      // 3rd
      .then((data) => setAllActors(data));
  }, []);

  // 5th
  const handleSelectActor = (actor) => {
    //   8th
    // setSelectedActors([...selectedActors, actor]);

    // 14th exist data find double disable
    const isExist = selectedActors.find((item) => item.id == actor.id);
    console.log(isExist);

    // 16th actors price total initialization
    let count = actor.salary;

    // 15th condition checking
    if (isExist) {
      return alert("already booked");
    } else {
      // 17th total price foreach
      selectedActors.forEach((item) => {
        count = count + item.salary;
      });

      // 18th remaining cost
      const totalRemaining = 20000 - count;

      // 27th last condition checking
      if (count > 20000) {
        return alert("money has been finished");
      } else {
        // 20th
        setRemaining(totalRemaining);
        // 22th
        setTotalCost(count);

        setSelectedActors([...selectedActors, actor]);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="home-container">
          <div className="card-container">
            {/* 4th */}
            {allActors.map((actor) => (
              <div key={actor.id} className="card">
                <div className="card-img">
                  <img className="photo" src={actor.image} />
                </div>
                <h2>{actor.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, illum!
                  </small>
                </p>
                <div className="info">
                  <p>salary: {actor.salary} $</p>
                  <p>role: {actor.role}</p>
                </div>
                {/* 6th */}
                <button
                  onClick={() => handleSelectActor(actor)}
                  className="card-btn"
                >
                  select
                </button>
              </div>
            ))}
          </div>
          {/* 9th */}
          <div className="cart">
            {/* 10th */}
            <Cart
              selectedActors={selectedActors}
              // 23th
              remaining={remaining}
              totalCost={totalCost}
            ></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
