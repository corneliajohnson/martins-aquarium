import { useTips } from "./TipDataProvider.js";
import { singleTip } from "./Tip.js";

let tips = useTips();

const tipDiv = document.querySelector(".tipList");

export const TipList = () => {
  tipDiv.innerHTML += `${tips.map((tip) => {
    singleTip(tip);
  })}`;
};
