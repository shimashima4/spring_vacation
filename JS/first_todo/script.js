const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const todos = JSON.parse(localStorage.getItem("todos"));
// ↑キー名を指定して取得する
// こちらも文字列で取得されると扱いづらいので
// JSON.parseで元の配列型を保持

if (todos) {
  todos.forEach((todosItem) => {
    add(todosItem);
  });
}

// enterが押されたときのイベント
form.addEventListener("submit", (event) => {
  // リロードされてしまうのでそれを阻止
  event.preventDefault();
  // 一度inputのvalueを代入する
  add();
});

function add(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo;
  }
  if (todoText && todoText.match(/\S/g)) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    // 右クリックのイベント
    li.addEventListener("contextmenu", function (event) {
      // 普通右クリックするとメニュータブが出てくるがそれを無効化
      event.preventDefault();
      li.remove();
      saveData();
    });

    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
    });
    ul.appendChild(li);
    // inputの中身を空にしておく
    input.value = "";
    saveData();
  }
}

// 入力したデータを配列にまとめ、ローカルストレージへ
function saveData() {
  // 場にあるliを取得
  const listItems = document.querySelectorAll("li");
  const listArray = [];
  listItems.forEach((list) => {
    listArray.push(list.innerText);
  });
  // ローカルストレージは文字列形式で保存してしまう
  // JSON形式に変換する(JSON.stringify)
  localStorage.setItem("todos", JSON.stringify(listArray));
  // keyはlistArray
}

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
