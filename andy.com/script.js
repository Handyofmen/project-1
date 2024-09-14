document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('passenger-count');
    let count = 0;

    const updateDisplay = () => {
        countDisplay.textContent = count;
    };

    document.getElementById('increase-btn').addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    document.getElementById('decrease-btn').addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    });

    // Initialize display
    updateDisplay();
});
