// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const playSoundButton = document.querySelector('button');
  // const jsConfetti = new JSConfetti();
  const jsConfetti = new window.JSConfetti();

  // add event listeners
  hornSelect.addEventListener('change', function() {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = `${horn} image`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playSoundButton.addEventListener('click', function() {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}