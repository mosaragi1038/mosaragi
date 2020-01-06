// メニューボタンを押すとドロワーを表示する
function toggleNav() {
  var body = document.body;
  var Menu = document.getElementById('JsMenu');
  var blackBg = document.getElementById('JsBlackBg');

  Menu.addEventListener('click', function() {
    body.classList.toggle('NavOpen');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('NavOpen');
  });
}
toggleNav();

//スクロールすると色が変わる
window.addEventListener( "scroll", function() {
  var headerElement = document.getElementById( "Header" ) ; // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect() ; //
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 200) { // 変数yの値が0よりも
    headerElement.classList.remove('Hidden'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add('Hidden'); // そうでなければhiddensセレクタを追加する
  }
} ) ;

//スキルバー　スクロールすると色が変わる
window.addEventListener( "scroll", function() {
  var skillElement = document.getElementById( "Skill" ) ; // `#Skill`セレクタを取得
  var rect = skillElement.getBoundingClientRect() ; //
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 200) { // 変数yの値が0よりも
    skillElement.classList.add('Skill__Percent');
  } else {
    skillElement.classList.remove('Skill__Percent');
  }
} ) ;
