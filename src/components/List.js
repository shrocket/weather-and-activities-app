export default function List({ activities, weather, onDeleteActivity }) {
  console.log(activities);

  const filteredList = activities.filter(
    (activity) => activity.isSunnyWeather === weather.isGoodWeather
  );

  const listItems = filteredList.map((activity) => (
    <li key={activity.id}>
      {activity.name}
      {activity.isSunnyWeather ? "😎" : "🌧️"}
      <button type="button" onClick={() => onDeleteActivity(activity)}>
        x
      </button>
    </li>
  ));

  return (
    <>
      <h1>
        {weather.condition} {weather.temperature}
      </h1>
      <h2>
        {weather.isGoodWeather === true
          ? "It's sunny! Here are some things you can do outside:"
          : "It's raining! Here are some things you can do inside:"}
      </h2>{" "}
      <ul>{listItems}</ul>
    </>
  );
}
