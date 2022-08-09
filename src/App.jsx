import "./App.css";
import { useEffect, useState } from "react";
import FoodTrucksMap from "./containers/FoodTrucksMap";
import { getFoodTrucksAPI } from "./services/FoodTruck";

function App() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  const getFoodTrucks = async () => {
    try {
      const data = await getFoodTrucksAPI();

      if (!data) {
        throw new Error("No data");
      } else {
        setFoodTrucks(data);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getFoodTrucks();
  }, []);

  return (
    <div>
      <main>
        <section className="h-screen">
          <FoodTrucksMap foodTrucks={foodTrucks} />
        </section>
      </main>
    </div>
  );
}

export default App;
