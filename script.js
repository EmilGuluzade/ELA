const allCards=document.getElementById("cards")

let cars=[]

let wishList = [];

if(JSON.parse(localStorage.getItem("cars"))){
   cars = JSON.parse(localStorage.getItem("cars"));
}
if (localStorage.getItem("basketItems")) {
  basketItems = JSON.parse(localStorage.getItem("basketItems"));
} else {
  basketItems = [];
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
}
function renderUI() {
innerHTML=""
  for (let i = 0; i < cars.length; i++) {
    innerHTML += `
    <div class="cards">
            <div class="card1">
              <div class="card-header">
                <div class="left-head-card">
                  <h3>${cars[i].name}</h3>
                  <p>${cars[i].ban}</p>
                </div>
                <div class="right-head-card">
                  <i data-id="${cars[i].id}" id="fa-heart" class="fa-solid fa-heart"></i>
                </div>
              </div>
              <div class="card-body1">
                <img
                  src="${cars[i].img}"
                  alt=""
                />
              </div>
              <div class="card-body2">
                <div class="title1">
                  <i class="fa-solid fa-gas-pump"></i>
                  <span>${cars[i].capasity}l</span>
                </div>
                <div class="title2">
                  <i class="fa-solid fa-circle-notch"></i>
                  <span>${cars[i].gear}</span>
                </div>
                <div class="title3">
                  <i class="fa-solid fa-user-large"></i>
                  <span>2 People</span>
                </div>
              </div>
              <div class="card-footer">
                <div class="left-footer-card">
                  <div class="dollar">
                    <h3>AZN${cars[i].price}/</h3>
                    <span>day</span>
                  </div>
                </div>
                <div class="left-footer-card">
                  <button  id="removeBtn" onclick="deleteCard(${cars[i].id})">Remove</button>
                  <button  id="addBtn" onclick="addToBasket(${cars[i].id})">Add Basket</button>
                </div>
              </div>
            </div>
           
            </div>
          </div>
    `;
  }
  allCards.innerHTML=innerHTML
}


function deleteCard(id) {
  let target =cars.find((data) => data.id == id);
  let targetOfIndex = cars.indexOf(target);
  cars.splice(targetOfIndex, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
  renderUI();
}
renderUI();
let svgButtons = document.querySelectorAll(".fa-heart");

svgButtons.forEach((button)=>{
  button.addEventListener("click", function(){
    const id = parseInt(button.dataset.id);
    const checkCart = cars.find((data) => data.id === id);
    const checkCartIndex = cars.indexOf(checkCart);
    if (button.style.color === "red") {
      
      wishList.splice(checkCartIndex, 1);
      localStorage.setItem("wishList", JSON.stringify(wishList));
      button.style.color = "grey";
    } else {
      button.style.color = "red";
      wishList.push(checkCart);
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
    


  });
});
function addToBasket(id) {
  let basketItem = basketItems.find((x) => x.item.id == id);
  if (!basketItem) {
    let target = cars.find((car) => car.id == id);
    let newBasketItem = {
      item: target,
      count: 1,
      totalPrice: target.price,
    };
    basketItems.push(newBasketItem);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  } else {
    basketItem.count++;
    basketItem.totalPrice = basketItem.count * basketItem.item.price ;
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }
}

