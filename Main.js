function DarkMode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("svgLight").style = "display:inline";
  document.getElementById("Light").style = "display:none";
}
function StyleRow() {
  var card = document.getElementById("datarow");
  card.classList.toggle("cardstyle");
  console.log(card);
}
function lightMood() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("svgLight").style = "display:none";
  document.getElementById("Light").style = "display:inline";
}

function getAllData() {
  var ArrayOfAll = [];
  for (let i = 0; i < cardData.length; i++) {
    if (cardData[i].price <= 500 || cardData[i].price > 500) {
      ArrayOfAll.push(cardData[i]);
    }
  }
  // console.log(ArrayOfAll);
  DisplayData(ArrayOfAll);
}
function filterByPrice(value, min, max) {
  var ArrayOfAll = [];
  for (let i = 0; i < cardData.length; i++) {
    if (!max && cardData[i].price >= min) {
      ArrayOfAll.push(cardData[i]);
    } else if (cardData[i].price >= min && cardData[i].price <= max) {
      ArrayOfAll.push(cardData[i]);
    }
  }
  DisplayData(ArrayOfAll);
  console.log(value, min, max);
  console.log(ArrayOfAll);
}
// else if (cardData[i].price <= value) {
//       ArrayOfAll.push(cardData[i]);
//     } else if (cardData[i].price <= value) {
//       ArrayOfAll.push(cardData[i]);
//     }
// function getDataabove10To100() {
//   var ArrayOfAll = [];
//   for (var i = 0; i < cardData.length; i++) {
//     if (cardData[i].price > 10 && cardData[i].price <= 100) {
//       ArrayOfAll.push(cardData[i]);
//       console.log(cardData[i].price);
//     }
//   }
//   // console.log(ArrayOfAll);
//   DisplayData(ArrayOfAll);
// }

// function getdata100T0500() {
//   var ArrayOfAll = [];
//   for (var i = 0; i < cardData.length; i++) {
//     if (cardData[i].price > 100 && cardData[i].price < 500) {
//       ArrayOfAll.push(cardData[i]);
//       console.log(cardData[i].price);
//     }
//   }
//   // console.log(ArrayOfAll);
//   DisplayData(ArrayOfAll);
// }

// function bigPrice() {
//   var ArrayOfAll = [];
//   for (var i = 0; i < cardData.length; i++) {
//     if (cardData[i].price >= 500) {
//       ArrayOfAll.push(cardData[i]);
//     }
//   }
//   console.log(ArrayOfAll);
//   DisplayData(ArrayOfAll);
// }

function FilterbyProudctName(value) {
  var ArrayOfAll = [];
  for (var i = 0; i < cardData.length; i++) {
    if (cardData[i].brand == value) {
      ArrayOfAll.push(cardData[i]);
    }
    DisplayData(ArrayOfAll);
    console.log(value);
  }
}

function raingValue(value) {
  var RaingArray = [];
  for (var i = 0; i < cardData.length; i++) {
    if (cardData[i].price <= value) {
      RaingArray.push(cardData[i]);
    }
    DisplayData(RaingArray);
    console.log(value);
  }
}
function FilterbyProudctCategory(value) {
  console.log(value);
  var ArrayOfAll = [];
  for (var i = 0; i < cardData.length; i++) {
    if (cardData[i].Categories == value) {
      ArrayOfAll.push(cardData[i]);
    }
    DisplayData(ArrayOfAll);
  }
}

var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var cardData;
var http = new XMLHttpRequest(); //1

http.open("GET", "./store-demo-data.json"); //2

http.send(); //3

//4
http.addEventListener("readystatechange", function () {
  if (http.readyState == 4 && http.status == 200) {
    cardData = JSON.parse(http.response); // string --> Array
    cardData = cardData.products;
    console.log(cardData); //data
    DisplayData(cardData);
  }
});
function SearchFilter(valInput) {
  let CardVal = [];
  for (var i = 0; i < cardData.length; i++) {
    if (cardData[i].name.toLowerCase().includes(valInput.toLowerCase())) {
      console.log(cardData);
      CardVal.push(cardData[i]);
    }

    // console.log("cardData");
  }
  DisplayData(CardVal);
}

function DisplayData(list) {
  var Container = ``;
  //
  for (let i = 0; i < list.length; i++) {
    Container +=
      `<div id="cardid" class="card">
    <img class="img-fluid" style="width:100%" src="` +
      list[i].img +
      `"/>
      <div> 
      <h3>` +
      list[i].name +
      `</h3>

             <div class="price">
                        <i class=" stars fa-solid fa-star"></i>
                        <i  class=" stars fa-solid fa-star"></i>
                        <i  class=" stars fa-solid fa-star"></i>
                        <i  class=" stars fa-solid fa-star"></i>
                        <i  class=" stars fa-regular fa-star"></i>
                        <p>$` +
      list[i].price +
      `</p>
      </div>
      <br>
      <p class="description" >
      On Retina display that never sleeps, so itr tapping the display.
      </p>
      
      </div>
                 
                        <span class="flexbtn"> 
                        <button class="wishbutton"><i class="fa-regular fa-heart"></i> 
                        Wishlist</button>
                        
                        <button  class="cartbutton"><i class="fa fa-light fa-cart-shopping"></i> 
                        View In Cart</button>
                        </span>
                        </div>
                    
    `;
  }

  document.getElementById("datarow").innerHTML = Container;
}
// var radios = document.getElementsByName('filter');

// for (var i = 0;radios.length; i++) {
//  if (radios[i].checked==true) {

//    console.log(radios[i].value)

//   break;
//    }
// }
