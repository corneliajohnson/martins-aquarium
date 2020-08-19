import { useTips } from './TipDataProvider.js'
import { singleTip } from './Tip.js'

let tips = useTips();

const tipDiv = document.querySelector(".tipList");
let htmlTips = "";

for (let tip of tips) {
  htmlTips += singleTip(tip)
}

export const TipList = () => {
  tipDiv.innerHTML = `${htmlTips}`
}

