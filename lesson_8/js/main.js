const lights = document.querySelectorAll('.light');

const toggleOff = () => {
    for (let light of lights) {
        light.classList.remove('light_active');
    }
}

lights.forEach((light) => {
    light.addEventListener('click', () => {
        toggleOff();
        light.classList.add('light_active');
    })
});