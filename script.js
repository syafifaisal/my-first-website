// JavaScript membuatkan butang HTML boleh bertindak balas.
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");
const year = document.getElementById("year");

let clickCount = 0;

helloButton.addEventListener("click", () => {
  clickCount += 1;
  message.textContent = `🎉 Tahniah! Anda dah klik ${clickCount} kali. Inilah JavaScript berfungsi!`;
});

year.textContent = new Date().getFullYear();
