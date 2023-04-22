const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.getElementById('ingredients');


const markup = [...ingredients]
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join('');

  listElements.append = markup;

