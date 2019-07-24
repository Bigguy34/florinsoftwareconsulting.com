function logoRotate(section, state) {
    if (state.current == 'home') {
      var logo = document.getElementById('logo');
      logo.classList.add(`logo-${section}`)
      logo.classList.remove('logo-home')
      if (logo.classList.contains(`logo-${state.previous}-home`)) {
        logo.classList.remove(`logo-${state.previous}-home`)
      }
    } else {
      var logo = document.getElementById('logo');
      logo.classList.remove(`logo-${section}`);
      logo.classList.add(`logo-${state.current}-home`)
    }
}