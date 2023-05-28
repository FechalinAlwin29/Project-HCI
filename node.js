window.addEventListener("load", function () {
  document.querySelector(".loader").style.display = "none";
});
const slider = document.querySelector(".img-slider");
const slides = slider.querySelectorAll(".slide");
const radioButtons = slider.querySelectorAll(".slider-radio");
const navButtons = slider.querySelectorAll(".navigation .btn");

let slideIndex = 0;

function showSlide() {
  slides.forEach((slide) => (slide.style.opacity = 0));
  navButtons.forEach((btn) => btn.classList.remove("active"));

  slides[slideIndex].style.opacity = 1;
  navButtons[slideIndex].classList.add("active");

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

let interval = setInterval(showSlide, 3000);

navButtons.forEach((btn, index) => {
  btn.addEventListener("mouseenter", () => {
    if (slideIndex !== index) {
      navButtons[index].classList.add("hover");
    }
  });
  btn.addEventListener("mouseleave", () => {
    if (slideIndex !== index) {
      navButtons[index].classList.remove("hover");
    }
  });
  btn.addEventListener("click", () => {
    slideIndex = index;
    clearInterval(interval);
    showSlide();
    interval = setInterval(showSlide, 3000);
  });

  function adjustBoxSize() {
    var box = document.querySelector(".box");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
      box.style.width = "200px";
      box.style.height = "150px";
    } else {
      box.style.width = "300px";
      box.style.height = "200px";
    }
  }
  window.onload = adjustBoxSize;
  window.onresize = adjustBoxSize;
});

let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  cartTotal += price;
  updateCart();
  showRemoveButton();
  showBuyButton();
}

function showRemoveButton() {
  const removeButton = document.getElementById("buyn");
  buyButtonDiv.style.display = "block";
}

function showBuyButton() {
  const buyContainer = document.getElementById("buyn");
  buyContainer.style.display = "block";
}

function removeFromCart(index) {
  const removedItem = cartItems.splice(index, 1)[0];
  cartTotal -= removedItem.price;
  updateCart();
}

function updateCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalDiv = document.getElementById("cart-total");

  cartItemsDiv.innerHTML = "";
  cartTotalDiv.innerHTML = "";

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `<span>${item.name}</span><span>₱${item.price}</span><button onclick="removeFromCart(${index})">Remove</button>`;
    cartItemsDiv.appendChild(itemDiv);
  });

  cartTotalDiv.innerHTML = `<strong>Total: ₱${cartTotal}</strong>`;
}

// JavaScript code

// Function to update the cart's position and size
function updateCartPosition() {
  const cart = document.querySelector(".ADDTOCART");
  const windowWidth = window.innerWidth;

  // Set the cart's position and size based on the window's width
  if (windowWidth <= 768) {
    // Mobile view
    cart.style.width = "90px";
    cart.style.height = "125px";
    cart.style.top = "10px";
    cart.style.right = "0%";
  } else {
    // Desktop view
    cart.style.width = "250px";
    cart.style.height = "350px";
    cart.style.top = "20%";
    cart.style.right = "0";
  }
}

// Event listener for window resize
window.addEventListener("resize", updateCartPosition);

// Initial position update when the page loads
updateCartPosition();

function updateCartHeight() {
  const cart = document.querySelector(".ADDTOCART");
  const cartItems = document.getElementById("cart-items");
  const maxHeight = 90; // Maximum height for the cart

  // Reset cart height to auto before calculating the actual height
  cart.style.height = "auto";

  // Calculate the height of the cart items
  const cartItemsHeight = cartItems.getBoundingClientRect().height;

  // Set the cart's height based on the cart items' height and the maximum height
  if (cartItemsHeight > maxHeight) {
    cart.style.height = `${maxHeight}px`;
  } else {
    cart.style.height = `${cartItemsHeight}px`;
  }
}
