import { Fragment } from "react";
import { useState } from "react";

export default function Form(onAddActivity) {
  const [activityName, setActivityName] = useState("");
  const [isSunnyWeather, setIsSunnyWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);
    setActivityName(activityData.activityName);
    setIsSunnyWeather(activityData.isSunnyWeather.checked);
    event.target.reset();
  }

  return (
    <>
      <form>
        <h2>Add new activity:</h2>
        <label htmlFor="activityName">Name of activity:</label>
        <input type="text" id="activityName" name="activityName"></input>
        <label htmlFor="isSunnyWeather">Sunny weather activity:</label>
        <input
          type="checkbox"
          id="isSunnyWeather"
          name="isSunnyWeather"
        ></input>
        <button type="submit" onClick={onAddActivity}>
          Submit
        </button>
      </form>
    </>
  );
}
