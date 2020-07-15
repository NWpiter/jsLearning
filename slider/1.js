document.getElementById('slider-left').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
  let line = document.getElementById('line');
  left = left - 256;
  if (left < -768) {
    left = 0;
  }
  line.style.left = left +'px';
}