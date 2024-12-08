// Example artemis data
const spaceshipData = [
	{ x: 100, y: 250 }, // Position of earth.png
	{ x: 1000, y: 150 }, // Position of moon.png
];

// Ship and slider elements
const ship = document.getElementById("ship");
const slider = document.getElementById("distanceSlider");

// Interpolate between two points
function interpolate(start, end, factor) {
	return start + (end - start) * factor;
}

// Make the spaceship move smoothly
function updateShipPosition(value) {
	const maxIndex = spaceshipData.length - 1;
	const scaledValue = (value / 100) * maxIndex;
	const index = Math.floor(scaledValue);
	const nextIndex = Math.min(index + 1, maxIndex);
	const factor = scaledValue - index;

	// Interpolate between two points (again)
	const { x: x1, y: y1 } = spaceshipData[index];
	const { x: x2, y: y2 } = spaceshipData[nextIndex];
	const x = interpolate(x1, x2, factor);
	const y = interpolate(y1, y2, factor);

	// TODO - Update the ship's CSS position
	ship.style.left = `${x}px`;
	ship.style.top = `${y}px`;
}

// Event listener for the slider
slider.addEventListener("input", (e) => {
	const sliderValue = e.target.value; // Get the slider's current value
	updateShipPosition(sliderValue); // Update the ship's position
});

// Start position when page loads
updateShipPosition(slider.value);
