import { singleLocation } from "./Location.js";
import { locationArr } from "./LocationDataProvider.js";

let locationsUL = document.querySelector(".locationList");

export const LocationList = () => {
  locationsUL.innerHTML = `${locationArr
    .map((location) => singleLocation(location))
    .join("")}`;
};
