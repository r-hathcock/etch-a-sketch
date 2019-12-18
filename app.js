

function changeColor() {
    alert("test");
}

function createCanvas() {
    for (let i = 0; i < 480; i++)
    {
        var node = document.createElement("DIV");
        node.id = "div" + (i + 1);
        node.className = "node";
        node.onmouseover = "changeColor()";
        document.getElementById("etch-container").appendChild(node);
    }
}


createCanvas();
var x = document.getElementsByClassName("node");
x.addEventListener("mouseover", changeColor());
 