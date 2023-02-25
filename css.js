const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
const heho = document.getElementById("oke");
heho.appendChild(node);

var menu = {
    "Nasi Goreng", "Nasi Rames", "Nasi Yuhuu"
}
// console.log(node)


function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  document.getElementById("demo").innerHTML = x;
}