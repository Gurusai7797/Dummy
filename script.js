const img = document.querySelector('img');
h1 = document.querySelector('h1');

let i = 400,
  j = 100;

function om() {
  if (i >= 100 && i <= 400) {
    i = i - 20;
    img.style.width = `${i}px`;
    if (i === 100) {
      j = 100;
    }
    // console.log('i' + i);
  } else if (i <= 100 && j <= 400) {
    j = j + 20;
    img.style.width = `${j}px`;
    if (j === 400) {
      i = 400;
    }
    // console.log('j' + j);
  }
}

h1.addEventListener('click', om);

// console.log(img);
