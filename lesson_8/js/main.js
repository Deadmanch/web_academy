(() => {
    function lighter(wrapper) {
      const elements = wrapper.querySelectorAll('.light');
      const ActiveClassName = 'light_active';
  
      function toggleOff() {
        for (const element of elements) {
          element.classList.remove(ActiveClassName);
        }
      }
  
      function toggleOn() {
        toggleOff();
        this.classList.add(ActiveClassName);
      }
  
      for (const element of elements) {
        element.addEventListener('click', toggleOn);
      }
    }
    const lighters = document.querySelectorAll('#traffic-light');

  for (const el of lighters) {
    lighter(el);
}
})();
