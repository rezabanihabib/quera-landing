let themeBtn = document.getElementById("theme-btn");
let themeBtnsBox = document.getElementById("theme-btns-dropdown");
let lightThemeBtn = document.getElementById("light-theme-btn");
let darkThemeBtn = document.getElementById("dark-theme-btn");
let osThemeBtn = document.getElementById("os-theme-btn");

themeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  themeBtnsBox.classList.toggle("hidden");
});

document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
);

lightThemeBtn.addEventListener("click", () => {
  localStorage.theme = "light";
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  themeBtnsBox.classList.toggle("hidden");
});

darkThemeBtn.addEventListener("click", () => {
  localStorage.theme = "dark";
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  themeBtnsBox.classList.toggle("hidden");
});

osThemeBtn.addEventListener("click", () => {
  localStorage.removeItem("theme");
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
  themeBtnsBox.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!themeBtnsBox.contains(e.target) && !themeBtn.contains(e.target)) {
    themeBtnsBox.classList.add("hidden");
  }
});
