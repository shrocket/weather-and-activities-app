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
  function handleDeleteActivity(activity) {
    setActivities(
      activities.filter((_activity) => _activity.id !== activity.id)
    );
  }
  return (
    <>
      <List
        activities={activities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
