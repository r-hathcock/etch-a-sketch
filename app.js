for (let i = 0; i < 480; i++)
    {
        var node = document.createElement("DIV");
        node.id = "div" + (i + 1);
        node.className = "node";
        document.getElementById("etch-container").appendChild(node);
    }