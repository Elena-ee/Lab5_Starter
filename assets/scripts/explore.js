// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textTyped = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const smilingFace = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  // add event listeners
  speakButton.addEventListener('click', function () {
    const selectedIndex = voiceSelect.value;
    const speech = new SpeechSynthesisUtterance(textTyped.value);
    speech.voice = voices[selectedIndex];

    speech.onstart = function () {
      smilingFace.src = 'assets/images/open.png';
    };

    speech.onend = function () {
      smilingFace.src = 'assets/images/smiling.png';
    };

    synth.speak(speech); 
  });
}