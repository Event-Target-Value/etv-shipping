const randomProductNameA = () => {
  const randomTopic = [
    'Technical',
    'Winter Technical',
    'Futuristic',
    'Functional',
    'MA-1',
    'Military Style',
    'Climate Cool',
    'Silver Anti-Bacterial',
    'Reinforced',
  ];
  const randomClothing = [
    'Cotton Noragi',
    'Nylon Noragi',
    'Ny/Co Noragi',
    'Goretex Noragi',
    'Jersey Noragi',
    'Ripstop Noragi',
  ];
  let randomized = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return randomTopic[randomized(0,9)] + ' ' + randomClothing[randomized(0,6)];
};

const randomProductNameB = () => {
  const randomTopic = [
    'Cargo',
    'Technical Cargo',
    'Utility',
    'Parachute',
    'Utilitarian',
    'Multi-purpose',
    'Futuristic',
    'Paratrooper',
    'Medical',
  ];
  const randomClothing = [
    'Ripstop Pants',
    'NyCo Pants',
    'Goretex Pants',
    'Summer Pants',
    'Heat-tech Pants',
    'Fire Pants',
  ];
  let randomized = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return randomTopic[randomized(0,9)] + ' ' + randomClothing[randomized(0,6)];
};

const randomProductNameC = () => {
  const randomTopic = [
    'Cooling',
    'Climate-Cool',
    'Summer',
    'Moisture-Wicking',
    'Anti-Bacterial',
    'Odor Control',
    'Active Cooling',
    'Training',
    'Sports',
  ];
  const randomClothing = [
    'Cotton Shirt',
    'Workout Shirt',
    'Jersey Shirt',
    'Breathable Shirt',
    'Rip-resistant Shirt',
    'Exercize Shirt',
  ];
  let randomized = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return randomTopic[randomized(0,9)] + ' ' + randomClothing[randomized(0,6)];
};


const randomPrice = () => {
  return Number((Math.random() * (80.99 - 1.99) + 1.99).toFixed(2));
};


const randomZipCodes = () => {
  let zipcodes = [];
  let randomTotalZips = Math.floor(Math.random() * (50 - 10) + 10);
  while (randomTotalZips > 0) {
    let newZip = Math.floor(Math.random() * (95000 - 94000) + 94000);
    zipcodes.push(newZip);
    randomTotalZips--
  }
  return zipcodes;
};

// RANDOMRECOMMENDATIONS
// const randomRecommended = () => {
//   let recoms = [];
//   let randomRecoms = (Math.floor(Math.random() * (12 - 3) + 3));
//   while (randomRecoms > 0) {
//     let object = {
//       name: randomProductName(),
//       price: randomPrice(),
//       recImage: 'URL'
//     }
//   }
// }

const dummyData = [
  {
    productId: 100,
    recommended: [],
    price: randomPrice(),
    zip: randomZipCodes(),
    image: 'AWS IMAGE URL 0',
  },
  {
    productId: 200,
    recommended: [],
    price: randomPrice(),
    zip: randomZipCodes(),
    image: 'AWS IMAGE URL 1',
  },
  {
    productId: 300,
    recommended: [],
    price: randomPrice(),
    zip: randomZipCodes(),
    image: 'AWS IMAGE URL 2',
  },
  {
    productId: 400,
    recommended: [],
    price: randomPrice(),
    zip: randomZipCodes(),
    image: 'AWS IMAGE URL 3',
  },
  {
    productId: 500,
    recommended: [],
    price: randomPrice(),
    zip: randomZipCodes(),
    image: 'AWS IMAGE URL 4',
  },
];

console.log(dummyData);

module.exports.dummyData = dummyData;

