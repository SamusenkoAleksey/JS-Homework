
//creating Pizza as a class

var Pizza = class Pizza
{
  constructor(name, ingridients, calories, price, priceCurrency,imgSrc){
    this.name = name;
    this.ingridients = ingridients;
    this.calories = calories;
    this.price = price;
    this.imgSrc = imgSrc;
    this.priceCurrency = priceCurrency;
  }
}

//creating manualy six different Pizzas

var pizaCarbonara = new Pizza("Карбонара", "Бекон, пармезан, моцарелла, соус сливки", 1500, 140, "грн.", "img/carbonara.jpg"),
    pizzaDiablo = new Pizza("Диабло", "Ветчина, телятина, салями, шампиньоны, моцарелла, лук, перец Пири-Пири, соус Табаско, томатный", 1600, 160, "грн.", "img/diablo.jpg"),
    pizzaQuatroFormadgi = new Pizza("Кватро Формаджи", "Моцарелла, пармезан, сыр бри, сыр дор-блю, груша, соус сливки", 1200, 160, "грн.", "img/quatro_formadgi.jpg"),
    pizzaSalmone = new Pizza("Сальмоне", "Лосось, оливки, моцарелла, соус сливки", 1200, 180, "грн.", "img/salmone.jpg"),
    pizzaTakkino = new Pizza("Таккино", "Индейка, кисло-сладкий соус, моцарелла, соус сливки", 1100, 150, "грн.", "img/takkino.jpg"),
    pizzaVittelo = new Pizza("Виттело", "Телятина, помидоры, моцарелла, томатный соус", 890, 140, "грн.", "img/vittelo.jpg");


//creating an array of Pizza-objects

  var mainArray = [pizaCarbonara, pizzaDiablo, pizzaQuatroFormadgi, pizzaSalmone, pizzaTakkino, pizzaVittelo];

//getting two buttons and main id

  var listButton = document.getElementById("button_get_list"),
      gridButton = document.getElementById("button_get_grid"),
      mainDiv = document.getElementById("main");

//to see if "showPizzasInGrid" was already run

  var isShowPizzasInGridRun = false;

//adding event to the buttons above 
gridButton.addEventListener("click", showPizzasInGrid,false);
listButton.addEventListener("click", showPizzasInList,false);


function showPizzasInGrid() {
  if(isShowPizzasInGridRun === true){
        // removePizzas(mainDiv);
        return;
      }
  //going trough "mainArray" and create html cells
  for(let i = 0 ; i < mainArray.length ;i++){
      


      //creating a pizza cell
      let divCell = document.createElement("div");
          divCell.setAttribute("id", "pizza_" + (i + 1));
          divCell.classList.add("grid_cells");
          mainDiv.appendChild(divCell);
      
      //appending image
      let img = document.createElement("img");
          img.setAttribute("src", mainArray[i].imgSrc);
          img.setAttribute("width", "200");
          img.setAttribute("height", "200");
          img.setAttribute("alt", "Pizza Photo")
          divCell.appendChild(img);

      //appeding div with other info: Name, price, calories etc.

      let infoDiv = document.createElement("div");
    
      createInfoList(infoDiv, mainArray[i].name, mainArray[i].ingridients, mainArray[i].calories + " калорий", mainArray[i].price + " " + mainArray[i].priceCurrency);

      divCell.appendChild(infoDiv);
      
  }

  isShowPizzasInGridRun = true;
}



// function createSpan(textNode, className, placeToAppendChild){
//   let span = document.createElement("span"),
//       spanTextNode = document.createTextNode(textNode);

//       placeToAppendChild.appendChild(span);
//       span.appendChild(spanTextNode);
//       span.classList.add("span_info")

// }

function createInfoList(){
  let ul = document.createElement("ul");
      
      for(let i = 0; i < arguments.length - 1;i++){
       let li = document.createElement("li"),
           text = document.createTextNode(arguments[i + 1]);
            li.appendChild(text);
            ul.appendChild(li);

      }

      arguments[0].appendChild(ul);

      // console.log(arguments[2]);
}

// function removePizzas(div){
//   // var itemsToBeRemoved = document.getElementsByClassName(className);
  
//   for(let i = 0; i < div.children.length + 3;i++){
//     // itemsToBeRemoved[i].remove();
//     div.children[i].remove();
//   }

  

// }


function showPizzasInList(argument) {
  
}