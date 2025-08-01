document.addEventListener('DOMContentLoaded', function () {
	const logo = document.querySelector('.display-image')
	const onlyFansLink = document.getElementById('onlyfans-link')
	const onlyFansTrigger = document.getElementById('onlyfans-trigger')
	const onlyFansImages = document.getElementById('onlyfans-images')
	let audioPlayed = false

	// Toggle the OnlyFans block on double-click of logo
	if (logo && onlyFansLink) {
		logo.addEventListener('dblclick', function () {
			onlyFansLink.classList.toggle('hidden')
		})
	}

	// Show a random image from 1.jpg to 10.jpg when clicking OnlyFans
	if (onlyFansTrigger && onlyFansImages) {
		onlyFansTrigger.addEventListener('click', function () {
			// Clear existing image(s)
			onlyFansImages.innerHTML = ''

			// Generate random number between 1 and 49
			const randomNumber = Math.floor(Math.random() * 49) + 1

			// Create a new image element
			const img = document.createElement('img')
			img.src = `assets/galery/${randomNumber}.jpg`
			img.alt = `OnlyFans image ${randomNumber}`
			img.className = 'onlyfans-image'

			// Add image to container and show it
			onlyFansImages.appendChild(img)
			onlyFansImages.classList.remove('hidden')
			if (!audioPlayed) {
				const audio = new Audio('assets/sounds/music.mp3')
				audio.play().catch(err => {
					console.warn('Autoplay prevented:', err)
				})
				audioPlayed = true
			}
		})
	}
})
