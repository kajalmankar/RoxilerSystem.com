document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = this.textContent === 'ON/OFF' ? 'OFF/ON' : 'ON/OFF';
    });
});

document.querySelectorAll('.speed-slider, .temp-slider, .brightness-slider').forEach(slider => {
    slider.addEventListener('input', function() {
        console.log(`${this.parentElement.querySelector('h2').textContent} set to ${this.value}`);
    });
});

document.querySelectorAll('.color-picker').forEach(picker => {
    picker.addEventListener('input', function() {
        console.log(`Color for ${this.parentElement.querySelector('h2').textContent} changed to ${this.value}`);
    });
});