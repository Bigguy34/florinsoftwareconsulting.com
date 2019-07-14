function buttonShift(section, state) {
  if (state.current == 'home') {
    var contactButton = document.getElementById(`${section}Button`);
    if (contactButton.classList.contains(`${section}-button-margin`)) {
      contactButton.classList.remove(`${section}-button-margin`)
    } 
    if (contactButton.classList.contains(`${section}-section-button-home`)) {
      contactButton.classList.remove(`${section}-section-button-home`)
    }
    contactButton.classList.add(`${section}-section-button-shift`)
  } else {
    var contactButton = document.getElementById(`${section}Button`);
    contactButton.classList.add(`${section}-section-button-home`);
    contactButton.classList.remove(`${section}-section-button-shift`);
  }
}