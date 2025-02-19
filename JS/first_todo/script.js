const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
// enterが押されたときのイベント
form.addEventListener("submit", (event) => {
  // 一度inputのvalueを代入する
  event.preventDefault();
  let todoText = input.value;
  if (todoText && todoText.match(/\S/g)) {
    add();
  }
});

const add = () => {
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  // inputの中身を空にしておく
  input.value = "";
  saveData();
};

// 入力したデータを配列にまとめる
const saveData = () => {
  const listItems = document.querySelectorAll("li");
  const listArray = [];
  listItems.forEach((list) => {
    listArray.push(list.innerText);
    console.log(listArray);
  });
};

// form上でenterを押すとページでリロードのイベントがされてしまう。
// それを止めるために引数eventを設定する

// event.preventDefault()はメソッドの一つ。
// ブラウザデフォルトのイベントを発生させない。

// 中身が空かの判定を文字数で見ている(.length)
// でも真偽値（true）でできてしまうのでそれでやる

// matchは文字データを判定する?
// \Sは空白などを空文字として扱う(空文字以外を判定)
// おそらく、\だけではダメなので/ ** /gと書き判定させる

// リロードするとデータが消えるので、ローカルストレージに残す
