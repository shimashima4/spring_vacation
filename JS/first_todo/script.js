const form = document.getElementById("form");
const input = document.getElementById("input");
form.addEventListener("submit", (event) => {
  console.log(input.value);
});

// form上でenterを押すとページがリロードされてしまう。
// それを止めるために引数eventを設定する
