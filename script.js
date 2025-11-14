let dragged = null;

const boxes = document.querySelectorAll(".image");

boxes.forEach((box) => {
  box.addEventListener("dragstart", (e) => {
    dragged = e.target.querySelector("img");
  });

  box.addEventListener("dragover", (e) => e.preventDefault());

  box.addEventListener("drop", (e) => {
    e.preventDefault();

    let droppedImg = e.target.querySelector("img");

    // Swap src
    let temp = dragged.src;
    dragged.src = droppedImg.src;
    droppedImg.src = temp;
  });
});
