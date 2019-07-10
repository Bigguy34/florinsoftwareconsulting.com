function logoRotate(section, state) {
    if (state.current == 'home') {
      var logo = document.getElementById('logo');
      logo.classList.add(`logo-${section}`)
      logo.classList.remove('logo-home')
      logo.classList.remove(`logo-${state.current}-home`)
    } else {
      var logo = document.getElementById('logo');
      logo.classList.remove(`logo-${section}`);
      logo.classList.add(`logo-${state.current}-home`)
    }
}