const canvas= document.querySelector("#container");

for(i=0; i<256; i++) {
    const grid= document.createElement("div");
    grid.classList.add("square")
    canvas.appendChild(grid)
}

let oldSquares= document.querySelectorAll(".square")

for (let square of oldSquares) {     
    square.addEventListener("mouseover", () => {         
        square.style.backgroundColor = "red";      
    }); 
}



const button= document.querySelector("#changeSize")

button.addEventListener("click", () => {
    let dimension= prompt("How many squares per side? (0-100)");
    while(dimension>100 || dimension<=0) {dimension= prompt("How many squares per side? (1-100)");}
    let amountOfSquares= dimension*dimension
    
    for(let square of oldSquares) {
        canvas.removeChild(square)
    }

    let size= 400/dimension;

    for(i=0; i<amountOfSquares; i++) {
        const grid= document.createElement("div");
        grid.setAttribute('style', `
            width: ${size}px; 
            height: ${size}px; 
            box-sizing: border-box;
            border: 1px solid #ddd;
            background-color: lightgray;
        `);
        grid.classList.add("square")
        canvas.appendChild(grid)
    }

    let newSquares= document.querySelectorAll(".square")

    for (let square of newSquares) {     
        square.addEventListener("mouseover", () => {         
            square.style.backgroundColor = "red";      
        }); 
    }

    oldSquares=newSquares

})


