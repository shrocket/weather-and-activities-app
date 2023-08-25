export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const activityData = Object.fromEntries(formData);
    // const newActivity = {
    //   ...activityData,
    //   isSunnyWeather: "on" === activityData.isSunnyWeather ? true : false, --or-- isSunnyWeather: "on" === activityData.isSunnyWeather
    // };

    const formElements = event.target.elements;
    const newActivity = {
      name: formElements.activityName.value,
      isSunnyWeather: formElements.isSunnyWeather.checked,
    };

    // onAddActivity(newActivity);
    console.log(newActivity);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <label htmlFor="activityName">Name of activity:</label>
      <input type="text" id="activityName" name="activityName"></input>
      <label htmlFor="isSunnyWeather">Sunny weather activity:</label>
      <input type="checkbox" id="isSunnyWeather" name="isSunnyWeather"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
