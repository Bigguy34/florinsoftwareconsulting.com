function servicesRotate(section, state) {
  if (state.current == 'home') {
    var aboutButton = document.getElementById('servicesButton');
    if (aboutButton.classList.contains('services-button-margin')) {
      aboutButton.classList.remove('services-button-margin')
    } 
    if (aboutButton.classList.contains('services-section-button-home')) {
      aboutButton.classList.remove('services-section-button-home')
    }
    aboutButton.classList.add('services-section-button-shift')
  } else {
    var aboutButton = document.getElementById('servicesButton');
    aboutButton.classList.add('services-section-button-home');
    aboutButton.classList.remove('services-section-button-shift');
  }
}