function countdownTimer() {
    const countDate = new Date('June 17, 2024 00:00:00').getTime(); // Change to your desired date and time

    function calculateTime() {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap <= 0) {
            // Timer expired logic
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';

            // Display the celebration GIF
            const gifContainer = document.querySelector('.countdown-section');
            const gif = document.createElement('img');
            gif.src = 'eid_adha.gif';
            gif.alt = 'Celebration GIF';
            gif.classList.add('celebration-gif');
            gifContainer.innerHTML = ''; // Clear the container
            gifContainer.appendChild(gif);

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

// Call the countdown timer function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', countdownTimer);
