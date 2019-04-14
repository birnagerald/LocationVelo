class Station {

	constructor() {

	}

	currentStation(station) {

		this.status = station.status
		this.nom = station.name.split('-')[1]
		this.number = station.number
		this.adresse = station.address
		this.capacite = station.available_bike_stands
		this.dispo = station.available_bikes
		this.marker = {
			status: this.status,
			name: this.nom,
			adresse: this.adresse,
			capacite: this.capacite,
			dispo: this.dispo,
			number: this.number
		}
		
		this.updateInfo()
		
		return this.marker
	}

	updateInfo() {
		let infoStatus = document.getElementById("station-status")
		let infoName = document.getElementById("station-nom")
		let infoAdresse = document.getElementById("station-adresse")
		let infoCapacite = document.getElementById("station-capacite")
		let infoDispo = document.getElementById("station-dispo")
		let btnReservation = document.getElementById("reserver")
		infoStatus.innerHTML = this.status
		infoName.innerHTML = this.nom
		infoAdresse.innerHTML = this.adresse
		infoCapacite.innerHTML = this.capacite
		infoDispo.innerHTML = this.dispo
		btnReservation.style.display = "block"
		
	}
	
	webStorage() {
		sessionStorage.clear()
		let reservationValidity = 1
		sessionStorage.setItem('statusReservation', 'true')
		sessionStorage.setItem('nomStationReserver', this.marker.name)
		sessionStorage.dureeReservation = (reservationValidity * 60)

	}


	setBtnReserver() {
		let elementButtonReservation = document.getElementById("btn-reserv")
		let elementButtonClosePanelReservation = document.getElementById("close-reservation-panel")
		let elementInfosStationCapacite = document.getElementById("station-capacite")
		let elementInfosStationDispo = document.getElementById("station-dispo")
		let elementInfosStation = document.getElementsByClassName("station-titre")
		let elementCanvas = document.getElementById("canvas")
		let elementContainerValidation = document.getElementById("validation")
		this.canvas = new Canvas
		this.canvas.clear()
		if (this.status === 'OPEN' && this.dispo > 0) {
			elementButtonReservation.style.display = "block"
			elementButtonReservation.addEventListener('click', () => {
				elementButtonClosePanelReservation.style.display = "block"
				elementInfosStationCapacite.style.display = "none"
				elementInfosStationDispo.style.display = "none"
				elementInfosStation[3].style.display = "none"
				elementInfosStation[4].style.display = "none"
				elementButtonReservation.style.display = "none"
				elementCanvas.style.display = "flex"
				elementContainerValidation.style.display = "block"


			})
		} else {
			elementButtonReservation.style.display = "none"
		}
	}

}
