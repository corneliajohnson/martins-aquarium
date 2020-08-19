/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
  return `
    <div class=".fishList-card">
      <div class="card-image">
        <img class="fish-image" src="images/${fish.image}" alt="Beatiful Orange Fish">
      </div>
      <ul>
        <li>Name: ${fish.name}</li>
        <li>Species: ${fish.species}</li>
        <li>Length: ${fish.length}s</li>
        <li>Diet: ${fish.diet}</li>
        <li>Harvest Location: ${fish.harvestLocation}</li>
      </ul>
  </div>
  `
}