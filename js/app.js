(() => {
	// set up the puzzle pieces and boards

	//buttons at the bottom of the page
	const navButton = document.querySelectorAll("#buttonHolder img");

	function changeImageSet(){
		//cange the thumbnail image s on the left to match the button images
		//set a background image on the drop xone container
		debugger;
	}

	// add some event handling for the new navButtons
	navButton.forEach(button => button.addEventListener("click", changeImageSet))
})();
