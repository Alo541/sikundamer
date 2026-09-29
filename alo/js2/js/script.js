
const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    hours = time.getHours() * 30,
    minutes = time.getMinutes() * 6,
    seconds = time.getSeconds() * 6;

  hour.style = `transform:rotate(${hours}deg); transition:1s linear;`;
  min.style = `transform:rotate(${minutes}deg); transition:1s linear; `;
  sec.style = `transform:rotate(${seconds}deg); transition:1s linear;`;
  hoursNumber.innerHTML =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  minutesNumber.innerHTML =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  setTimeout(() => clock(), 1000);
}

clock();


const links = document.querySelectorAll(".tabsItem");
const tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((link, i) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    links.forEach((link, i) => {
      link.classList.remove("active");
      tabs[i].classList.remove("active");
    });
    link.classList.add("active");
    tabs[i].classList.add("active");
  });
});

const hEl = document.getElementById('hours');
const mEl = document.getElementById('minutes');
const sEl = document.getElementById('seconds');
const btn = document.getElementById('start');

let total = 0;
let timer = null;

function render() {
  hEl.textContent = Math.floor(total / 3600);
  mEl.textContent = Math.floor((total % 3600) / 60);
  sEl.textContent = total % 60;
}
btn.addEventListener('click', () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    btn.textContent = 'START';
  } else {
    timer = setInterval(() => {
      total++;
      render();
    }, 1000);
    btn.textContent = 'STOP';
  }
})
