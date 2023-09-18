//your code here!

document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");
    let itemCount = 10; // The initial number of list items

    // Function to add more list items
    function addMoreItems() {
        const itemsToAdd = 2;
        for (let i = 1; i <= itemsToAdd; i++) {
            itemCount++;
            const listItem = document.createElement("li");
            listItem.textContent = "List Item " + itemCount;
            list.appendChild(listItem);
        }
    }

    // Check if the user has scrolled to the end of the list
    list.addEventListener("scroll", function () {
        const isAtEnd = list.scrollTop + list.clientHeight >= list.scrollHeight;

        if (isAtEnd) {
            addMoreItems();
        }
    });

    // Initially add 10 list items
    addMoreItems();
});
