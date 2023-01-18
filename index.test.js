const bakery = require("/.index.js");

describe("index", () => {
  it("recipe1 returns 2", () => {
     const recipe1 = { flour: 500, sugar: 200, eggs: 1 };
     const ingredients = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
     
     let maxCakes = (bakery.cakes(recipe1, ingredients));

     expect(maxCakes).toBe(2);
       
   }) 
});