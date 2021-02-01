'use strict';
const moreBtn = document.querySelector('.video_info .metadata .titleAndBtn .moreBtn');
const title = document.querySelector('.video_info .metadata .titleAndBtn .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});