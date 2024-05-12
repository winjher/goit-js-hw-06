
const categoriesList = document.querySelectorAll('#categories .item');
console.log(categoriesList);

// 3. Print to log: "Number of categories: " + length of categoriesList

console.log(`Number of categories: ${categoriesList.length}`);

// 4. For each category in categoriesList do Steps 5-9

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const numberOfElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});
