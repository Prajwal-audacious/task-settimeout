let box = document.querySelector(".container");
let box2 = document.querySelector(".container_2");
// console.log(box)

setTimeout(() => {
  box.style.backgroundColor = "red";
}, 3000);



let bool = true;
setInterval(() => {
  if (bool) {
    bool = false;
    box2.style.backgroundColor = "green";
    
  } else {
    bool = true;
    box2.style.backgroundColor = "blue";
  }
}, 1000);


