const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.querySelector('#ingredients');

  
for (let i = 0; i < ingredients.length; i++) {
  
  const newElement = document.createElement('li');
  
  newElement.textContent = ingredients[i];
  newElement.classList.add('item');
  listElements.insertAdjacentElement('beforeend', newElement)

}



// const murkup = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`).join('');

// murkup.insertAdjacentHTML("beforeend", markup);



