function buttonShift(section, state) {
  if (state.current == 'home') {
    var button = document.getElementById(`${section}Button`);
    if (button.classList.contains(`${section}-button-margin`)) {
      button.classList.remove(`${section}-button-margin`)
    } 
    if (button.classList.contains(`${section}-section-button-home`)) {
      button.classList.remove(`${section}-section-button-home`)
    }
    button.classList.add(`${section}-section-button-shift`)
  } else {
    var button = document.getElementById(`${section}Button`);
    button.classList.add(`${section}-section-button-home`);
    button.classList.remove(`${section}-section-button-shift`);
  }
}