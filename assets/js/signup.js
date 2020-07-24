document.querySelectorAll(".pa-eye").forEach((elt) => {
  elt.addEventListener("click", (e) => {
    e.target.classList.contains("fa-eye-slash")
      ? e.target.classList.remove("fa-eye-slash")
      : e.target.classList.add("fa-eye-slash");
    e.target.previousElementSibling.type === "text"
      ? e.target.previousElementSibling.setAttribute("type", "password")
      : e.target.previousElementSibling.setAttribute("type", "text");
  });
});
