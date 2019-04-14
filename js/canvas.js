class Canvas {

	constructor() {
		this.canvas = document.getElementById("sign")
		this.btnReset = document.getElementById("reset")
		this.context = this.canvas.getContext('2d')
		this.cursorX = ''
		this.cursorY = ''
		this.paint = false
		this.starded = false
		this.color = '#A2C619'
		this.setupCanvas()
	}

	// Méthode pour dessiner
	draw() {

		if (!this.starded) {
			this.context.beginPath()
			this.context.moveTo(this.cursorX, this.cursorY)
			this.starded = true
		} else {
			this.context.lineTo(this.cursorX, this.cursorY)
			this.context.strokeStyle = this.color
			this.context.lineWidth = 4
			this.context.stroke()
		}
	}

	move(e, media, elt) {
		if (this.paint) {
			if (media) {
				// Event mobile :

				// Coordonnées du doigt :
				this.cursorX = (e.targetTouches[0].pageX - elt.offsetLeft)
				this.cursorY = (e.targetTouches[0].pageY - elt.offsetTop)
			} else {

				// Coordonnées de la souris :
				this.cursorX = (e.pageX - elt.offsetLeft)
				this.cursorY = (e.pageY - elt.offsetTop)
			}

			// Dessine une ligne :
			this.draw()
		}
	}

	moveEnd() {
		this.paint = false
		this.starded = false
	}

	moveStart(e, media, elt) {
		this.paint = true
		// Coordonnées de la souris :
		if (media) {
			// Event mobile :

			// Coordonnées du doigt :
			this.cursorX = (e.pageX - elt.offsetLeft)
			this.cursorY = (e.pageY - elt.offsetTop)
			
			
			
		} else {
			// Coordonnées de la souris :
			
			this.cursorX = (e.pageX - elt.offsetLeft)
			this.cursorY = (e.pageY - elt.offsetTop)
			
			
		}
		this.draw()
	}

	// fonction pour effacer le dessin
	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.cursorX = ''
		this.cursorY = ''
	}

	// Prépare le canvas en fonction des événements
	setupCanvas() {
		this.context.lineJoin = "round"

		// Click souris enfoncé sur le canvas
		this.canvas.addEventListener('mousedown', (e) => {
			this.moveStart(e, false, this.canvas)
		})

		// Mouvement de la souris sur le canvas
		this.canvas.addEventListener('mousemove', (e) => {
			this.move(e, false, this.canvas)
		})

		// Relachement du Click sur le canvas 
		this.canvas.addEventListener('mouseup', (e) => {
			this.moveEnd()
		})

		// Clear canvas :
		this.btnReset.addEventListener('click', (e) => {
			this.clear()
		})

		// appuie avec le doigt 
		this.canvas.addEventListener('touchstart', (e) => {
			this.moveStart(e, true, this.canvas)
			document.querySelector('body').classList.add('sign')
		})

		// Relachement du doigt 
		this.canvas.addEventListener('touchend', (e) => {
			this.moveEnd()
			document.querySelector('body').classList.remove('sign')
		})

		// deplacement du doigt 
		this.canvas.addEventListener('touchmove', (e) => {
			this.move(e, true, this.canvas)
		})
	}


}
