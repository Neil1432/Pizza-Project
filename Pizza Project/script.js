

  var $ = function(id) { return document.getElementById(id); };

let total;
let OrderPizza=[];
const OrderData=[];

const pizza = (name,price,e)=>{
 const qty = e.target.previousElementSibling.value;
 const img = e.target.parentNode.parentNode.querySelector('img').src;
 OrderPizza.push({name,price,qty,img});
 
 console.log(OrderPizza)
 cartAddItem();
}

const remove= (ind,e)=>{
  OrderPizza = OrderPizza.map((a,i)=>{
    if(i!=ind)
    {
      return a
    }
  })
  }

const cartAddItem= ()=>{
  $('odcart').innerHTML="";
OrderPizza.forEach(order=>{
 
 const box= `  <div class="box">
  <span     class="fas fa-times"></span>
  <img src="${order.img}" alt="" />
  <div class="content">
    <p>${order.name} <span>( $ ${order.price}/- x ${order.qty} )</span></p>
    <form action="" method="post">
      <label class="qty" >
       
       ${order.qty}
       
      </label>
     
    </form>
  </div>
</div>`

var parser = new DOMParser();
var htmlDoc = parser.parseFromString(box, 'text/html');

$('odcart').append(htmlDoc.querySelector('.box'))
$('numOrder').innerHTML= "("+OrderPizza.length+")";

})

 total = OrderPizza.reduce(
  (previousValue, ele) => parseFloat( previousValue) + (parseFloat(ele.price)* parseFloat(ele.qty)),
  0
);

$('total').innerHTML='$'+total;

}

$('pizzaform').onsubmit=(e)=>{
  e.preventDefault();
   x = document.getElementsByClassName("tab");
  var name = x[0].querySelector("input[name='name']").value;
  var email = x[0].querySelector("input[name='email']").value;
  var mobile = x[0].querySelector("input[name='number']").value;
  var comments = $('comments2').value;
  var quantity = $("quant")




  // console.log("name",name.value,'email',email.value,"mobile",mobile.value,'member',Membership.value);
  


  let size;
if ($("pic").checked===true)
{
  size= "small";
}
else if ($("pic2").checked===true)
{
  size= "medium";
}
else if ($("pic3").checked===true)
{
  size= "large";
}
else if ($("pic4").checked===true)
{
  size= "xlarge";
}

const toppings = [];
if ($("t1").checked===true)
{
  toppings.push("Mushrooms");
}
 if ($("t2").checked===true)
{
  toppings.push("Jalapenos");
}
 if ($("t3").checked===true)
{
  toppings.push("Chicken");
}
 if ($("t4").checked===true)
{
  toppings.push("Pepperoni  ");
}

const data={name,email,mobile,quantity,size,toppings,comments}

OrderData.push(data);

const Aorder = OrderPizza.map(order=>{return ` ${order.name} x ${order.qty} x $${order.price} `})

console.log(Aorder)
const odrContent = `
<div class="box">
        <p>placed on : <span>${new Date().toLocaleDateString()}</span></p>
        <p>name : <span>${data.name}</span></p>
        <p>number : <span>${data.mobile}</span></p>
        <p>
         Email:
          <span>${data.email}
          </span>
        </p>
        <p>your orders :${Aorder.toString()}
          </p>
        </p>
        <p>Topping: ${toppings.toString()}s</p>
        <p>Pizza Type: ${data.size}s</p>
        <p>total price : <span>$ ${total}/-</span></p>
        <p>Comments: ${comments}</p>
        <p>payment status : <span style="color: var(--red)">pending</span></p>
      </div>
      `;
      var parser2 = new DOMParser();
      var htmlDoc2 = parser2.parseFromString(odrContent, 'text/html');
      
      $('mOrders').append(htmlDoc2.querySelector('.box'))

    OrderPizza=[];
    total=0;
    cartAddItem();
    console.log('last',OrderPizza);
    $('numOrder').innerHTML= "(0)";
   $('pizzaform').reset();

  
} ;

$('img12').onclick=function(){
  console.log( this.value)
}

const user = [{name:'admin',email:'admin@123.com',pass:'1234'}];
$('registerForm').onsubmit=(e)=>{
  e.preventDefault();
  const name=$('registerForm').querySelector("input[name='name']").value
  const email=$('registerForm').querySelector("input[name='email']").value
  const pass=$('registerForm').querySelector("input[name='pass']").value
  const cpass=$('registerForm').querySelector("input[name='cpass']").value
  
  if(pass!==cpass)
  {
    alert("Password and confirm-Password doesm't match")
  }
  else if(pass.length<6){
    alert("Password length shoul be 6 or more")
  }
  else{
console.log(user)
     if(user.find((u)=>u.email==email))
    {
      alert("email already exits")
    }
    else
    {
      user.push({name,email,pass});
      $('registerForm').reset();
      alert("successfully Registered");
    }
  }


}

$('loginform').onsubmit=(e)=>{
  e.preventDefault();
  
  const email=$('loginform').querySelector("input[name='email']").value
  const pass=$('loginform').querySelector("input[name='pass']").value
  
 if(user.find((u)=>u.email==email))
 {
  const ind=  user.findIndex(u=>u.email==email);
  if(pass==user[ind].pass)
  {
    location.href="index.html"
  }
  else{
    alert("wrong password")
  }
 }
 else{
   alert("username doesn't exits register now");
 }


}







//  ---------------------------------------------------------- code change ------------------------------
let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let account = document.querySelector(".user-account");

document.querySelector("#user-btn").onclick = () => {
  account.classList.add("active");
};

document.querySelector("#close-account").onclick = () => {
  account.classList.remove("active");
};

let myOrders = document.querySelector(".my-orders");

document.querySelector("#order-btn").onclick = () => {
  myOrders.classList.add("active");
};

document.querySelector("#close-orders").onclick = () => {
  myOrders.classList.remove("active");
};

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.add("active");
};

document.querySelector("#close-cart").onclick = () => {
  cart.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  myOrders.classList.remove("active");
  cart.classList.remove("active");
};

let slides = document.querySelectorAll(
  ".home-bg .home .slide-container .slide"
);
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

accordion.forEach((acco) => {
  acco.onclick = () => {
    accordion.forEach((remove) => remove.classList.remove("active"));
    acco.classList.add("active");
  };
});





// //Change the source and price element when a pizza is selected
function change_pizza() {
  var pizza = document.querySelector("select").value;
  var price = [400, 200, 150, 350];
  var pizza_image = document.querySelector("#pizza_image");
  pizza_image.src = "images/pizza" + pizza + ".jpg";
  var price_element = document.querySelector("#price");
  price_element.innerHTML = price[parseInt(pizza)].toString();
}
//recalculate the total when pizza quantity is changed
function calculate_total() {
  var pizza_quant = document.querySelector("input[name='quant']");
  var price_element = document.querySelector("#price");
  var total = 0;
  total = parseInt(pizza_quant.value);
  console.log(total);
  var total_element = document.querySelector("#total");
  total_element.innerHTML = total.toString();
}
function validateForm() {
  // This function deals with validation of the form fields
  var x,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  var name = x[0].querySelector("input[name='name']");
  var email = x[0].querySelector("input[name='email']");
  var mobile = x[0].querySelector("input[name='number']");

  // A loop that checks every input field in the current tab:
  if (name.value.length <= 0) {
    name.classList.add("invalid");
    valid = false;
  } else {
    name.classList.remove("invalid");
  }

  if (mobile.value.length != 10) {
    mobile.classList.add("invalid");
    valid = false;
  } else {
    mobile.classList.remove("invalid");
  }

  if (!validateEmail(email.value)) {
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
  }

  // If the valid status is true, mark the step as finished and valid:
  
  return valid; // return the valid status
}
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateContactForm() {
  // fetch the controls
  const email = document.querySelector(".email_id");
  const phone = document.querySelector(".phone_number");
  const name = document.querySelector(".contact-form-name");
  const text_message = document.querySelector(".text_message");

  // data validation
  let isValid = true;
  if (email.value == "") {
    // change the span tag text
    email.nextElementSibling.textContent = "Email Address is required.";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    email.nextElementSibling.textContent = "Please enter a valid Email Address";
    isValid = false;
  } else {
    email.nextElementSibling.textContent = "";
  }

  if (phone.value == "") {
    // change the span tag text
    phone.nextElementSibling.textContent = "Provide a phone number.";
    isValid = false;
  } else if (phone.value.length > 10) {
    phone.nextElementSibling.textContent =
      "Please provide a valid phone number.";
    isValid = false;
  } else {
    phone.nextElementSibling.textContent = "";
  }

  if (name.value == "") {
    // change the span tag text
    name.nextElementSibling.textContent = "Please enter your name.";
    isValid = false;
  } else {
    name.nextElementSibling.textContent = "";
  }
  if (text_message.value == "") {
    // change the span tag text
    text_message.nextElementSibling.textContent =
      "Please provide your message.";
    isValid = false;
  } else {
    text_message.nextElementSibling.textContent = "";
  }

  // if everything is good, then only submit the form
  if (isValid) {
    alert("Thankyou for your details.");
    document.forms["contactForm"].reset();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // set the focus
  document.querySelector(".name").focus();
  document
    .querySelector("#submit-btn")
    .addEventListener("click", validateContactForm);
});