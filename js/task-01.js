const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);



totalCategories.forEach((element) => {

  console.log(` Category:  ${ element.firstElementChild.innerText }`)
  console.log(` Elements:  ${ element.children[1].children.length }`)

})


