import { singleLocation } from './Location.js'
import { locationArr } from './LocationDataProvider.js'


let locationsUL = document.querySelector(".locationList");

let liforHTML = "";

locationArr.forEach(place => {
  liforHTML += singleLocation(place)
});

export const LocationList = () => {
  locationsUL.innerHTML = liforHTML;
}