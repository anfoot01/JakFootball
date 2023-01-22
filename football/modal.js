let modal = document.getElementById("overlay");
let modalStyle = modal.style;

function openModal() {
  
  modal.style.visibility = "visible";
  modal.style.opacity = "9";
  modal.style.transition = "0.5s";
}

function closeModal() {
  modal.style.visibility = "unvisible";
  modal.style.opacity = "0";
}

