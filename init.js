const mongoose = require('mongoose');
const Item = require('./models/item.js');

main()
    .then(() => {
        console.log("connection successfully");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Food');

}

const allItem = [
    {
        name: "Hamburger",
        category: "Burger",
        description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun. Often served with various toppings such as lettuce, tomato, onion, pickles, and condiments like ketchup and mustard.",
        origin: "United States",
        price: 650,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ2VyfGVufDB8fDB8fHww",
      },
      {
        name: "French Fries",
        category: "Side Dish",
        description: "Thin strips of potatoes that are deep-fried until crispy. Often served as a side dish or snack, sometimes accompanied by dipping sauces like ketchup or mayonnaise.",
        origin: "Belgium",
        price: 340,
        image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZyZW5jaCUyMEZyaWVzfGVufDB8fDB8fHww",

      },
      {
        name: "Pizza Slice",
        category: "Pizza",
        description: "A single portion of pizza, typically a wedge-shaped piece cut from a larger pizza. Toppings vary but commonly include tomato sauce, cheese, and various meats and vegetables.",
        origin: "Italy",
        price: 870,
        image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGl6emElMjBTbGljZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Fried Chicken",
        category: "Chicken",
        description: "Chicken pieces that are coated in seasoned flour or batter and deep-fried until crispy. Often served with sides such as mashed potatoes, coleslaw, and biscuits.",
        origin: "United States",
        price: 1350,
        image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZyaWVkJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Taco",
        category: "Mexican",
        description: "A folded or rolled tortilla filled with various ingredients such as meat (usually beef or chicken), lettuce, cheese, salsa, and sour cream.",
        origin: "Mexico",
        price: 730,
        image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRhY298ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Nachos",
        category: "Appetizer",
        description: "Tortilla chips topped with melted cheese and often served with additional toppings such as jalapeños, sour cream, guacamole, and salsa.",
        origin: "Mexico",
        price: 730,
        image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmFjaG9zfGVufDB8fDB8fHww",
      },
      {
        name: "Chicken Nuggets",
        category: "Chicken",
        description: "Small pieces of breaded or battered chicken that are deep-fried until crispy. Often served as a snack or meal with dipping sauces.",
        origin: "United States",
        price: 1700,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyME51Z2dldHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Cheeseburger",
        category: "Burger",
        description: "A hamburger topped with cheese, typically melted over the patty. Often served with traditional hamburger toppings like lettuce, tomato, onion, and condiments.",
        origin: "United States",
        price: 2350,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZXNlYnVyZ2VyfGVufDB8fDB8fHww",
      },
      {
        name: "Fish and Chips",
        category: "Seafood",
        description: "Deep-fried battered fish (usually cod or haddock) served with thick-cut potato fries. Often accompanied by tartar sauce and malt vinegar.",
        origin: "United Kingdom",
        price: 860,
        image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmlzaCUyMGFuZCUyMENoaXBzfGVufDB8fDB8fHww",
      },    
];

Item.insertMany(allItem);