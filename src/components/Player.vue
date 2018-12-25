<template>
  <div>
    <el-button @click="attachMusicSrc()">播放指定音乐</el-button>
    <el-row>
      <el-col :span="4">
        <el-popover placement="top-start" trigger="hover">
          <div style="text-align: center">
            <el-progress color="#67C23A" type="circle" :percentage="formattedVolume"></el-progress><br>
            <el-button @click="changeVolume(-10)" icon="el-icon-minus" circle></el-button>
            <el-button @click="changeVolume(10)" icon="el-icon-plus" circle></el-button>
          </div>
          <el-button @click="play" id="play" slot="reference" :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'" circle></el-button>
        </el-popover>
      </el-col>
      <el-col :span="14" style="padding-left: 20px">
        <el-slider @change="changeTime" :format-tooltip="formatTime" :max="music.maxTime" v-model="music.currentTime" style="width: 100%;"></el-slider>
      </el-col>
      <el-col :span="6" style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px">
        {{formatTime(music.currentTime)}}/{{formatTime(music.maxTime)}}
      </el-col>
    </el-row>
    <audio ref="player" loop autoplay>
      <source src="data.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
import helper from '@/libs/helper';
export default {
  name: 'player',
  data(){
    return {
      music:{
        isPlay:false,
        currentTime:0,
        maxTime:0,
        volume:100
      },
      keywords:'',
      currentSrc: ''
    }
  },
  computed: {
    formattedVolume () {
      if(this.music.volume > 100) {  this.music.volume = 100 };
      if(this.music.volume < 0) { this.music.volume =  0 };
      return this.music.volume;

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.attachMusicSrc();
      setInterval(this.playerInit, 1000);
    })
  },
  methods:{
    attachMusicSrc() {
      this.currentSrc = 'https://music.163.com/song/media/outer/url?id=30987293.mp3';
      helper.updateSource(this.$refs.player,this.currentSrc);
      
    },
    playerInit(){
      helper.attachMusicToPlayer(this.music,this.$refs.player);
      
    },
    play(){
      helper.playMusic(this.music, this.$refs.player);
      this.$nextTick(()=>{
        document.getElementById('play').blur()
      })
    },
    changeTime(time){
      this.$refs.music.currentTime = time
    },
    changeVolume(v){
      this.music.volume += v
      helper.attachVolumeToPlayer(this.formattedVolume, this.$refs.player);
    },
    formatTime(time){
      return helper.formatTime(time);
    }
  }  
}
</script>