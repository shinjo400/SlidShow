let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.jaaf.or.jp/fan/player/img/men019/1.jpg",
"https://www.jiji.com/news/handmade/special/feature/v2/photos/100m_sub10/00500489.jpg",
"https://www.jaaf.or.jp/files/player/image/1.jpg",
"https://www.jaaf.or.jp/files/player/image/53.jpg",
"https://2cg58rus.user.webaccel.jp/files/rcms_conv_webp/files/topics/17617_ext_04_0_L.jpg_1592322628.webp?v=1614540346"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
