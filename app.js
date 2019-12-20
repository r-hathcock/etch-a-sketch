etch();

function etch() {
    createCanvas();

    var clrBtn = document.getElementById("clr-btn");
    clrBtn.onclick = () => {
    for (let i = 0; i < 3072; i++)
    {
        var currentNode = document.getElementById("div" + (i + 1));
        currentNode.style.backgroundColor = 'white';
    }}
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

    document.addEventListener('mouseover', function(e) {
        if(e.target.className == "node")
            e.target.style.backgroundColor = 'black';
    });
}




 