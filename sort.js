
var p1 = new product(1, 'Bright Crystal', 4500.54, false, 10, "img5.jpg", "EDT", "30ml", "Versace");
var p2 = new product(2, 'Light Blue ', 6798.54, false, 20, "img6.jpg", "EDP", "50ml", " Dolce & Gabbana");
var p3 = new product(3, 'ctest3', 112.00, false, 13, "img3.jpg", "EDP", "100ml", "Versace");
var p4 = new product(4, 'dtest4', 140.00, false, 21, "img4.jpg", "EDP", "100ml", "Versace");
var productList = [p1, p2, p3, p4];

var content = "";

const productCon = document.querySelectorAll(".product_con");
const row = document.querySelector("#rowone");



productList.forEach(displayCardFunc);



function displayCardFunc(prod) {

    content =
        ` 
        <div class="card" style="width: 18rem;">
            <img src="/images/${prod.img}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column d-flex">
                <h5>${prod.P_name} by ${prod.brand} ${prod.type} ${prod.size} </h5>
                <h5>$${prod.P_Price}</h5>
                <h5></h5>
                <h5 class="card-title">
                some description
                </h5>

                <a class="btn btn-primary mt-auto card-btn">Add to cart</a>
            </div>
        </div>
    `;
    let node = document.createElement("div");
    node.setAttribute("class", "col-sm  d-flex align-items-stretch");
    row.appendChild(node);
    node.innerHTML = content;

}


function comparePrice(a, b) {

    if (a.P_Price < b.P_Price) {
        return -1;
    }
    if (a.P_Price > b.P_Price) {
        return 1;
    }
    return 0;
}

function comparePrice2(a, b) {

    if (a.P_Price > b.P_Price) {
        return -1;
    }
    if (a.P_Price < b.P_Price) {
        return 1;
    }
    return 0;
}

function compareName(a, b) {
    if (a.P_name < b.P_name) {
        return -1;
    }
    if (a.P_name > b.P_name) {
        return 1;
    }
    return 0;
}
function compareName2(a, b) {
    if (a.P_name > b.P_name) {
        return -1;
    }
    if (a.P_name < b.P_name) {
        return 1;
    }
    return 0;
}

function sortByPriceHL() {
    productList.sort(comparePrice);
    row.innerHTML = "";
    productList.forEach(displayCardFunc);
}
function sortByPriceLH() {
    productList.sort(comparePrice2);
    row.innerHTML = "";
    productList.forEach(displayCardFunc);
}
function sortByNameAZ() {
    productList.sort(compareName);
    row.innerHTML = "";
    productList.forEach(displayCardFunc);
}
function sortByNameZA() {
    productList.sort(compareName2);
    row.innerHTML = "";
    productList.forEach(displayCardFunc);
}


function sortBy(byWat) {
    var text = byWat.options[byWat.selectedIndex].value;
    if (text === "priceH-L") {
        sortByPriceHL();
        console.log("changed");
    }
    else if (text === "priceL-H") {
        sortByPriceLH();
    }
    else if (text === "nameA-Z") {
        sortByNameAZ();
    }
    else if (text === "nameZ-A") {
        sortByNameZA();
    }
}