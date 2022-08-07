import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import FoodTrucksMap from "./containers/FoodTrucksMap";

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((res) => res.json())
      .then((data) => setFoodTrucks(data));
  }, []);

  return (
    <div className="">
      <main className="">
        <section className="h-screen">
          <FoodTrucksMap foodTrucks={foodTrucks} />
        </section>
      </main>
    </div>
  );
}

export default App;
