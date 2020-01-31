(() => {
	// set up the puzzle pieces and boards

	//buttons at the bottom of the page
	const navButton = document.querySelectorAll("#buttonHolder img");
				puzzleBoard = document.querySelector(".puzzle-board");
				puzzlePiece = document.querySelectorAll(".puzzle-pieces img");

				//store the image names here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet(){
		//change the thumbnail images on the left to match the button images
		//piece is a temperary variable & index is related to numbers
		//make sure you index your images - makes it a lot easier to work with
		pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`)
		//set a background image on the drop xone container
		//style.backgroud to mutate the background
		//`back tick` - pass through variable without having to declare them
		//dataset.puzzleindex relates to line 34-37 in html
		puzzleBoard.style.backgroundImage =`url(images/backGround${this.dataset.puzzleindex}.jpg)`
	}

	// add some event handling for the new navButtons
	navButton.forEach(button => button.addEventListener("click", changeImageSet))
})();
