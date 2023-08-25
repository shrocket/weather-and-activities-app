import { Fragment } from "react";
import useLocalStorageState from "use-local-storage-state";
import App from "../App";

export default function List(activities) {
  const listItems = activities.map((activity) => (
    <li key={activity.id}>
      {activity.name}
      {activity.isSunnyWeather}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
