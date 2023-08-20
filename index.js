let totalPrice = 0;
const productList_Element = document.getElementById("product-list");
const totalPrice_Element = document.getElementById("total-price");
const applyBtn_Element = document.getElementById("apply-Btn");
const makePurchaseBtn_Element = document.getElementById("Make-Purchase");


function getPrice(text) {
    return parseFloat(text.children[1].children[2].children[0].innerText);
}

function getProductName(target) {
    return target.children[1].children[1].innerText;
}

function totalPriceUpdate(target) {
    let productPrice = getPrice(target);
    totalPrice += productPrice;
    // console.log(totalPrice);

    totalPrice_Element.innerText = totalPrice;
    // return totalPrice;
}

function addProduct(target) {
    let ProductName = getProductName(target);
    // console.log(ProductName);

    const newProduct = document.createElement("li");
    newProduct.innerText = ProductName;
    productList_Element.appendChild(newProduct);
}

function buy(target) {
    totalPriceUpdate(target);
    addProduct(target);

    if(totalPrice > 0) {
        makePurchaseBtn_Element.removeAttribute("disabled");
    }

    if (totalPrice > 200) {
        // alert("200");
        // applyBtn_Element.setAttribute("disabled","none");
        applyBtn_Element.removeAttribute("disabled");
    }
}