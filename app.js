// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.


var pizza = {
  crust: "Traditional",
  cheese: "mozzarella",
  meats: "pepperoni",
  veggie: ["mushrooms","olives"]  
}

console.log(pizza)

function pizzaOven(crust,sauce,cheese,toppings) {
  var pizza = {};
  pizza.crust = crust;
  pizza.sauce = sauce;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza
}

var pizza1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepporoni", "sausage"])

var pizza2 = pizzaOven("hand tossed", "marinara",["mozzarella","feta"],["mushrooms","olives","onions"])

var pizza3 = pizzaOven("hand tossed","traditional",["mozzarella"],["pepporoni", "black garlic", "mushrooms"])

var pizza4 = pizzaOven("hand tossed","traditional",["mozzarella", "chedder"],["sausage", "olives", "mushrooms","green pepper"])