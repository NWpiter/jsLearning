let prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
// tempOut = document.getElementById("temp-out");
// tempOut.innerHTML = prNum;
console.log(prNum);

function f1() {
  let num, out;


  num = document.getElementById("mynum").value;
  out = document.getElementById("out");

  if (num == prNum) {
    out.innerHTML = "Угадал, умник!";
  }
  else if (num > prNum) {
    out.innerHTML = "Число должно быть меньше";
  }
  else {
    out.innerHTML = "Число должно быть больше!";
  }
}

function f2() {
  let p;
  p = document.getElementById("bam");
  for (let i=1; i<=100; i++) {
    p.innerHTML += i + ' ';
  }
}