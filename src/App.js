import "./App.css";
import List from "./components/List";
import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});
  console.log("weather: ", weather);
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("data: ", data);
      setWeather(data);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid() };
    setActivities([...activities, activityWithID]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} weather={weather} />
    </>
  );
}

export default App;
