
//tasks1
    function Categories(category) {
      category = document.getElementById("categories").innerHTML;
      var category = document.querySelector('.categories');
      var categories = document.getElementById('categories').children.length;
      console.log("Number of Categories: ", categories);


    }
    Categories("Categories")


    //console.log("Number of Categories:",)
    function Animal(myAnimal) {


      myAnimal = document.getElementById("animal100").innerHTML;
      var animal100 = document.getElementById("animal100").firstChild.nodeValue;
      console.log("Category:", animal100);
      var animals = document.getElementById('list-animal').children.length;
      console.log("Elements: ", animals);
      //Lists of animals
      //const animalList = document.querySelector('.list-animal');


      //const animalNodes=animalList.childNodes;
      //console.log("Elements:",animalNodes)
    }
    Animal("Category")


    function Food(myFood) {


      myFood = document.getElementById("food200").innerHTML;
      var food200 = document.getElementById("food200").firstChild.nodeValue;
      console.log("Category:", food200);
      var foods = document.getElementById('list-products').children.length;
      console.log("Elements: ", foods);
      //List of Foods
      //const foodList = document.querySelector('.list-products');


      //const foodNodes=foodList.childNodes;
      //console.log("Elements:",foodNodes)
    }
    Food("Category")


    function Technology(myTech) {


      myTech = document.getElementById("tech300").innerHTML;
      var tech300 = document.getElementById("tech300").firstChild.nodeValue;
      console.log("Category:", tech300);
      var techs = document.getElementById('list-tech').children.length;
      console.log("Elements: ", techs);


      //List of technology
      //const techList = document.querySelector('.list-tech');


      //const techNodes=techList.childNodes;
      //console.log("Elements:",techNodes)
    }
    Technology("Category")

