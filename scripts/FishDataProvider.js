const fishCollection = [
  {
    name: "Big Blue",
    species: "Male Beta",
    length: "2 inches",
    diet: "Flies",
    harvestLocation: "Walmart",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Orange Guy",
    species: "Gold Fish",
    length: "1 inch",
    diet: "specales",
    harvestLocation: "Gulf of Mexico",
    image: "../images/orangefish.jfif"

  },
  {
    name: "Pinky",
    species: "Pooper",
    length: "3 inches",
    diet: "Fish Food",
    harvestLocation: "Pierto Rico",
    image: "../images/pinkfish.jfif"
  },
  {
    name: "Ram",
    species: "Cosmo",
    length: "2 inches",
    diet: "Crumbs",
    harvestLocation: "Perian Gulf",
    image: "../images/yellowbluefish.jfif"
  },
  {
    name: "Nemo",
    species: "Clownfish",
    length: "1.5 inches",
    diet: "Copepods",
    harvestLocation: "Orlando, FL",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Torch",
    species: "Flame Angelfish",
    length: "3 inches",
    diet: "Mealworms",
    harvestLocation: "San Jose, CA",
    image: "../images/pinkfish.jfif"
  },
  {
    name: "Rocky",
    species: "Blue Damselfish",
    length: "2 inches",
    diet: "Copepods",
    harvestLocation: "Destin, FL",
    image: "../images/orangefish.jfif"
  },
  {
    name: "Rudy",
    species: "Copperband Butterflyfish",
    length: "5 inches",
    diet: "Mealworms",
    harvestLocation: "Costa Rica",
    image: "../images/yellowbluefish.jfif"
  },
  {
    name: "Simba",
    species: "Lionfish",
    length: "6 inches",
    diet: "Mealworms",
    harvestLocation: "Argentina",
    image: "../images/bluefish.jfif"
  },
  {
    name: "Mr. Freeze",
    species: "Blue Tang",
    length: "6 inches",
    diet: "Mealworms",
    harvestLocation: "Costa Rica",
    image: "../images/orangefish.jfif"
  },
  {
    name: "Frodo",
    species: "Yellow Tang",
    length: "4 inches",
    diet: "Mealworms",
    harvestLocation: "Honolulu, HI",
    image: "../images/pinkfish.jfif"
  }
]

// export a function that will return a copy of the original array
export const useFish = () => {
  return fishCollection.slice();
}