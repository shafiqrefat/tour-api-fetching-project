import { useEffect, useState } from "react";
import "./App.css";
import Tours from "./Tours";

function App() {
  const [tourPlanning, setTourPlanning] = useState([]);
  const removeTourPlanning = (id) => {
    const newTourPlanning = tourPlanning.filter(
      (tourPlan) => tourPlan.id !== id
    );
    setTourPlanning(newTourPlanning);
  };
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((response) => response.json())
      .then((data) => setTourPlanning(data));
  }, []);
  if (tourPlanning.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours
        tours={tourPlanning}
        removeTourPlanning={removeTourPlanning}
      ></Tours>
    </main>
  );
}

export default App;
