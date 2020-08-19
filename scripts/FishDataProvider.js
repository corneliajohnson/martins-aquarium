const fishCollection = [
  {
    name: "Big Blue",
    species: "Male Beta",
    length: "2 inches",
    diet: "Flies",
    harvestLocation: "Walmart"
  },
  {
    name: "Orange Guy",
    species: "Gold Fish",
    length: "1 inch",
    diet: "specales",
    harvestLocation: "Gulf of Mexico"
  },
  {
    name: "Pinky",
    species: "Pooper",
    length: "3 inches",
    diet: "Fish Food",
    harvestLocation: "Pierto Rico"
  },
  {
    name: "Ram",
    species: "Cosmo",
    length: "2 inches",
    diet: "Crumbs",
    harvestLocation: "Perian Gulf"
  },
  {
    name: "Nemo",
    species: "Clownfish",
    length: "1.5 inches",
    diet: "Copepods",
    harvestLocation: "Orlando, FL"
  },
  {
    name: "Torch",
    species: "Flame Angelfish",
    length: "3 inches",
    diet: "Mealworms",
    harvestLocation: "San Jose, CA"
  },
  {
    name: "Rocky",
    species: "Blue Damselfish",
    length: "2 inches",
    diet: "Copepods",
    harvestLocation: "Destin, FL"
  },
  {
    name: "Rudy",
    species: "Copperband Butterflyfish",
    length: "5 inches",
    diet: "Mealworms",
    harvestLocation: "Costa Rica"
  },
  {
    name: "Simba",
    species: "Lionfish",
    length: "6 inches",
    diet: "Mealworms",
    harvestLocation: "Argentina"
  },
  {
    name: "Mr. Freeze",
    species: "Blue Tang",
    length: "6 inches",
    diet: "Mealworms",
    harvestLocation: "Costa Rica"
  },
  {
    name: "Frodo",
    species: "Yellow Tang",
    length: "4 inches",
    diet: "Mealworms",
    harvestLocation: "Honolulu, HI"
  }
]

// export a function that will return a copy of the original array
export const useFish = () => {
  return fishCollection.slice();
}