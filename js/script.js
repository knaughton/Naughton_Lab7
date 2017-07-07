var groceryList = [
  {
    name: "Hotdog",
    price: 2.99
  },
  {
    name: "Hamburger",
    price: 4.99
  },
  {
    name: "Beans",
    price: 3.99
  },
  {
    name: "Chips",
    price: 1.99
  },
  {
    name: "Soda",
    price: 0.99
  }
];


function list(x) {
    console.log(x.name + " costs " + "$" + x.price);
    // var ele = document.createElement('p');
    // ele.innerText = "<p>" + (x.name + " costs " + "$" + x.price) + "</p>";
    // document.body.appendChild(ele);
}
    // document.getElementById("demo").innerHTML=(x.name + " costs " + "$" + x.price);
    // document.getElementById("demo1").innerHTML=(x.name + " costs " + "$" + x.price);
    // document.getElementById("demo").innerHTML = "<p>" + (x.name + " costs " + "$" + x.price) + "</p>";
// }

groceryList.forEach(list);


var totalCost = 0;
function subtotal(y) {
  totalCost += y.price;
  }

groceryList.forEach(subtotal);
console.log("Subtotal " + "$" + totalCost.toFixed(2));

var total = totalCost * 1.06
console.log("Total including tax " + "$" + total.toFixed(2));


groceryList.forEach (function(z) {
  z.quantities = "null"
});

console.log(groceryList);

// function userInputFunction() {
//   var userInput = prompt("What items did you add to your grocery cart? Enter 1: Type of food or drink.");
//
//   if(userInput == 1){
//     var userAnswerF = prompt("Item");
//
//
//   }
// }
