const table = document.getElementById("table")

let wishList = JSON.parse(localStorage.getItem('wishList')) || []

function  renderUI(cars){
    let innerHTML = ""
    for (let i = 0; i < cars.length; i++) {
        innerHTML += `
        <tr>
     
            <td><img src="${cars[i].img}" /></td>
            <td>${cars[i].name}</td>
          
            <td>${cars[i].price} AZN</td>
            <td>
            <button id="w-btn" class="btn btn-danger " onclick="deleteCard(${cars[i].id})">Delete</button>
            </td>
        </tr>
        `        
    }
    table.innerHTML = innerHTML;
}

renderUI(wishList)

function deleteCard(id){
    const target = wishList.find(data => data.id == id)
    const targetIndex = wishList.indexOf(target)
    wishList.splice(targetIndex,1)
    localStorage.setItem('wishList',JSON.stringify(wishList))
    renderUI(wishList)
}