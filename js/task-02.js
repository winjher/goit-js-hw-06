const ingredients= [
'Potatoes',
'Mushrooms',
'Tommatos',
'Herbs',
'Condiments',
];

const emptyUL= getElementById('ingredients');
console.log(emptyUL);

ingredients.forEach(ingredient=>{
  console.log(ingredient);
  const liofEmptyUL=document.createElement('li');
liofEmptyUL.textContent=ingredient;
  console.log(liofEmptyUL);
  emptyUL.appendChild(liofEmptyUL);
}