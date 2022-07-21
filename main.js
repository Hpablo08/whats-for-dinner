//querySelectors
var cookButton = document.querySelector('.lets-cook-button')
var mealForm = document.querySelector('.meal-form')
var viewCookPot = document.querySelector('.cook-pot-img')
var viewDish = document.querySelector('.view-dish')



//DISHES
var side = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
]

var mainDish = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
]

var dessert = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
]


//Event Listeners
cookButton.addEventListener('click', displayMeal)


// Functions
function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]

  function getRandomPoster() {
  currentMeal = new Meal(getRandomIndex(side), getRandomIndex(mainDish), getRandomIndex(dessert))
  }
}

function displayMeal (event){
  event.preventDefault()
  console.log('hello')
  viewCookPot.classList.add('hidden')
  viewDish.classList.remove('hidden')
}
