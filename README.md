![PuzzlePicture](images/puzzleBanner.jpg "Puzzle Banner" width="100%")

# Drag and Drop Example
## Natasha Adler

This Assignment was based off of a simple puzzle game. While most features were working there were two significant ones that still needed to be fixed.

<ul>
  <li> Problem #1 – Multiple puzzle pieces can be dropped in one area and cannot be retrieved unless page is refreshed.</li>

  <li>Problem #2 – When Switching between different puzzles(4), the pieces do not return to the side bar and “refresh”. </li>
</ul>


## Requirments

Use a modern Browser such as [Firefox](https://www.mozilla.org/en-CA/firefox/new/) or [Chrome](https://www.google.ca/chrome/?brand=CHBD&gclsrc=aw.ds&&gclid=CjwKCAjw29vsBRAuEiwA9s-0B6zIdw5_qV4ETvbcN4042nlkfk9YggWT_DI1vM4UH4vWB2I0pdWUdhoCBWoQAvD_BwE). Avoid internet exploror. You will need git installed locally as well as a good code editor such as [Sublime](https://www.sublimetext.com) or [Atom](https://atom.io/).This site is built with HTML, CSS and JS.

### Built With

<ul>
	<li>Html</li>
	<li>CSS</li>
	<li>JS</li>
</ul>

## My Solution

Solution #1 – This had to do with the drop function. There was no limit on how many pieces could be dropped into each box on the puzzle-board. I made an if statement using length, stating that if there was >= 1 piece on the box, to then return it back to where the pieces are held (puzzle-pieces).  

function allowDrop(event) {
		if (this.children.length >= 1) {
			return;
		}

Solution #2 –  This had to do with the puzzle pieces and moving them back into their parent div. I used append child to tell the puzzle pieces to move from its current position to the parent div once a new puzzle board had been clicked.

let puzzlePieceBoard = document.querySelector(".puzzle-pieces");
      puzzlePieceBoard.appendChild(puzzlePiece[index]);


## Licence

MIT
