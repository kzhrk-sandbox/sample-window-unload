import YoutubePlayer from './modules/youtube';

let hidden;
let visibilityChange;

if (typeof document.hidden !== "undefined") { // Opera 12.10 や Firefox 18 以降でサポート
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

window.addEventListener('load', ()=>{

  const youtubePlayer = new YoutubePlayer();

  document.addEventListener(visibilityChange, ()=>{
    if (document[hidden]) {
      youtubePlayer.player.stopVideo();
    } else {
      youtubePlayer.player.playVideo();
    }
  }, false);

}, false);

