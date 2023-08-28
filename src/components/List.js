export default function List({ activities }) {
  console.log(activities);

  const isSunny = true;
  const sunnyList = activities.filter(
    (activity) => activity.isSunnyWeather === isSunny
  );
  const rainyList = activities.filter(
    (activity) => activity.isSunnyWeather !== isSunny
  );

  const listItems1 = sunnyList.map((activity) => (
    <>
      <li key={activity.id}>
        {activity.name}
        {activity.isSunnyWeather ? "😎" : "🌧️"}
      </li>
    </>
  ));

  const listItems2 = rainyList.map((activity) => (
    <>
      <li key={activity.id}>
        {activity.name}
        {activity.isSunnyWeather ? "😎" : "🌧️"}
      </li>
    </>
  ));

  return (
    <>
      <h2>It's sunny! Here are some things you can do outside:</h2>
      <ul>{listItems1}</ul>
      <h2>It's raining! Here are some things you can do inside:</h2>
      <ul>{listItems2}</ul>
    </>
  );
}
