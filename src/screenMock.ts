const screens = [
  document.querySelector("#screen1")!,
  document.querySelector("#screen2")!,
];

let currentScreen: 0 | 1 = 0

window.addEventListener("message", event => {
  currentScreen = (currentScreen + 1) % 2;
  screens[currentScreen].innerHTML = event.data;
  screens.forEach((s) => s.classList.toggle("shown"));

  const hiding = screens[1 - currentScreen];
  hiding.classList.add("hiding");
  setTimeout(() => {
    hiding.classList.remove("hiding");
  }, 1000);
})
