let m = [];
let m1 = [99, 33, 'Hello'];
console.log(m1[2]);
m1[4] = 20;
m1[3] = 123;
// alert(m1.length);

// for (let i=0; i<m1.length; i++) {
//   document.getElementById('out').innerHTML += m1[i]+ '<br>'
// }

function masOut() {
  let p = document.getElementById('out');
  let str= '';
  for (let i = 0; i < m1.length; i++) {
    str += i +' --- ' + m1[i] + '<br>';
  }
  p.innerHTML = str;
}

masOut();

function p1() {
  let i1 = document.getElementById('i1').value;
  m1.push(i1);
  masOut();
}

function p2() {
  m1.pop();
  masOut();
}