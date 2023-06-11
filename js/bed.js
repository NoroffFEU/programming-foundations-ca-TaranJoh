const bed = {
  name: "Malm",
  appearence: {
    size: "140x200 cm",
    colour: "white",
  },
  numberOfShelves: 2,
  price: 3759,
  used: false,
  made: true,
  equippedWith: ["Six pillows", "Two blankets", "Bedspread", "Stuffed animal"],
  changeColour: function () {
    image.src = "/images/eikefiner.avif";
  },
};

// Declaring variables from html
var button = document.querySelector("button");
var image = document.querySelector("img");
var heading = document.querySelector("h1");
var colour = document.querySelector("#colour");
var size = document.querySelector("#size");
var price = document.querySelector("#price");
var used = document.querySelector("#used");
var shelves = document.querySelector("#shelves");

heading.innerHTML = bed.name;
colour.innerHTML = bed.appearence.colour;
size.innerHTML = bed.appearence.size;
price.innerHTML = bed.price + ",-";
shelves.innerHTML = bed.numberOfShelves;

function bedUsed() {
  if (bed.used === false) {
    used.innerHTML = "new";
  } else {
    used.innerHTML = "used";
  }
}

// Calling function
button.onclick = bed.changeColour;
bedUsed();
