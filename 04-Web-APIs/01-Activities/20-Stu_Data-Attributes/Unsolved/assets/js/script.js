var container = document.querySelector('.container');

container.addEventListener('click', function (event) {
	// TODO: Complete function
	//this gets the element that was clicked
	var element = event.target;
	console.log(element);
	// I needed this info to get the data-state
	// console.log(element);
	// making sure it is a div inside the container
	// if (element.matches('div')) {
	// cool that matches can match html tags, classes, and ids
	if (element.matches('.box')) {
		// Get the current value of the image's data-state attribute
		var state = element.getAttribute('data-state');
		if (state === 'hidden') {
			element.dataset.number;
			var value = element.getAttribute('data-number');
			element.textContent = value;
			// the user can see the number after the line below runs
			element.setAttribute('data-state', 'visible');
		} else {
			element.textContent = '';
			// element.setAttribute('data-state', 'hidden');
		}
	}
});
// mdn .matches method
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
