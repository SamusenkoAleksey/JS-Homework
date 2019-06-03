
//setting up email id to Local Storage

if(localStorage.getItem("email") || (localStorage.getItem("email") !== "aleksej.samusenko93@gmail.com")){
  localStorage.setItem("email", "aleksej.samusenko93@gmail.com");
  localStorage.setItem("Full Name", "Aleksey Samusenko");
}



// if(localStorage.getItem("array") === null){
//   var ArraForBoughtPizzas = [];
//   localStorage.setItem("array", ArraForBoughtPizzas);
// }




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
    this.symbol = "img/pizza_symbol.svg";
  }
}

//creating manualy six different Pizzas

var pizaCarbonara = new Pizza("Карбонара", "Бекон, пармезан, моцарелла, соус сливки, перец Пири-Пири", 1500, 140, "грн.", "img/carbonara.jpg"),
    pizzaDiablo = new Pizza("Диабло", "Ветчина, телятина, салями, шампиньоны, моцарелла, лук", 1600, 160, "грн.", "img/diablo.jpg"),
    pizzaQuatroFormadgi = new Pizza("Кватро Формаджи", "Моцарелла, пармезан, сыр бри, сыр дор-блю, груша, соус сливки", 1200, 160, "грн.", "img/quatro_formadgi.jpg"),
    pizzaSalmone = new Pizza("Сальмоне", "Лосось, оливки, моцарелла, соус сливки, пармезан", 1200, 180, "грн.", "img/salmone.jpg"),
    pizzaTakkino = new Pizza("Таккино", "Индейка, кисло-сладкий соус, моцарелла, соус сливки", 1100, 150, "грн.", "img/takkino.jpg"),
    pizzaVittelo = new Pizza("Виттело", "Телятина, помидоры, моцарелла, томатный соус", 890, 140, "грн.", "img/vittelo.jpg");


//creating an array of Pizza-objects

  var mainArray = [pizaCarbonara, pizzaDiablo, pizzaQuatroFormadgi, pizzaSalmone, pizzaTakkino, pizzaVittelo];

//getting two buttons and main id

  var listButton = document.getElementById("button_get_list"),
      gridButton = document.getElementById("button_get_grid"),
      mainDiv = document.getElementById("main"),
      itemCounter = 1;

//to see if "showPizzasInGrid" was already run

  var isShowPizzasInGridRun = false;

//adding event to the buttons above 
gridButton.addEventListener("click", showPizzasInGrid,false);
listButton.addEventListener("click", showPizzasInList,false);


function showPizzasInGrid() {
  if(isShowPizzasInGridRun === true){
        removePizzas("grid_cells");
        removePizzas("list_cells");
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

      //adding button "To Buy"

      let button = document.createElement("button");
          button.setAttribute("type", "button");
          button.classList.add("buttons");
      let buttonText = document.createTextNode("Купить");
          button.appendChild(buttonText);
          divCell.appendChild(button);
      
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

function removePizzas(nameClass){

  let cells = document.getElementsByClassName(nameClass);

   for(let i = cells.length - 1; i >= 0;i--){
    
    cells[i].remove();

  }  
    isShowPizzasInGridRun = false;

 

}


function showPizzasInList(argument) {
  if(isShowPizzasInGridRun === true){
        removePizzas("list_cells");
        removePizzas("grid_cells");
        return;
      }

  let listDiv = document.createElement("div");
      listDiv.setAttribute("id", "sub_div");
  let ulElement = document.createElement("ul");

      mainDiv.appendChild(listDiv);
      listDiv.appendChild(ulElement);

      //going trough "mainArray" and create html cells
  for(let i = 0 ; i < mainArray.length ;i++){
      let li = document.createElement("li"),
          text = document.createTextNode(mainArray[i].name + ", " + mainArray[i].price + " " + mainArray[i].priceCurrency + ", " +  mainArray[i].calories + " калорий");
      li.appendChild(text);
      li.setAttribute("class", "list_cells")
      ulElement.appendChild(li);
  
  }

  

isShowPizzasInGridRun = true;

}

//adding bought items to the shopping cart

mainDiv.addEventListener("click", function(e){
  if(e.target && e.target.className === "buttons"){
    console.log(e.target.parentNode.children[1].firstChild.firstChild.textContent);

    let counterSpan = document.getElementById("counter");

    let counterText = document.createTextNode(itemCounter);

    if(counterSpan.childNodes[0] != 0){
      counterSpan.childNodes[0].remove();
    }

    itemCounter ++;

    localStorage.setItem('counter', itemCounter - 1); 

    counterSpan.appendChild(counterText);

    localStorage.setItem("saved pizza " + (itemCounter - 1), e.target.parentNode.children[1].firstChild.firstChild.textContent);
    

    // localStorage.setItem("array", ArraForBoughtPizzas);


  }
});







