// オブジェクト
const metaX = () => {
  let _level = "50";
  return {
    level() {
      return _level;
    },
  };
};
console.log(`レベル：${metaX().level()}`);
