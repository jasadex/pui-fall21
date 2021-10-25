function Pillow(kind, color, fill, quant) {
	this.kind = kind;
	this.color = color;
	this.fill = fill;
	this.quant = quant;
}

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

function chooseColor(color) {
	document.getElementById("choose-after").style.border= "0px";
	document.getElementById("choose-haze").style.border= "0px";
	document.getElementById("choose-denim").style.border= "0px";
	document.getElementById("choose-rainy").style.border= "0px";
	if (color == "after") {
		document.getElementById("choose-after").style.border= "3px solid white";
	}
	if (color == "haze") {
		document.getElementById("choose-haze").style.border= "3px solid white";
	}
	if (color == "denim") {
		document.getElementById("choose-denim").style.border= "3px solid white";
	}
	if (color == "rainy") {
		document.getElementById("choose-rainy").style.border= "3px solid white";
	}
}

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
	}
	if (fill == "down") {
		document.getElementById("choose-down").style.color="white";
		document.getElementById("choose-down").style.backgroundColor="#8CACD3";
	}
	if (fill == "mem") {
		document.getElementById("choose-mem").style.color="white";
		document.getElementById("choose-mem").style.backgroundColor="#8CACD3";
	}
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

function cartIncr () {
	var newAmount = document.getElementById("quant").textContent;
	document.getElementById("cart-quant").textContent = newAmount;
}