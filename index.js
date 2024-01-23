const openBtn = document.querySelector(".open-modal-js");
const closeBtn = document.querySelector(".modal-btn-close");
const modalWindow = document.querySelector(".modal-js");

openBtn.addEventListener("click", openModal);

function openModal() {
  modalWindow.classList.remove("is-hidden");
}

closeBtn.addEventListener("click", () =>
  modalWindow.classList.add("is-hidden")
);
