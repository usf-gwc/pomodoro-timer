// Select elements from the DOM
const timerDisplay = document.getElementById('timer');  // Displays the timer
const startButton = document.getElementById('startButton');  // Start button
const stopButton = document.getElementById('stopButton');  // Stop button
const resetButton = document.getElementById('resetButton');  // Reset button

let countdown;
let minutes = 25;  // Default Pomodoro duration (in minutes)
let seconds = 0;
let isTimerRunning = false;  // Track if the timer is running

// Function to format time as MM:SS
function formatTime(mins, secs) {
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
}

// Function to update the timer display
function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(minutes, seconds);
}

