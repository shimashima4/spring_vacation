let _level = "99";
// オブジェクト
const metaX = () => {
  let _level = "60";
  return {
    level() {
      return _level;
    },
  };
};

// 即時関数
const metaXbeta = (() => {
  let _level = "1";
  return {
    level() {
      return _level;
    },
  };
})();

// ここで即時関数を呼び出してみる
const a = {
  name: "taro",
  age: 0,
  strong: metaXbeta.level(),
};

// アロー関数じゃない方
const metaXalpha = function () {
  let _level = "1";
  return {
    level() {
      return _level;
    },
  };
};

console.log(`レベル：${metaX().level()}`);
console.log(`レベル：${a.strong}`);
console.log(`レベル：${metaXalpha().level()}`);
console.log(`最大レベル：${_level}`);
// 同じ名前の変数を定義しているが、
// スコープが関数内だけなので問題ない
