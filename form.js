
const submitBtn = document.querySelector("#btnAdd");
const form = document.querySelector("#form");
const ban = document.querySelector("#ban");
const name = document.querySelector("#name");
const gear = document.querySelector("#gear");
const price = document.querySelector("#price");
const image = document.querySelector("#img");
const capasity = document.querySelector("#capasity");


const carList = document.querySelector("#employeeList");

let car = [];
let id = 0;


class Card{
    constructor(name,price,capasity,ban,gear,image){
        this.id = id
        this.ban = ban
        this.img = image
        this.name = name
        this.gear = gear
        this.capasity = capasity
        this.price = price 
        id++
    }
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
  
    const {nameVal,banVal,gearVal,capasityVal,priceVal, imgVal} = getDataFromUser()
    if(nameVal && banVal && gearVal && capasityVal && priceVal &&  imgVal  ){
        createEmployee(nameVal,priceVal,capasityVal,banVal,gearVal,imgVal)
        resetForm()  
        
    }else{
        alert('inputlar bosdur')
    }
    localStorage.setItem('cars',JSON.stringify(car))
  
    
})

const getDataFromUser = () => {
    let nameVal = name.value
    let banVal = ban.value
    let imgVal= image.value
    let gearVal = gear.value
    let capasityVal = capasity.value
    let priceVal = price.value
   return {nameVal,banVal,gearVal,capasityVal,priceVal, imgVal}
}

function createEmployee(name,price,capasity,ban,gear,image){
    const newCar = new Card(name,price,capasity,ban,gear,image)
    car.push(newCar)

}

function deleteEmployee(id){
    const target = car.find(x => x.id == id)
    const indexOfTArget = car.indexOf(target)
    car.splice(indexOfTArget,1)
    renderUI(car)
}
 


function resetForm() {
    
    ban.value = "";
    gear.value = "";
    capasity.value = "";
    price.value = "";
    image.value="";
    name.value="";
}
