// Tableau contenant les données du diaporama
let slides = [
	{
		url: "diapo-00.jpg"
		    },
	{
		url: "diapo-01.jpg"
		    },
	{
		url: "diapo-02.jpg"
		    },
	{
		url: "diapo-03.jpg"
		    },
	{
		url: "diapo-04.jpg"
		    }
	]

let slides2 = [
	{
		url: "diapo-02.jpg"
		    },
	{
		url: "diapo-03.jpg"
		    },
	{
		url: "diapo-04.jpg"
		    },
	{
		url: "diapo-00.jpg"
		    },
	{
		url: "diapo-01.jpg"
		    }
	]

let styleCoverflow = [
	{
		transform: "rotateY(-25deg) scaleX(1)  scaleY(0.5) translate3d(1.5rem, 0, -1.5rem)",
		zIndex: "6",
		top: "12%",
		left: "48%",
		index: "-1"
		    },
	{
		transform: "rotateY(-25deg) scaleX(1) scaleY(0.5) translate3d(1.5rem, 0, -1.5rem)",
		zIndex: "7",
		top: "12%",
		left: "46%",
		index: "0"
		    },

	{
		transform: "rotateY(-25deg) scaleX(1) scaleY(0.5)",
		zIndex: "8",
		top: "12%",
		left: "43%",
		index: "1"
		    },
	{
		transform: "rotateY(-18deg) scaleX(1) scaleY(0.7)",
		zIndex: "9",
		top: "12%",
		left: "40%",
		index: "2"
		    },
	{
		transform: "rotateY(0deg) scaleX(1) scaleY(1)",
		zIndex: "10",
		top: "11%",
		left: "38%",
		index: "3"
		    },
	{
		transform: "rotateY(18deg) scaleX(1) scaleY(0.7)",
		zIndex: "9",
		top: "12%",
		left: "36%",
		index: "4"
		    },
	{
		transform: "rotateY(25deg) scaleX(1) scaleY(0.5)",
		zIndex: "8",
		top: "12%",
		left: "33%",
		index: "5"
		    },
	{
		transform: "rotateY(25deg) scaleX(1) scaleY(0.5) translate3d(-1.5rem, 0, -1.5rem)",
		zIndex: "7",
		top: "12%",
		left: "32%",
		index: "6"
		    },
	{
		transform: "rotateY(25deg) scaleX(1)  scaleY(0.5) translate3d(-1.5rem, 0, -1.5rem)",
		zIndex: "6",
		top: "12%",
		left: "30%",
		index: "7"
		    }



]

class Apps {

	constructor(slides, slides2, styleCoverflow) {
		this.initMap()
		this.slides = slides
		this.slides2 = slides2
		this.slider = new Slider(slides, slides2)
		this.responsiveHeader()
		this.canvas = null
		this.station = new Station
		this.reservation = new Reservation(this.canvas, this.station)

	}

	query() {
		let apiKey = "8be089d7ab930cd9539bc82e25a1700d938a472b"
		let contrat = "lyon"
		let urlQuery = 'https://api.jcdecaux.com/vls/v1/stations?contract=' + contrat + '&apiKey=' + apiKey
		let allStations = null

		ajaxGet(urlQuery, (data) => {
			allStations = JSON.parse(data)
			allStations.forEach((station) => {
				let marker = this.map.addMarker(station)
				marker.addEventListener('click', () => {

					this.station.currentStation(station)
					this.reservation.closePanelReservation()
					this.station.setBtnReserver()
					this.reservation.verifCanvas(station)

				})

			})
		})


	}

	initMap() {

		let $map = document.getElementById('mapid')
		const initMap = async () => {
			this.map = new LeafletMap()
			await this.map.load($map)
			this.query()

		}

		if ($map !== null) {

			initMap()
		}
	}

	responsiveHeader() {
		let scrollButton = document.getElementById("scroll_button")
		let scrollButton2 = document.getElementById("scroll_button_2")
		let headerListElts = document.getElementsByClassName("menu_item_scroll")

		scrollButton2.style.display = "none"

		scrollButton.addEventListener('click', () => {
			scrollButton.style.display = "none"
			scrollButton2.style.display = "inline-block"
			document.getElementById("menu_scroll").style.display = "block"

		})

		scrollButton2.addEventListener('click', () => {
			scrollButton2.style.display = "none"
			scrollButton.style.display = "inline-block"
			document.getElementById("menu_scroll").style.display = "none"

		})

		let i
		for (i = 0; i < headerListElts.length; i++) {
			headerListElts[i].addEventListener('click', () => {
				scrollButton2.style.display = "none"
				scrollButton.style.display = "inline-block"
				document.getElementById("menu_scroll").style.display = "none"
			})
		}
	}
}

document.addEventListener('DOMContentLoaded', () =>{
	new Apps(slides, slides2, styleCoverflow)
})
