
var p1 = new product(1, 'btest1', 120, false, 10, "img1.jpg");
var p2 = new product(2, 'atest2', 110, false, 20, "img2.jpg");
var p3 = new product(3, 'ctest3', 112, false, 13, "img3.jpg");
var p4 = new product(4, 'dtest4', 140, false, 21, "img4.jpg");
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
                <h5 class="card-title">Miss Dior Eau de Parfum celebrates the beauty of a sensual Grasse Rose enveloped in fresh notes and woven with a lively
                </h5>

                <a class="btn btn-primary mt-auto card-btn">Check it out</a>
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