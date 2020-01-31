etch();

function etch() {
    createCanvas();

    var colorChange = 'black';
    document.addEventListener('mouseover', function(e) {
        if(e.target.className == "node")
            e.target.style.backgroundColor = colorChange;
    });

    var clrBtn = document.getElementById("clr-btn");
    clrBtn.onclick = () => {
    for (let i = 0; i < 3072; i++)
    {
        var currentNode = document.getElementById("div" + (i + 1));
        currentNode.style.backgroundColor = 'white';
    }}

    var colorBtn = document.getElementById("color-btn");
    colorBtn.onclick = () => {
        switch(colorChange) {
            case 'black': {
                colorChange = 'yellow';
                break;
            }
            case 'yellow': {
                colorChange = 'blue';
                break;
            }
            case 'blue': {
                colorChange = 'red';
                break;
            }
            case 'red': {
                colorChange = 'green';
                break;
            }
            case 'green': {
                colorChange = 'black';
                break;
            }   
        }
    }
}

function createCanvas() {
    for (let i = 0; i < 3072; i++)
    {
        var node = document.createElement("DIV");
        node.id = "div" + (i + 1);
        node.className = "node";
        document.getElementById("etch-container").appendChild(node);
        node.style.backgroundColor = 'white';
    } 
}




 