<template>
  <div id="app">
    <div class="el-row">
      <el-col :span="14" :offset="5">
        <el-input placeholder="请输入内容" class="searchInput"></el-input>
      </el-col>
    </div>
    <div class="el-row">
      <el-col :span="14" :offset="5">
      <img class="profile" src="https://p1.music.126.net/cd9tDyVMq7zzYFbkr0gZcw==/2885118513459477.jpg" />
      </el-col>
    </div>
    <div>
    <Player />
    </div>
  </div>
</template>

<script>
import Player from './components/Player'

export default {
  name: 'App',
  components: {
    Player
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  
}

.profile, .searchInput {
  width: 50%;
}

</style>
