// content_script.js
// makecode.microbit.org/#editor を子供が読める日本語に変換する

let KANTAN_JA_REPLACE_TEXT = [
  ["基本", "きほん"],
  ["入力", "にゅうりょく"],
  ["音楽", "おんがく"],
  ["LED", "ライト"],
  ["無線", "つうしん"],
  ["論理", "せいぎょ"],
  ["変数", "へんすう"],
  ["計算", "けいさん"],
  ["拡張機能", "ほかのきのう"],
  ["点灯", "つける"],
  ["反転", "はんてん"],
  ["消灯", "けす"],
  ["棒グラフ", "ぼうぐらふ"],
  ["最大値", "さいだいち"],
  ["設定", "せってい"],
  ["送信", "そうしん"],
  ["文字列", "もじのならび"],
  ["画面", "がめん"],
  ["表示", "ひょうじ"],
  ["最初", "はじめ"],
  ["信号強度", "しんごうの強さ"],
  ["鳴", "な"],
  ["停止する", "とめる"],
  ["繰り返し", "くりかえし"],
  ["配列", "はいれつ"],
  ["秒", "びょう"],
  ["終わる", "おわる"],
  ["足し算", "たしざん"],
  ["引き算", "ひきざん"],
  ["掛け算", "かけざん"],
  ["割り算", "わりざん"],
  ["の余り", "のこり"],
  ["小さい方", "ちいさい"],
  ["大きい方", "おおきいほう"],
  ["の絶対値", "ぜったいち"],
  ["平方根", "へいほうこん"],
  ["小数点以下四捨五入", "しょうすういか"],
  ["四捨五入", "ししゃごにゅう"],
  ["乱数", "らんすう"],
  ["範囲制限", "はんいをきめる"],
  ["数値", "すうじ"],
  ["真ん中","まんなか"],
  ["真", "あってる"],
  ["偽", "ちがう"],
  ["端子", "ピン"],
  ["加速度", "ゆれ"],
  ["方角", "むき"],
  ["温度", "おんど"],
  ["押","お"]
]

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    KANTAN_JA_REPLACE_TEXT.forEach((pair) => {
      node.textContent = node.textContent.replace(pair[0], pair[1]);
    });
  } else {
    node.childNodes.forEach(replaceText);
  }
}

const observer = new MutationObserver(records => {
  replaceText(document.body);
})
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
});