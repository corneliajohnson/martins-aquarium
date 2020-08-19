/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

export const FishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")
  const fishes = useFish()


  //-------------------------------------
  //MY UGLY CODE -- BUT IT WORKS
  // const allfish = []
  // for (let i = 0; i < fishes.length; i++) {
  //   allfish.push((Fish(fishes[i])))
  // }
  //------------------------------------


  //Function done with class
  let fishHTMLRepresentation = ""
  for (const fish of fishes) {
    fishHTMLRepresentation += Fish(fish);
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
    ${fishHTMLRepresentation}
  `;
}