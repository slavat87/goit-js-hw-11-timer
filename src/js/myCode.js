const refs = {
  body: document.querySelectorAll('body'),
  days: document.querySelector("span[data-value='days']"),
  hours: document.querySelector("span[data-value='hours']"),
  minutes: document.querySelector("span[data-value='mins']"),
  seconds: document.querySelector("span[data-value='secs']"),
};

function count() {
  setInterval(() => {
    const targetDate = new Date('Dec 20, 2020');
    let time = targetDate - Date.now();
    const times = getTimeComponents(time);
    updateClock(times);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function updateClock({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.seconds.textContent = secs;
}
count();


/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
