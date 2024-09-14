function calculate(){
    let product = document.getElementById('product').value;
    let insurance = document.getElementById('insurance').checked;
    let quantity = Number(document.getElementById('quantity').value);
  
    let total = product * quantity + (insurance && 10);
  
    let shipping = "";
    if (total > 400) {
        shipping = "Free";
    }
    else if (total > 100) {
        shipping = "Discounted";
    } 
    else {
        shipping = "Standard";
    }
    let ship = document.getElementById("shipping");
    ship.textContent = ship.textContent + shipping;
  }


        //    As with any other conditional statement, else if requires the parentheses. 
        // The code block needs to be enclosed in curly braces.
//   if (total > 400) {
//     alert("Free");
//     }      
//     elseif (total > 100){
//         alert("Discounted");
//     }

//     else {
//         alert("Standard");
//     }



//while loop
let seats = 10;

while (seats>0) {
  console.log("number of seats left " + seats);
  seats = seats - 1;
}


let counter = 0;

while (counter < 4) {
  console.log("Message");      //result 4
  counter = counter + 1;
}
   

    let=10
    while (seats>0) {
        alert(seats);
        seats=seats -1
    }
    

//     let count = 5;
//      while (count > 0) {
//       alert("Countdown: " + count);
//        count = count - 1;
// }



//For loops are shorter to write. The syntax for the for loop condenses the following into 1 single line:
// counter creation and initialization
// condition
// counter updating//for loop

for (let i = 0; i < 3; i++) {
    alert("Hello");
  }



  let speed = 70; 
   if ( speed <100){
    alert("No ticket");
}
else {
    alert("Traffic ticket");
}



for ( let i=1; i<5; i=i+1) {
    
    alert 
        ("Repeat me");
    }

