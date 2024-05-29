// TIME

let minutes = 15;
let seconds = 0;

function startTimer() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const countdown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdown);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    startTimer();
});

document.getElementById('use-coupon-button').addEventListener('click', () => {
    window.location.href = "backredirect.html";
});
