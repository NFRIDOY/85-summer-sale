let TotalPrice = 0;
const productList_Element = document.getElementById("product-list");

function getNumber(text) {
    return parseFloat(text.children[1].children[2].children[0].innerText);
}

function getProductName(target) {
    return target.children[1].children[1].innerText;
}

function buy(target) {  
    let ProductPrice = getNumber(target);
    // console.log(ProductPrice);
    let ProductName = getProductName(target);
    console.log(ProductName);

    const newProduct = document.createElement("li");
    newProduct.innerText = ProductName;
    productList_Element.appendChild(newProduct);    
}
