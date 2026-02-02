const toggle = document.getElementById("themeToggle");
const body = document.body;

// default dark
toggle.checked = false;

toggle.addEventListener("change", () => {
  body.setAttribute(
    "data-theme",
    toggle.checked ? "light" : "dark"
  );
});
