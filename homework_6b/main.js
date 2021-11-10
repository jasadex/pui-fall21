/* making each added item an Object */
function Pillow(kind, color, fill, quant) {
	this.kind = kind;
	this.color = color;
	this.fill = fill;
	this.quant = quant;
}

/* count numbers of items in cart and update on the page */
function cartCount() {
	var itemCount = 0
	for (i = 0; i < cart.length; i++) {
		itemCount += Number(cart[i].quant);
	}
	document.getElementById("cart-quant").textContent = itemCount;
	return itemCount;
}

/* adding new items to cart as Object */
function addToCart(kind, color, fill) {
	var quantNow = Number(document.getElementById("quant").textContent);
	const item = new Pillow(kind, color, fill, quantNow);
	cart.push(item);
	localStorage.setItem('savedCart', JSON.stringify(cart));
	cartCount();
}

/* representing cart as an Array */
const storedValue = JSON.parse(localStorage.getItem('savedCart'));
var cart = storedValue ? storedValue :[];

/* updating Cart page based on current cart */
function showCart() {
	count = cartCount();
	if (count == 0) {
		temp = document.getElementsByTagName("template")[1];
		var clone = temp.content.cloneNode(true);
		document.getElementById("actual-cart").appendChild(clone);
	} else {
		var temp, item, i;
		temp = document.getElementsByTagName("template")[0];
		item = temp.content.querySelector("div");
		for (i = 0; i < cart.length; i++) {
			var clone = temp.content.cloneNode(true);
			clone.querySelector('#number-of-item').innerText = cart[i].quant + "x";
			clone.querySelector('#kind').innerText = cart[i].kind;
			clone.querySelector('#product-link').href = cart[i].kind + ".html";
			clone.querySelector('#product-pic').alt = cart[i].kind;
			if (cart[i].kind == 'Bed Pillow') {
				clone.querySelector('#product-pic').src = "assets/s-o-c-i-a-l-c-u-t-Y4D8chSoqP0-unsplash.jpg";
			}
			if (cart[i].kind == 'Couch Pillow') {
				clone.querySelector('#product-pic').src = "assets/jonathan-borba-_peqvnRW7tc-unsplash.jpg";
			}
			if (cart[i].kind == 'Round Pillow') {
				clone.querySelector('#product-pic').src = "assets/ifrah-akhter-bDXpJtd4IOE-unsplash.jpg";
			}
			if (cart[i].kind == 'Floor Pouf Pillow') {
				clone.querySelector('#product-pic').src = "assets/ralph-ravi-kayden-3jztLhBPrUo-unsplash.jpg";
			}
			clone.querySelector('#color').innerText = cart[i].color;
			clone.querySelector('#fill').innerText = cart[i].fill;
			clone.querySelector('#price').innerText = "$" + (39 * cart[i].quant);
			clone.querySelector(".toRemove").id = "toRemove" + i;
			document.getElementById("actual-cart").appendChild(clone);
		}
	}
}

/* removing items from cart and update the page */
function removeItem(id) {
	var selected = document.getElementById(id).parentNode;
	for (i = 0; i < 6; i++) {
		var related = selected.nextSibling
		related.remove()
	}
	selected.remove();
	posInCart = id.slice(8, 9);
	delete cart[posInCart];
	cart = cart.filter(function(e){return e});
	localStorage.setItem('savedCart', JSON.stringify(cart));
	window.location.reload();
}

/* product detail page exploration */
function changeColor(color) {
	document.getElementById("see-after").style.border= "0px";
	document.getElementById("see-haze").style.border= "0px";
	document.getElementById("see-denim").style.border= "0px";
	document.getElementById("see-rainy").style.border= "0px";
	if (color == "after") {
		document.getElementById("ex-color").setAttribute("src", "assets/after.jpeg");
		document.getElementById("see-after").style.border= "3px solid #E5E5E5";
	}
	if (color == "haze") {
		document.getElementById("ex-color").setAttribute("src", "assets/haze.jpeg");
		document.getElementById("see-haze").style.border= "3px solid #E5E5E5";
	}
	if (color == "denim") {
		document.getElementById("ex-color").setAttribute("src", "assets/joseph-greve-HmEzQFBpZP0-unsplash.jpg");
		document.getElementById("see-denim").style.border= "3px solid #E5E5E5";
	}
	if (color == "rainy") {
		document.getElementById("ex-color").setAttribute("src", "assets/rainy.jpeg");
		document.getElementById("see-rainy").style.border= "3px solid #E5E5E5";
	}
}

function changeFill(fill) {
	document.getElementById("see-blend").style.color="#657890";
	document.getElementById("see-down").style.color="#657890";
	document.getElementById("see-mem").style.color="#657890";
	document.getElementById("see-blend").style.backgroundColor="#F6F6F4";
	document.getElementById("see-down").style.backgroundColor="#F6F6F4";
	document.getElementById("see-mem").style.backgroundColor="#F6F6F4";
	if (fill == "blend") {
		document.getElementById("ex-fill").setAttribute("src", "assets/blend.jpeg");
		document.getElementById("see-blend").style.color="white";
		document.getElementById("see-blend").style.backgroundColor="#8CACD3";
	}
	if (fill == "down") {
		document.getElementById("ex-fill").setAttribute("src", "assets/nico-frey-JfknhSgANFQ-unsplash.jpg");
		document.getElementById("see-down").style.color="white";
		document.getElementById("see-down").style.backgroundColor="#8CACD3";
	}
	if (fill == "mem") {
		document.getElementById("ex-fill").setAttribute("src", "assets/mem.jpeg");
		document.getElementById("see-mem").style.color="white";
		document.getElementById("see-mem").style.backgroundColor="#8CACD3";
	}
}

var chosenCol = "";

/* configure a product for cart */
function chooseColor(color) {
	document.getElementById("choose-after").style.border= "0px";
	document.getElementById("choose-haze").style.border= "0px";
	document.getElementById("choose-denim").style.border= "0px";
	document.getElementById("choose-rainy").style.border= "0px";
	if (color == "after") {
		document.getElementById("choose-after").style.border= "3px solid white";
		chosenCol = "After School Special";
	}
	if (color == "haze") {
		document.getElementById("choose-haze").style.border= "3px solid white";
		chosenCol = "Morning Haze";
	}
	if (color == "denim") {
		document.getElementById("choose-denim").style.border= "3px solid white";
		chosenCol = "Cozy Denim";
	}
	if (color == "rainy") {
		document.getElementById("choose-rainy").style.border= "3px solid white";
		chosenCol = "Rainy Day";
	}
	return chosenCol;
}

var chosenFil = "";

function chooseFill(fill) {
	document.getElementById("choose-blend").style.color="#657890";
	document.getElementById("choose-down").style.color="#657890";
	document.getElementById("choose-mem").style.color="#657890";
	document.getElementById("choose-blend").style.backgroundColor="#F6F6F4";
	document.getElementById("choose-down").style.backgroundColor="#F6F6F4";
	document.getElementById("choose-mem").style.backgroundColor="#F6F6F4";
	if (fill == "blend") {
		document.getElementById("choose-blend").style.color="white";
		document.getElementById("choose-blend").style.backgroundColor="#8CACD3";
		chosenFil = "Hypoallergenic Poly-Blend";
	}
	if (fill == "down") {
		document.getElementById("choose-down").style.color="white";
		document.getElementById("choose-down").style.backgroundColor="#8CACD3";
		chosenFil = "Duck Down";
	}
	if (fill == "mem") {
		document.getElementById("choose-mem").style.color="white";
		document.getElementById("choose-mem").style.backgroundColor="#8CACD3";
		chosenFil = "Memory Foam";
	}
	return chosenFil;
}

function decrease() {
	var quantNow = document.getElementById("quant").textContent;
	if (quantNow > 1) {
		quantNow--;
		document.getElementById("quant").textContent=quantNow;
	};
}

function increase() {
	var quantNow = document.getElementById("quant").textContent;
	quantNow++;
	document.getElementById("quant").textContent=quantNow;
}
