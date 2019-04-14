class Slider {

	constructor(tableau, tableau2) {
		this.tableau = tableau
		this.tableau2 = tableau2
		this.rep = '../images/'
		this.index = 0
		this.root = document.getElementById('slider')
		this.container = this.createDivWithClass('coverflow-container')
		this.InitSlider()
		this.eventClickCoverflow()
		this.eventClickDiapo()
		this.eventKeyboard()
		this.sliderCommands()

	}

	InitSlider() {

		//		Initialisation du coverflow


		let i = 1
		while (i <= this.tableau2.length) {
			let imgElt = this.createImgWithClass("Image")
			let item = this.createDivWithClass('coverflow-item' + i)
			item.setAttribute('id', i)


			if (i === 1) {
				item.style.zIndex = 8;
				item.style.left = 43 + "%";
				item.style.top = 12 + "%";
				item.style.border = 1 + "px solid black";
				item.style.transform = "rotateY(-25deg) scaleX(1) scaleY(0.5)";


			} else if (i === 2) {
				item.style.zIndex = 9;
				item.style.left = 40 + "%";
				item.style.top = 12 + "%";
				item.style.border = 1 + "px solid black";
				item.style.transform = "rotateY(-18deg) scaleX(1) scaleY(0.7)";

			} else if (i === 3) {
				item.style.zIndex = 10;
				item.style.left = 38 + "%";
				item.style.top = 11 + "%";
				item.style.border = 1 + "px solid black";
				item.style.transform = "rotateY(0deg) scaleX(1) scaleY(1)";

			} else if (i === 4) {
				item.style.zIndex = 9;
				item.style.left = 36 + "%";
				item.style.top = 12 + "%";
				item.style.border = 1 + "px solid black";
				item.style.transform = "rotateY(18deg) scaleX(1) scaleY(0.7)";

			} else {
				item.style.zIndex = 8;
				item.style.left = 33 + "%";
				item.style.top = 12 + "%";
				item.style.border = 1 + "px solid black";
				item.style.transform = "rotateY(25deg) scaleX(1) scaleY(0.5)";
			}
			item.appendChild(imgElt)
			this.container.appendChild(item)
			i++
		}



		//		Initialisation du diaporama


		let divElt = document.createElement('div')
		divElt.classList.add('slide')
		this.root.appendChild(divElt)

		let imgElt = document.createElement('img')
		imgElt.src = this.rep + this.tableau[this.index].url
		imgElt.id = "img-slide"
		imgElt.alt = this.tableau[this.index].url

		divElt.appendChild(imgElt)

		this.initialisation()
	}

	displayDiapo() {
		let imgElt = document.getElementById('img-slide')
		imgElt.src = this.rep + this.tableau[this.index].url
		imgElt.alt = this.tableau[this.index].url

	}

	nextCoverflow(compteur) {

		let diapo1 = document.getElementById("1")
		let diapo2 = document.getElementById("2")
		let diapo3 = document.getElementById("3")
		let diapo4 = document.getElementById("4")
		let diapo5 = document.getElementById("5")
		

		diapo1.style.transform = styleCoverflow[2 + compteur].transform
		diapo1.style.zIndex = styleCoverflow[2 + compteur].zIndex
		diapo1.style.top = styleCoverflow[2 + compteur].top
		diapo1.style.left = styleCoverflow[2 + compteur].left

		diapo2.style.transform = styleCoverflow[3 + compteur].transform
		diapo2.style.zIndex = styleCoverflow[3 + compteur].zIndex
		diapo2.style.top = styleCoverflow[3 + compteur].top
		diapo2.style.left = styleCoverflow[3 + compteur].left

		diapo3.style.transform = styleCoverflow[4 + compteur].transform
		diapo3.style.zIndex = styleCoverflow[4 + compteur].zIndex
		diapo3.style.top = styleCoverflow[4 + compteur].top
		diapo3.style.left = styleCoverflow[4 + compteur].left

		diapo4.style.transform = styleCoverflow[5 + compteur].transform
		diapo4.style.zIndex = styleCoverflow[5 + compteur].zIndex
		diapo4.style.top = styleCoverflow[5 + compteur].top
		diapo4.style.left = styleCoverflow[5 + compteur].left

		diapo5.style.transform = styleCoverflow[6 + compteur].transform
		diapo5.style.zIndex = styleCoverflow[6 + compteur].zIndex
		diapo5.style.top = styleCoverflow[6 + compteur].top
		diapo5.style.left = styleCoverflow[6 + compteur].left


	}

	initialisation() {
		let slide = document.getElementsByClassName("slide")
		let coverflow = document.getElementsByClassName("coverflow-container")
		if (window.innerWidth >= 1400) {

			slide[0].style.display = "none"
			coverflow[0].style.display = "block"
		} else {
			slide[0].style.display = "block"
			coverflow[0].style.display = "none"

		}
	}

	createDivWithClass(className) {

		let div = document.createElement('div')
		div.setAttribute('class', className)
		this.root.appendChild(div)
		return div
	}

	createImgWithClass(imgClassName) {

		this.index++;
		if (this.index > this.tableau2.length - 1) {
			this.index = 0;
		};
		let imgElt = document.createElement('img')
		imgElt.src = this.rep + this.tableau2[this.index].url
		imgElt.setAttribute('class', imgClassName)
		imgElt.alt = this.tableau2[this.index].url
		return imgElt
	}

	eventClickCoverflow() {

		let diapo1 = document.getElementById("1")
		let diapo2 = document.getElementById("2")
		let diapo3 = document.getElementById("3")
		let diapo4 = document.getElementById("4")
		let diapo5 = document.getElementById("5")
		
		


		diapo1.addEventListener('click', () => {

			diapo1.style.transform = styleCoverflow[4].transform
			diapo1.style.zIndex = styleCoverflow[4].zIndex
			diapo1.style.top = styleCoverflow[4].top
			diapo1.style.left = styleCoverflow[4].left

			diapo2.style.transform = styleCoverflow[5].transform
			diapo2.style.zIndex = styleCoverflow[5].zIndex
			diapo2.style.top = styleCoverflow[5].top
			diapo2.style.left = styleCoverflow[5].left

			diapo3.style.transform = styleCoverflow[6].transform
			diapo3.style.zIndex = styleCoverflow[6].zIndex
			diapo3.style.top = styleCoverflow[6].top
			diapo3.style.left = styleCoverflow[6].left

			diapo4.style.transform = styleCoverflow[7].transform
			diapo4.style.zIndex = styleCoverflow[7].zIndex
			diapo4.style.top = styleCoverflow[7].top
			diapo4.style.left = styleCoverflow[7].left

			diapo5.style.transform = styleCoverflow[8].transform
			diapo5.style.zIndex = styleCoverflow[8].zIndex
			diapo5.style.top = styleCoverflow[8].top
			diapo5.style.left = styleCoverflow[8].left
			
			this.n = -2
		})

		diapo2.addEventListener('click', () => {

			diapo1.style.transform = styleCoverflow[3].transform
			diapo1.style.zIndex = styleCoverflow[3].zIndex
			diapo1.style.top = styleCoverflow[3].top
			diapo1.style.left = styleCoverflow[3].left

			diapo2.style.transform = styleCoverflow[4].transform
			diapo2.style.zIndex = styleCoverflow[4].zIndex
			diapo2.style.top = styleCoverflow[4].top
			diapo2.style.left = styleCoverflow[4].left

			diapo3.style.transform = styleCoverflow[5].transform
			diapo3.style.zIndex = styleCoverflow[5].zIndex
			diapo3.style.top = styleCoverflow[5].top
			diapo3.style.left = styleCoverflow[5].left

			diapo4.style.transform = styleCoverflow[6].transform
			diapo4.style.zIndex = styleCoverflow[6].zIndex
			diapo4.style.top = styleCoverflow[6].top
			diapo4.style.left = styleCoverflow[6].left

			diapo5.style.transform = styleCoverflow[7].transform
			diapo5.style.zIndex = styleCoverflow[7].zIndex
			diapo5.style.top = styleCoverflow[7].top
			diapo5.style.left = styleCoverflow[7].left
			this.n = 1
		})

		diapo3.addEventListener('click', () => {

			diapo1.style.transform = styleCoverflow[2].transform
			diapo1.style.zIndex = styleCoverflow[2].zIndex
			diapo1.style.top = styleCoverflow[2].top
			diapo1.style.left = styleCoverflow[2].left

			diapo2.style.transform = styleCoverflow[3].transform
			diapo2.style.zIndex = styleCoverflow[3].zIndex
			diapo2.style.top = styleCoverflow[3].top
			diapo2.style.left = styleCoverflow[3].left

			diapo3.style.transform = styleCoverflow[4].transform
			diapo3.style.zIndex = styleCoverflow[4].zIndex
			diapo3.style.top = styleCoverflow[4].top
			diapo3.style.left = styleCoverflow[4].left

			diapo4.style.transform = styleCoverflow[5].transform
			diapo4.style.zIndex = styleCoverflow[5].zIndex
			diapo4.style.top = styleCoverflow[5].top
			diapo4.style.left = styleCoverflow[5].left

			diapo5.style.transform = styleCoverflow[6].transform
			diapo5.style.zIndex = styleCoverflow[6].zIndex
			diapo5.style.top = styleCoverflow[6].top
			diapo5.style.left = styleCoverflow[6].left
			this.n = 0
		})

		diapo4.addEventListener('click', () => {

			diapo1.style.transform = styleCoverflow[1].transform
			diapo1.style.zIndex = styleCoverflow[1].zIndex
			diapo1.style.top = styleCoverflow[1].top
			diapo1.style.left = styleCoverflow[1].left

			diapo2.style.transform = styleCoverflow[2].transform
			diapo2.style.zIndex = styleCoverflow[2].zIndex
			diapo2.style.top = styleCoverflow[2].top
			diapo2.style.left = styleCoverflow[2].left

			diapo3.style.transform = styleCoverflow[3].transform
			diapo3.style.zIndex = styleCoverflow[3].zIndex
			diapo3.style.top = styleCoverflow[3].top
			diapo3.style.left = styleCoverflow[3].left

			diapo4.style.transform = styleCoverflow[4].transform
			diapo4.style.zIndex = styleCoverflow[4].zIndex
			diapo4.style.top = styleCoverflow[4].top
			diapo4.style.left = styleCoverflow[4].left

			diapo5.style.transform = styleCoverflow[5].transform
			diapo5.style.zIndex = styleCoverflow[5].zIndex
			diapo5.style.top = styleCoverflow[5].top
			diapo5.style.left = styleCoverflow[5].left
			this.n = -1
		})

		diapo5.addEventListener('click', () => {

			diapo1.style.transform = styleCoverflow[0].transform
			diapo1.style.zIndex = styleCoverflow[0].zIndex
			diapo1.style.top = styleCoverflow[0].top
			diapo1.style.left = styleCoverflow[0].left

			diapo2.style.transform = styleCoverflow[1].transform
			diapo2.style.zIndex = styleCoverflow[1].zIndex
			diapo2.style.top = styleCoverflow[1].top
			diapo2.style.left = styleCoverflow[1].left

			diapo3.style.transform = styleCoverflow[2].transform
			diapo3.style.zIndex = styleCoverflow[2].zIndex
			diapo3.style.top = styleCoverflow[2].top
			diapo3.style.left = styleCoverflow[2].left

			diapo4.style.transform = styleCoverflow[3].transform
			diapo4.style.zIndex = styleCoverflow[3].zIndex
			diapo4.style.top = styleCoverflow[3].top
			diapo4.style.left = styleCoverflow[3].left

			diapo5.style.transform = styleCoverflow[4].transform
			diapo5.style.zIndex = styleCoverflow[4].zIndex
			diapo5.style.top = styleCoverflow[4].top
			diapo5.style.left = styleCoverflow[4].left
			this.n = -2
		})
	}

	nextDiapo() {
		this.index++;
		if (this.index > this.tableau.length - 1) {
			this.index = 0;
		};
		this.displayDiapo();
	}

	previousDiapo() {
		this.index--;
		if (this.index < 0) {
			this.index = this.tableau.length - 1;
		};
		this.displayDiapo();
	}

	eventClickDiapo() {

		let cmdLeft = document.getElementsByClassName("left")
		let cmdRight = document.getElementsByClassName("right")

		cmdLeft[0].onclick = () => {
			this.previousDiapo()
		}

		cmdRight[0].onclick = () => {
			this.nextDiapo()
		}
	}

	eventKeyboard() {

		let diapo1 = document.getElementById("1")
		let diapo2 = document.getElementById("2")
		let diapo3 = document.getElementById("3")
		let diapo4 = document.getElementById("4")
		let diapo5 = document.getElementById("5")
		
		

		function leftArrowPressed(n) {
			if (diapo1.style.zIndex == 10) {
				diapo1.style.transform = styleCoverflow[3].transform
				diapo1.style.zIndex = styleCoverflow[3].zIndex
				diapo1.style.top = styleCoverflow[3].top
				diapo1.style.left = styleCoverflow[3].left

				diapo2.style.transform = styleCoverflow[4].transform
				diapo2.style.zIndex = styleCoverflow[4].zIndex
				diapo2.style.top = styleCoverflow[4].top
				diapo2.style.left = styleCoverflow[4].left

				diapo3.style.transform = styleCoverflow[5].transform
				diapo3.style.zIndex = styleCoverflow[5].zIndex
				diapo3.style.top = styleCoverflow[5].top
				diapo3.style.left = styleCoverflow[5].left

				diapo4.style.transform = styleCoverflow[6].transform
				diapo4.style.zIndex = styleCoverflow[6].zIndex
				diapo4.style.top = styleCoverflow[6].top
				diapo4.style.left = styleCoverflow[6].left

				diapo5.style.transform = styleCoverflow[7].transform
				diapo5.style.zIndex = styleCoverflow[7].zIndex
				diapo5.style.top = styleCoverflow[7].top
				diapo5.style.left = styleCoverflow[7].left
				
				n = 1
				
				

			} else if (diapo2.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[2].transform
				diapo1.style.zIndex = styleCoverflow[2].zIndex
				diapo1.style.top = styleCoverflow[2].top
				diapo1.style.left = styleCoverflow[2].left

				diapo2.style.transform = styleCoverflow[3].transform
				diapo2.style.zIndex = styleCoverflow[3].zIndex
				diapo2.style.top = styleCoverflow[3].top
				diapo2.style.left = styleCoverflow[3].left

				diapo3.style.transform = styleCoverflow[4].transform
				diapo3.style.zIndex = styleCoverflow[4].zIndex
				diapo3.style.top = styleCoverflow[4].top
				diapo3.style.left = styleCoverflow[4].left

				diapo4.style.transform = styleCoverflow[5].transform
				diapo4.style.zIndex = styleCoverflow[5].zIndex
				diapo4.style.top = styleCoverflow[5].top
				diapo4.style.left = styleCoverflow[5].left

				diapo5.style.transform = styleCoverflow[6].transform
				diapo5.style.zIndex = styleCoverflow[6].zIndex
				diapo5.style.top = styleCoverflow[6].top
				diapo5.style.left = styleCoverflow[6].left
				n = 0

			} else if (diapo3.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[1].transform
				diapo1.style.zIndex = styleCoverflow[1].zIndex
				diapo1.style.top = styleCoverflow[1].top
				diapo1.style.left = styleCoverflow[1].left

				diapo2.style.transform = styleCoverflow[2].transform
				diapo2.style.zIndex = styleCoverflow[2].zIndex
				diapo2.style.top = styleCoverflow[2].top
				diapo2.style.left = styleCoverflow[2].left

				diapo3.style.transform = styleCoverflow[3].transform
				diapo3.style.zIndex = styleCoverflow[3].zIndex
				diapo3.style.top = styleCoverflow[3].top
				diapo3.style.left = styleCoverflow[3].left

				diapo4.style.transform = styleCoverflow[4].transform
				diapo4.style.zIndex = styleCoverflow[4].zIndex
				diapo4.style.top = styleCoverflow[4].top
				diapo4.style.left = styleCoverflow[4].left

				diapo5.style.transform = styleCoverflow[5].transform
				diapo5.style.zIndex = styleCoverflow[5].zIndex
				diapo5.style.top = styleCoverflow[5].top
				diapo5.style.left = styleCoverflow[5].left
				n = -1


			} else if (diapo4.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[0].transform
				diapo1.style.zIndex = styleCoverflow[0].zIndex
				diapo1.style.top = styleCoverflow[0].top
				diapo1.style.left = styleCoverflow[0].left

				diapo2.style.transform = styleCoverflow[1].transform
				diapo2.style.zIndex = styleCoverflow[1].zIndex
				diapo2.style.top = styleCoverflow[1].top
				diapo2.style.left = styleCoverflow[1].left

				diapo3.style.transform = styleCoverflow[2].transform
				diapo3.style.zIndex = styleCoverflow[2].zIndex
				diapo3.style.top = styleCoverflow[2].top
				diapo3.style.left = styleCoverflow[2].left

				diapo4.style.transform = styleCoverflow[3].transform
				diapo4.style.zIndex = styleCoverflow[3].zIndex
				diapo4.style.top = styleCoverflow[3].top
				diapo4.style.left = styleCoverflow[3].left

				diapo5.style.transform = styleCoverflow[4].transform
				diapo5.style.zIndex = styleCoverflow[4].zIndex
				diapo5.style.top = styleCoverflow[4].top
				diapo5.style.left = styleCoverflow[4].left
				n = -2
			} else {
				n = -2
			}
			return n
		}

		function rightArrowPressed(n) {
			if (diapo2.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[4].transform
				diapo1.style.zIndex = styleCoverflow[4].zIndex
				diapo1.style.top = styleCoverflow[4].top
				diapo1.style.left = styleCoverflow[4].left

				diapo2.style.transform = styleCoverflow[5].transform
				diapo2.style.zIndex = styleCoverflow[5].zIndex
				diapo2.style.top = styleCoverflow[5].top
				diapo2.style.left = styleCoverflow[5].left

				diapo3.style.transform = styleCoverflow[6].transform
				diapo3.style.zIndex = styleCoverflow[6].zIndex
				diapo3.style.top = styleCoverflow[6].top
				diapo3.style.left = styleCoverflow[6].left

				diapo4.style.transform = styleCoverflow[7].transform
				diapo4.style.zIndex = styleCoverflow[7].zIndex
				diapo4.style.top = styleCoverflow[7].top
				diapo4.style.left = styleCoverflow[7].left

				diapo5.style.transform = styleCoverflow[8].transform
				diapo5.style.zIndex = styleCoverflow[8].zIndex
				diapo5.style.top = styleCoverflow[8].top
				diapo5.style.left = styleCoverflow[8].left
				n = 2
				

			} else if (diapo3.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[3].transform
				diapo1.style.zIndex = styleCoverflow[3].zIndex
				diapo1.style.top = styleCoverflow[3].top
				diapo1.style.left = styleCoverflow[3].left

				diapo2.style.transform = styleCoverflow[4].transform
				diapo2.style.zIndex = styleCoverflow[4].zIndex
				diapo2.style.top = styleCoverflow[4].top
				diapo2.style.left = styleCoverflow[4].left

				diapo3.style.transform = styleCoverflow[5].transform
				diapo3.style.zIndex = styleCoverflow[5].zIndex
				diapo3.style.top = styleCoverflow[5].top
				diapo3.style.left = styleCoverflow[5].left

				diapo4.style.transform = styleCoverflow[6].transform
				diapo4.style.zIndex = styleCoverflow[6].zIndex
				diapo4.style.top = styleCoverflow[6].top
				diapo4.style.left = styleCoverflow[6].left

				diapo5.style.transform = styleCoverflow[7].transform
				diapo5.style.zIndex = styleCoverflow[7].zIndex
				diapo5.style.top = styleCoverflow[7].top
				diapo5.style.left = styleCoverflow[7].left
				n = 1
				

			} else if (diapo4.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[2].transform
				diapo1.style.zIndex = styleCoverflow[2].zIndex
				diapo1.style.top = styleCoverflow[2].top
				diapo1.style.left = styleCoverflow[2].left

				diapo2.style.transform = styleCoverflow[3].transform
				diapo2.style.zIndex = styleCoverflow[3].zIndex
				diapo2.style.top = styleCoverflow[3].top
				diapo2.style.left = styleCoverflow[3].left

				diapo3.style.transform = styleCoverflow[4].transform
				diapo3.style.zIndex = styleCoverflow[4].zIndex
				diapo3.style.top = styleCoverflow[4].top
				diapo3.style.left = styleCoverflow[4].left

				diapo4.style.transform = styleCoverflow[5].transform
				diapo4.style.zIndex = styleCoverflow[5].zIndex
				diapo4.style.top = styleCoverflow[5].top
				diapo4.style.left = styleCoverflow[5].left

				diapo5.style.transform = styleCoverflow[6].transform
				diapo5.style.zIndex = styleCoverflow[6].zIndex
				diapo5.style.top = styleCoverflow[6].top
				diapo5.style.left = styleCoverflow[6].left
				n = 0

			} else if (diapo5.style.zIndex == 10) {

				diapo1.style.transform = styleCoverflow[1].transform
				diapo1.style.zIndex = styleCoverflow[1].zIndex
				diapo1.style.top = styleCoverflow[1].top
				diapo1.style.left = styleCoverflow[1].left

				diapo2.style.transform = styleCoverflow[2].transform
				diapo2.style.zIndex = styleCoverflow[2].zIndex
				diapo2.style.top = styleCoverflow[2].top
				diapo2.style.left = styleCoverflow[2].left

				diapo3.style.transform = styleCoverflow[3].transform
				diapo3.style.zIndex = styleCoverflow[3].zIndex
				diapo3.style.top = styleCoverflow[3].top
				diapo3.style.left = styleCoverflow[3].left

				diapo4.style.transform = styleCoverflow[4].transform
				diapo4.style.zIndex = styleCoverflow[4].zIndex
				diapo4.style.top = styleCoverflow[4].top
				diapo4.style.left = styleCoverflow[4].left

				diapo5.style.transform = styleCoverflow[5].transform
				diapo5.style.zIndex = styleCoverflow[5].zIndex
				diapo5.style.top = styleCoverflow[5].top
				diapo5.style.left = styleCoverflow[5].left
				n = -1
			} else {
				n = -2
			}
			return n

		}


		document.onkeydown = (e) => {
			e = e || e.event;
			switch (e.keyCode) {
				case 37:
					this.n = (leftArrowPressed(this.n));
					this.previousDiapo();
					
					break;
				case 39:
					this.n = (rightArrowPressed(this.n));
					this.nextDiapo();
					break;
			}

		}

	}

	mouseOver() {
		clearInterval(this.myVar)
	}

	mouseOut() {
		this.myVar = setInterval(() => {
			this.nextDiapo()
			this.nextCoverflow(this.n)
			if (this.n == -2) {
				this.n = (this.n + 5)
			}
			this.n--
		}, 5000)



	}

	sliderCommands() {

		this.myVar = 0
		this.n = 0

		this.myVar = setInterval(() => {

			this.nextDiapo()
			
			this.nextCoverflow(this.n)
			
			if (this.n == -2) {
				this.n = (this.n + 5)
			}
			this.n--
		}, 5000)

		let zoneEvent = document.getElementById("diapo")

		zoneEvent.addEventListener("mouseover", () => {
			this.mouseOver()
		})

		zoneEvent.addEventListener("mouseleave", () => {

			this.mouseOut(this.n)
		})

	}


}
