//board
let board ;
const rowCount = 21;
const columnCount = 19;
const tileSize = 32;
const boardWidth = columnCount*tileSize;
const boardHeight =  rowCount*tileSize;
let context;

//images
let blueGhostImage;
let pinkGhostImage;
let orangeGhostImage;
let redGhostImage;
let pacmanDownImage;
let pacmanUpImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function()
{
    board = document.getElementByID("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}

function loadImages()
{
    wallImage = new Image ();
    wallImage.src = "./wall.png";

    

}
