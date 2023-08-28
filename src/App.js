import "./App.css";
import List from "./components/List";
// import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid() };
    setActivities([...activities, activityWithID]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}

export default App;
