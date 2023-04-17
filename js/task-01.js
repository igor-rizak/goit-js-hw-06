const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);


totalCategories.forEach((element) => {

  console.log(`Category:  ${ element.firstElementChild.textContent }`)
  console.log(`Elements:  ${ element.lastElementChild.children.length }`)

})


