console.log("Welcome to Infinity Cloths House");
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    alert(name + " Added To Cart!");

    localStorage.setItem("cart", JSON.stringify(cart));
}
function wishlist(){
    alert("❤️ Product Added To Wishlist");
}
function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();

let products=document.getElementsByClassName("product");

for(let i=0;i<products.length;i++){

let name=products[i].querySelector("h3").innerText.toLowerCase();

if(name.includes(input)){
products[i].style.display="block";
}else{
products[i].style.display="none";
}

}

}
function subscribe(){

alert("🎉 Thank You For Subscribing!");

}
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function copyCoupon(){

navigator.clipboard.writeText("SAVE20");

alert("Coupon Code Copied: SAVE20");

}
function changeTheme() {
    alert("Theme Changed");
    document.body.classList.toggle("light");
}
function filterProducts(category){

let products=document.querySelectorAll(".product");

products.forEach(function(item){

if(category=="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}
window.onload = function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    },2000);

}
function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(function(product){

let name = product.innerText.toLowerCase();

if(name.includes(input)){
    product.style.display = "block";
}
else{
    product.style.display = "none";
}

});

}
function wishlist(){

let heart = event.target;

if(heart.innerHTML=="❤️"){
    heart.innerHTML="💖";
}
else{
    heart.innerHTML="❤️";
}

}