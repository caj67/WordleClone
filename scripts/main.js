

document.addEventListener("DOMContentLoaded", () => {
    createBoard();

    function createBoard(){
        const board = document.getElementById("board");
        for (let index = 0; index < 30; index++) {
            let box = document.createElement("div");
            box.setAttribute("id", index)
            box.classList.add("box");
            board.appendChild(box);
            
            
        }
        
    }
});