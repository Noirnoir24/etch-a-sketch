const canvas= document.querySelector("#container");

for(i=0; i<256; i++) {
    const grid= document.createElement("div");
    grid.classList.add("square")
    canvas.appendChild(grid)
}

const everySquare= document.querySelectorAll(".square")

for (let square of everySquare) {     
    square.addEventListener("mouseover", () => {         
        square.style.backgroundColor = "red";      
    }); 
}