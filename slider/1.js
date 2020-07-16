let left = 0;
let timer;
autoSlider();

function autoSlider() {
  timer = setTimeout(function() {
    let line = document.getElementById('line');
    left = left - 256;
    if (left < -768) {
      left = 0;
      clearTimeout(timer);
    }
    line.style.left = left + 'px';
    autoSlider();
  }, 1000);
}
