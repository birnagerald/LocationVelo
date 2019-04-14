class Reservation {

	constructor(canvas, station) {
		this.canvas = canvas
		this.openPanelReservation()
		this.duree = null // durée globale en secondes
		this.dureeMinutes = null // affichera les minuetes
		this.dureeSecondes = null // affichera les secondes
		this.decompteId = null // initialise le decompte
		this.station = station
		this.refreshReservation()


	}

	openPanelReservation() {
		let elementButtonReservation = document.getElementById("btn-reserv")
		let elementButtonClosePanelReservation = document.getElementById("close-reservation-panel")
		let elementInfosStationCapacite = document.getElementById("station-capacite")
		let elementInfosStationDispo = document.getElementById("station-dispo")
		let elementInfosStation = document.getElementsByClassName("station-titre")
		let elementCanvas = document.getElementById("canvas")
		let elementContainerValidation = document.getElementById("validation")
		this.canvas = new Canvas
		this.canvas.clear()



		elementButtonReservation.addEventListener('click', () => {
			elementButtonClosePanelReservation.style.display = "block"
			elementInfosStationCapacite.style.display = "none"
			elementInfosStationDispo.style.display = "none"
			elementInfosStation[3].style.display = "none"
			elementInfosStation[4].style.display = "none"
			elementButtonReservation.style.display = "none"
			elementCanvas.style.display = "flex"
			elementContainerValidation.style.display = "block"
			document.getElementById('msgAlerte').innerHTML = ""


		})
	}

	closePanelReservation() {
		let elementButtonReservation = document.getElementById("btn-reserv")
		let elementButtonClosePanelReservation = document.getElementById("close-reservation-panel")
		let elementInfosStationCapacite = document.getElementById("station-capacite")
		let elementInfosStationDispo = document.getElementById("station-dispo")
		let elementInfosStation = document.getElementsByClassName("station-titre")
		let elementCanvas = document.getElementById("canvas")
		let elementContainerValidation = document.getElementById("validation")
		elementButtonClosePanelReservation.style.display = "none"
		elementInfosStationCapacite.style.display = "block"
		elementInfosStationDispo.style.display = "block"
		elementInfosStation[3].style.display = ""
		elementInfosStation[4].style.display = ""
		elementButtonReservation.style.display = "inline-block"
		elementCanvas.style.display = "none"
		elementContainerValidation.style.display = "none"
		if (this.canvas.context != undefined) {
			this.canvas.clear()
		}

		elementButtonClosePanelReservation.addEventListener('click', () => {

			elementButtonClosePanelReservation.style.display = "none"
			elementInfosStationCapacite.style.display = "block"
			elementInfosStationDispo.style.display = "block"
			elementInfosStation[3].style.display = ""
			elementInfosStation[4].style.display = ""
			elementButtonReservation.style.display = "inline-block"
			elementCanvas.style.display = "none"
			elementContainerValidation.style.display = "none"
			if (this.canvas.context != undefined) {
				this.canvas.clear()
			}
		})

	}

	verifCanvas(station) {
		let btnValid = document.getElementById("valide")
		btnValid.addEventListener('click', () => {
			if (this.canvas.cursorX === '') {

				document.getElementById('msgAlerte').innerHTML = 'Merci de signer votre réservation pour la sation ' + this.station.marker.name // Message en cas de canvas vide

			} else {
				

				if (this.station.marker.name === sessionStorage.nomStationReserver) {
					alert('Une réservation est déjà en cours sur la station ' + sessionStorage.nomStationReserver)
					this.closePanelReservation()
				}

				if (sessionStorage.statusReservation === 'true') {

					let confirmation = window.confirm('Souhaitez-vous annuler la réservation en cours à ' + sessionStorage.nomStationReserver + ' ?')
					if (confirmation) {
						clearInterval(this.decompteId)
						this.createReservation(station)
					} else {
						this.closePanelReservation()
					}

				} else {

					this.createReservation(station)
				}
				document.getElementById('msgAlerte').innerHTML = ''
				
			}
		})
	}

	setTimer(init) {
		if (init = true) {
			this.duree = Number(sessionStorage.dureeReservation)
		}
		this.dureeMinutes = Math.floor(this.duree / 60)
		this.dureeSecondes = this.duree - (this.dureeMinutes * 60)
	}

	createReservation(station) {
		this.station.webStorage()
		this.setTimer(true)
		this.decompteReservation()
		this.closePanelReservation()
	}

	cancelReservation(station) {
		clearInterval(this.decompteId)
		sessionStorage.clear()
		this.setCurrentInfos(false)

	}

	decompteReservation() {
		if (this.duree > 0) {
			this.decompteId = setInterval(() => {
				if (this.duree <= 0) {
					this.cancelReservation()
					sessionStorage.clear()
				} else {
					this.duree--
					sessionStorage.dureeReservation = this.duree
					this.setTimer(false)
					this.setCurrentInfos(true)
					this.station.updateInfo()
				}
			}, 1000)
		}
	}

	refreshReservation() {
		window.addEventListener('load', () => {
			if (sessionStorage.statusReservation === 'true') {
				clearInterval(this.decompteId)
				this.duree = Number(sessionStorage.dureeReservation)
				this.decompteReservation()
			}
		})
	}
	
	setCurrentInfos(reserved) {
		if (reserved === true) {
			document.getElementById('reservation_status').innerHTML = ('Vous avez une réservation en cours à la station :')+(' <span>' + sessionStorage.nomStationReserver + '</span>')
			document.getElementById('compteur-reservation').innerHTML = ('Votre réservation expirera dans :')+(' <span>' + this.dureeMinutes + 'mn et ' + this.dureeSecondes + 'sec</span>')
			document.getElementById('cancel').style.display = "block"
			document.getElementById('cancel').addEventListener('click', () =>{
				this.duree = 0
			})
			
		} else {
			document.getElementById('reservation_status').innerHTML = 'Aucune réservation en cours'
			document.getElementById('compteur-reservation').innerHTML = ''
			document.getElementById('cancel').style.display = "none"
		}
	}

}
