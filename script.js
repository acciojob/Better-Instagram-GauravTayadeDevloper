let draggedImg = null;    // the <img> being dragged
let sourceContainer = null;

// select all drag elements
const draggables = document.querySelectorAll(".image");

draggables.forEach(box => {

  box.addEventListener("dragstart", (e) => {
    draggedImg = e.target.querySelector("img");
    sourceContainer = e.target;
    e.target.classList.add("selected");
  });

  box.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected");
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();

    const targetImg = e.target.querySelector("img");
    if (!targetImg || draggedImg === targetImg) return;

    // swap images
    let temp = draggedImg.src;
    draggedImg.src = targetImg.src;
    targetImg.src = temp;
  });
});
