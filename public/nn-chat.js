'use strict';
// ブラウザのスクロール位置自動復元を無効化
//＊教材では出てこないコード追加。ブラウザの標準機能である「スクロール位置の自動復元機能（Scroll Restoration）」が原因で先生の画面のように更新ボタンを押しても最下部スクロールができなかったため。
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// 一番下を表示
window.addEventListener('load', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

// エンターキー と Ctrlキー(Macの場合はCommandキー)を押していたら送信
const formElement = document.forms['message-form'];
const textareaElement = formElement.elements['content'];
textareaElement.addEventListener('keydown', (event) => {
  // 送信キーを押したら
  if (isPressedSubmitKey(event)) {
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElement.submit();
  }
});

// 送信キーを押しているか判定
function isPressedSubmitKey(event) {
  if (event.key !== 'Enter') {
    return false;
  }
  if (event.ctrlKey) {
    return true;
  }
  // MacのCommandキーはmetaKeyという名前
  if (event.metaKey) {
    return true;
  }
}

// ツールチップの有効化
const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerElements.forEach((tooltipTriggerElement) => {
  new bootstrap.Tooltip(tooltipTriggerElement);
});