//your code here
let draggedDiv = null;

const images = document.querySelectorAll(".image");

// Add draggable events to each image box
images.forEach((div) => {
    div.addEventListener("dragstart", (e) => {
        draggedDiv = e.target;     // store the dragged element
        e.target.classList.add("selected");
    });

    div.addEventListener("dragend", (e) => {
        e.target.classList.remove("selected");
    });

    div.addEventListener("dragover", (e) => {
        e.preventDefault(); // allow dropping
    });

    div.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedDiv === e.target) return;

        // Swap backgrounds
        let temp = draggedDiv.style.backgroundImage;
        draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = temp;
    });
});
