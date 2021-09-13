var p1 = new product(1, 'img5.jpg', 'Bright Crystal', 'w', 'Versace', "EDT", "30ml", 4500.54);
var p2 = new product(2, 'img6.jpg', 'Light Blue', 'w', 'Dolce & Gabbana', "EDP", "50ml", 6798.54);
var p3 = new product(3, 'img3.jpg', 'ctest3', 'w', 'Versace', "EDP", "100ml", 112.00);
var p4 = new product(4, 'img4.jpg', 'dtest4', 'w', 'Versace', "EDP", "100ml", 140.00);
var productsData = [p1, p2, p3, p4];

const selectElement = document.querySelector('#product-sorter');
const productList = document.querySelector("#product-list");

selectElement.addEventListener('change', (event) => sortProductsBy(event.target.value));

productsData.forEach(renderProducts);

function renderProducts(prod) {
  let productHtml = ` 
			<div>
				<img src="/images/${prod.imgURL}" alt="${prod.name} - ${prod.brand}">
				<div>
					<h4>${prod.name} (${prod.gender})</h4>
					<p>by ${prod.brand}</p>
					<small>${prod.type}</small> 
					<small>${prod.size}</small> 
					<p>Rs. ${prod.price}</p>
					<button id="btn-buy-${prod.sku}" class="btn-big">
						Add to cart
					</button>
				</div>
			</div>

			<div>
				<img src="/images/${prod.imgUrl}" alt="${prod.title}">
				<div class="product-summary">
						<h4>${prod.name} (X)</h4><!-- Need to include (M) or (W) for gender here. -->
						<p>by ${prod.brand}</p>
						<p><small>${prod.type}</small></p>
						<p><small>${prod.size}ml</small></p>
				</div>
				<div>
						<h5>Rs. ${prod.price}</h5>
						<button type="submit" name= "value"  value = "${prod.productId}"  >View Detail</button>
				</div>
			</div>
    `;
    let node = document.createElement("div");
    node.setAttribute("class", "product");
    productList.appendChild(node);
    node.innerHTML = productHtml;
}

function sortProductsBy(sortCriteria) {
	if (sortCriteria === "skuAsc")
    productsData.sort((a,b) => a.sku > b.sku ? 1 : -1);
	if (sortCriteria === "priceDesc")
    productsData.sort((a,b) => a.price < b.price ? 1 : -1);
	if (sortCriteria === "priceAsc")
    productsData.sort((a,b) => a.price > b.price ? 1 : -1);
	if (sortCriteria === "nameAsc")
    productsData.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
	if (sortCriteria === "nameDesc")
    productsData.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
  
	productList.innerHTML = "";
  productsData.forEach(renderProducts);
}