class LeafletMap {

	constructor() {
		this.map = null
		this.bounds = []

	}

	async load(element) {

		return new Promise((resolve, reject) => {
			$script('https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', () => {

				$script('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', () => {
					this.markers = L.markerClusterGroup()
				})

				this.map = L.map(element)
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
					maxZoom: 18,
					id: 'mapbox.streets',
					accessToken: 'pk.eyJ1IjoiYmlybmFnZXJhbGQiLCJhIjoiY2psczllZzVlMDl5YzNwcGY5bTJ4NDBqbCJ9.HDbrTaiL14pKA74AnNBk0A'
				}).addTo(this.map)
				resolve()

			})

		})

		
	}

	addMarker(allStations) {
		//Icon
		let green = L.icon({
			iconUrl: '../images/marker-icon-green.png',
			iconSize: [64, 64],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowUrl: '../images/marker-shadow.png',
			shadowSize: [41, 41],
			shadowAnchor: [22, 94]
		})

		let red = L.icon({
			iconUrl: '../images/marker-icon-red.png',
			iconSize: [64, 64],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowUrl: '../images/marker-shadow.png',
			shadowSize: [41, 41],
			shadowAnchor: [22, 94]
		})

		let orange = L.icon({
			iconUrl: '../images/marker-icon-orange.png',
			iconSize: [64, 64],
			iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowUrl: '../images/marker-shadow.png',
			shadowSize: [41, 41],
			shadowAnchor: [22, 94]
		})



		let varIcon = null
		if (allStations.status === 'CLOSED' || allStations.available_bikes === 0) {
			varIcon = red
		} else if (allStations.available_bikes <= 5) {
			varIcon = orange
		} else {
			varIcon = green
		}


		let marker = L.marker([allStations.position.lat, allStations.position.lng], {
			icon: varIcon
		})
		this.markers.addLayer(marker)
		this.map.addLayer(this.markers)


		let point = []
		point.push(allStations.position.lat, allStations.position.lng)
		this.bounds.push(point)
		this.map.fitBounds(this.bounds)


		return marker


	}


}
