const fishCollection = [
  {
    name: "Big Blue",
    species: "Male Beta",
    length: 2,
    diet: "Flies",
    harvestLocation: "Walmart",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Orange Guy",
    species: "Gold Fish",
    length: 1,
    diet: "specales",
    harvestLocation: "Gulf of Mexico",
    image: "../images/orangefish.jfif"

  },
  {
    name: "Pinky",
    species: "Pooper",
    length: 3,
    diet: "Fish Food",
    harvestLocation: "Pierto Rico",
    image: "../images/pinkfish.jfif"
  },
  {
    name: "Ram",
    species: "Cosmo",
    length: 9,
    diet: "Crumbs",
    harvestLocation: "Perian Gulf",
    image: "../images/yellowbluefish.jfif"
  },
  {
    name: "Nemo",
    species: "Clownfish",
    length: 8,
    diet: "Copepods",
    harvestLocation: "Orlando, FL",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Torch",
    species: "Flame Angelfish",
    length: 3,
    diet: "Mealworms",
    harvestLocation: "San Jose, CA",
    image: "../images/pinkfish.jfif"
  },
  {
    name: "Rocky",
    species: "Blue Damselfish",
    length: 2,
    diet: "Copepods",
    harvestLocation: "Destin, FL",
    image: "../images/orangefish.jfif"
  },
  {
    name: "Rudy",
    species: "Copperband Butterflyfish",
    length: 7,
    diet: "Mealworms",
    harvestLocation: "Costa Rica",
    image: "../images/yellowbluefish.jfif"
  },
  {
    name: "Simba",
    species: "Lionfish",
    length: 6,
    diet: "Mealworms",
    harvestLocation: "Argentina",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Mr. Freeze",
    species: "Blue Tang",
    length: 5,
    diet: "Mealworms",
    harvestLocation: "Costa Rica",
    image: "../images/orangefish.jfif"
  },
  {
    name: "Frodo",
    species: "Yellow Tang",
    length: 4,
    diet: "Mealworms",
    harvestLocation: "Honolulu, HI",
    image: "../images/pinkfish.jfif"
  }
]

// export a function that will return a copy of the original array
export const useFish = () => {
  return fishCollection.slice();
}

export const makeMostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const mostHolyFishArray = []

  for (const theFish of fishCollection) {
    if (theFish.length % 3 === 0) {
      mostHolyFishArray.push(theFish)
    }
  }

  return mostHolyFishArray
}

export const makeSoldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soliderFishArray = []
  for (const theFish of fishCollection) {
    if (theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
      soliderFishArray.push(theFish)
    }
  }
  return soliderFishArray
}

export const makeNonHolyFish = () => {
  const regularFishArray = []
  for (const theFish of fishCollection) {
    if (theFish.length % 5 === 0 && theFish.length % 3 === 0) {
      regularFishArray.push(theFish)
    }
  }
  return regularFishArray
}