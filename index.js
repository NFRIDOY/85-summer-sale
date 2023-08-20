let totalPrice = 0;
let total = 0;
let discount = 0;
const productList_Element = document.getElementById("product-list");
const totalPrice_Element = document.getElementById("total-price");
const applyBtn_Element = document.getElementById("apply-Btn");
const makePurchaseBtn_Element = document.getElementById("Make-Purchase");
const couponInput_Element = document.getElementById("coupon-input");
const discount_Element = document.getElementById("discount");
const total_Element = document.getElementById("total");


function getPrice(text) {
    return parseFloat(text.children[1].children[2].children[0].innerText);
}

function getProductName(target) {
    return target.children[1].children[1].innerText;
}

function updater(element, Who, value) {
    // Who += value;
    // console.log(totalPrice);

    element.innerText = value;
    // return totalPrice;
}

function totalPriceUpdate(target) {
    let productPrice = getPrice(target);

    totalPrice += productPrice;
    // console.log(totalPrice);
    
    totalPrice_Element.innerText = totalPrice;
    // return totalPrice;

    total_Element.innerText = totalPrice;

    // updater(totalPrice_Element,totalPrice,productPrice);
}

function addProduct(target) {
    let ProductName = getProductName(target);
    // console.log(ProductName);

    const newProduct = document.createElement("li");
    newProduct.innerText = ProductName;
    // document.getElementsByTagName(newProduct).
    productList_Element.appendChild(newProduct);
}

function couponApplyBtn(target){
    console.log(target.parentNode);
    const couponCode = couponInput_Element.value;
    if (couponCode === "SELL200") {
        discount = totalPrice * 0.2;
        total = totalPrice - discount;
    }
    discount_Element.innerText = discount;
    total_Element.innerText = total;
}

function buy(target) {
    totalPriceUpdate(target);
    addProduct(target);

    if (totalPrice > 0) {
        makePurchaseBtn_Element.removeAttribute("disabled");
    }

    if (totalPrice >= 200) {
        applyBtn_Element.removeAttribute("disabled");
    }
}



// function copyToClipboard(value) {
//     navigator.clipboard.writeText(value)
// }

// const SELL200_Element = document.getElementById("SELL200");

// SELL200_Element.addEventListener("click", function copyToClipboard(){})