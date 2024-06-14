// Countdown timer function
function countdownTimer() {
    const countDate = new Date('June 17, 2024 00:00:00').getTime(); // Change to your desired date and time

    function calculateTime() {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap <= 0) {
            // Timer expired logic if needed
            return;
        }

        const seconds = Math.floor((gap % (1000 * 60)) / 1000);
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }

    calculateTime();

    setInterval(calculateTime, 1000); // Update every second
}

// Call the countdown timer function
countdownTimer();
