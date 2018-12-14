const playerHelper = {
  updateSource(player, src) {
    player.src = src;
  },
  attachMusicToPlayer(music, player) {
    if (!player) {
      return;
    }
    player.readyState ? (music.maxTime = player.duration) : "";
    music.isPlay = !player.paused;
    music.currentTime = player.currentTime;
  },
  attachVolumeToPlayer(volume, player) {
    player.volume = volume / 100;
  },
  playMusic(music, player) {
    player.paused ? player.play() : player.pause();
    music.isPlay = !player.paused;
  },
  formatTime(time) {
    let intTime = parseInt(time);
    let min = parseInt(intTime / 60);
    let sec = parseInt(intTime % 60);
    return (
      (min < 10 ? "0" : "") +
      parseInt(intTime / 60) +
      ":" +
      (sec < 10 ? "0" : "") +
      parseInt(intTime % 60)
    );
  }
};

export default playerHelper;
