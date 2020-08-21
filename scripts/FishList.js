/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { Fish } from './Fish.js'
import { useFish, makeMostHolyFish, makeSoldierFish, makeNonHolyFish } from './FishDataProvider.js'
const contentElement = document.querySelector(".fishList")

export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  // const fishes = useFish()
  const holyFish = makeMostHolyFish()
  const soliderFish = makeSoldierFish()
  const nonholyfish = makeNonHolyFish()

  return whichFish(holyFish)
}

const whichFish = (fishArr) => {
  //Function done with class
  let fishHTMLRepresentation = ""
  for (const fish of fishArr) {
    fishHTMLRepresentation += Fish(fish);
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      ${fishHTMLRepresentation}
    `;
}