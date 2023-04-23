const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.getElementById('ingredients');


const markup = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.classList.add = 'item'
  items.textContent = `${ingredient}`
  listElements.append(items);
})

console.log(listElements)


