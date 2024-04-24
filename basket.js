let basketTable = document.getElementById("basketTable");

let basketItems;
if (localStorage.getItem("basketItems")) {
  basketItems = JSON.parse(localStorage.getItem("basketItems"));
} else {
  basketItems = [];
  localStorage.setItem("basketItems", JSON.stringify(basketItems));
}
function renderUI(list) {
  let innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    innerHTML += `
    <tr>
     
            <td><img src="${list[i].item.img}" /></td>
            <td>${list[i].item.name}</td>
          
            <td>${list[i].totalPrice} AZN</td>
            <td>${list[i].count} </td>
            <td>
            <button id="w-btn" class="btn btn-danger" onclick="deleteItemFromWishlist(${list[i].item.id})">Delete</button>
            </td>
            <td>
            <button id="w-btn" class="btn btn-primary" onclick="addToBasket(${list[i].item.id})">Add</button>
            </td>
        </tr>
        
        `;
  }
  basketTable.innerHTML = innerHTML;
}
function addToBasket(id) {
  let basketItem = basketItems.find((x) => x.item.id == id);
  if (!basketItem) {
    let target = cars.find((car) => car.id == id);
    let newBasketItem = {
      item: target,
      count: 1,
    };
    basketItems.push(newBasketItem);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  } else {
    basketItem.count++;
    basketItem.totalPrice = basketItem.count * basketItem.item.price;

    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  }
}
const deleteItemFromWishlist = (id) => {
  let target = basketItems.find((item) => item.item.id == id);
  if (target.count > 1) {
    target.count--;
    target.totalPrice = target.count * target.item.price;
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  } else {
    const indexOftarget = basketItems.indexOf(target);
    basketItems.splice(indexOftarget, 1);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  }
};
renderUI(basketItems);
