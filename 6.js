let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList ==="y"){
    let numItems = parseInt(prompt("How many items do you want to add?"), 10);
    let groceryList = [] ;
    
    for (let i = 0; i < numItems; i++){
        let item = prompt('Enter item ${i + 1}:');
        groceryList.push(item);
    }

    let groceryListStored = [...groceryList].sort();
    let groceryListReversed = [...groceryListSorted].reserse();

    alert('Original List: ${groceryList.join(",")}\nSorted List: ${groceryListSorted.join(",")}\nReversed List: ${grroceryListReversed.join(",")}');
} else {
    alert("Grocery list creation canceled.");
}