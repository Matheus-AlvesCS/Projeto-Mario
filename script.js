const mainBtn = document.querySelector(".main-button");
const form = document.querySelector("#form");
const formMask = document.querySelector(".form-mask");
const contactLink = document.querySelector("#contact-us");

function showForm() {
  form.classList.add("form-active");
  formMask.classList.add("mask-active");
}

mainBtn.addEventListener("click", showForm);
contactLink.addEventListener("click", showForm);
formMask.addEventListener("click", () => {
  form.classList.remove("form-active");
  formMask.classList.remove("mask-active");
});
