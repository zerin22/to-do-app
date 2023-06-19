const listContainer = document.getElementById("list-container");

function addTask(){
    let li = document.createElement("li");
    const inputValue = document.getElementById("input-box").value;
    const addValue = document.createTextNode(inputValue);
    li.appendChild(addValue);

    if(inputValue === ''){
        alert("Please add something")
    }else{
        document.getElementById("list-container").appendChild(li);
    }

    document.getElementById("input-box").value = "";


    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close";
    li.appendChild(span);

}