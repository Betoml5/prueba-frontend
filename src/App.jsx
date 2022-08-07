import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import FoodTrucksMap from "./containers/FoodTrucksMap";

function App() {
  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="">
      <main className="h-screen">
        <section className="h-96">
          <FoodTrucksMap />
        </section>
      </main>
    </div>
  );
}

export default App;
