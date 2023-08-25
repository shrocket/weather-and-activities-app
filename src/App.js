import "./App.css";
import List from "./components/List";
import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useState("");
  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid };
    setActivities({ ...activities, activityWithID });
  }
  return (
    <>
      <List />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
