import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState("");
  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid };
    setActivities({ ...activities, activityWithID });
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
