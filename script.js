const allCards=document.getElementById("cards")

let cars=[]

let wishList = [];

if(JSON.parse(localStorage.getItem("cars"))){
   cars = JSON.parse(localStorage.getItem("cars"));
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
                    <h3>$${cars[i].price}/</h3>
                    <span>day</span>
                  </div>
                </div>
                <div class="left-footer-card">
                  <button onclick="deleteCard(${cars[i].id})">Remove</button>
                </div>
              </div>
            </div>
           
            </div>
          </div>
    `;
  }
  allCards.innerHTML=innerHTML
}
renderUI();

function deleteCard(id) {
  let target =cars.find((data) => data.id == id);
  let targetOfIndex = cars.indexOf(target);
  cars.splice(targetOfIndex, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
  renderUI();
}

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


