// set up variables for the modal and dialog
const openModalButton = document.querySelector("[data-open-modal]");
const closeModalButton = document.querySelector("[data-close-modal]");
const modalNode = document.querySelector("[data-modal]");
const openDialogButton = document.querySelector("[data-open-dialog]");
const closeDialogButton = document.querySelector("[data-cancel-dialog]");
const dialogNode = document.querySelector("[data-dialog]");

// open modal when clicking on open button
openModalButton.addEventListener("click", () => {
    modalNode.showModal();
});

// close modal when clicking on close button
closeModalButton.addEventListener("click", () => {
    modalNode.close();
});

// open dialog when clicking on open button
openDialogButton.addEventListener("click", () => {
    dialogNode.showModal();
});

// close modal when clicking outside of it
modalNode.addEventListener("click", (e) => {
    const modalDimensions = modalNode.getBoundingClientRect();

    if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
    ) {
        modalNode.close();
    }
});

// close dialog when clicking outside of it
dialogNode.addEventListener("click", (e) => {
    const dialogDimensions = dialogNode.getBoundingClientRect();

    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialogNode.close();
    }
});
