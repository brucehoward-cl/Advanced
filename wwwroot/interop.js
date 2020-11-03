function addTableRows(colCount, elem) {
    //let elem = document.querySelector("tbody");
    let row = document.createElement("tr");
    elem.parentNode.insertBefore(row, elem);
    elem.append(row);
    for (let i = 0; i < colCount; i++) {
        let cell = document.createElement("td");
        cell.innerText = "New Elements"
        row.append(cell);
    }
}

//function createToggleButton() {
//    let sibling = document.querySelector("button:last-of-type"); //this button not available until after Blazor has rendered content
//    let button = document.createElement("button");
//    button.classList.add("btn", "btn-secondary", "btn-block");
//    button.innerText = "JS Toggle";
//    sibling.parentNode.insertBefore(button, sibling.nextSibling);
//    button.onclick = () => DotNet.invokeMethodAsync("Advanced", "ToggleEnabled");  //arguments are name of assembly, and name of static method
//}  //this was used before the ability to call a C# function was added


function createToggleButton(toggleServiceRef) {
    let sibling = document.querySelector("button:last-of-type");
    let button = document.createElement("button");
    button.classList.add("btn", "btn-secondary", "btn-block");
    button.innerText = "JS Toggle";
    sibling.parentNode.insertBefore(button, sibling.nextSibling);
    button.onclick = () => toggleServiceRef.invokeMethodAsync("ToggleComponents");
}



