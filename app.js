import * as mm from '@magenta/music';

const music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/multitrack_med');
// change music_vae URL to trained model's MAG bundle

const vaePlayer = new mm.Player();
music_vae.initialize();

import {
  MDCRipple
} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

document.querySelector('#play').addEventListener('click', () => {
  console.log('play');
  vaePlayer.resumeContext();
  vaePlayer.resume();
  music_vae
    .sample(1, 80)
    .then((sample) => vaePlayer.start(sample[0]));
  console.log(vaePlayer.isPlaying());
});
