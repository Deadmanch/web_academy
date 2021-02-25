const lights = document.querySelectorAll('.light');
let activeLightIndex = 0;

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

setInterval(() => {
toggleOff()
if(activeLightIndex+1 < lights.length) {
    activeLightIndex++;
}else {
    activeLightIndex = 0;
}
lights[activeLightIndex].classList.add('light_active')

},2000);