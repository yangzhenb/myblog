<template>
  <div id="app">
    <el-container>
      <el-header height="240px">
        <Header/>
        <HeaderNavBar/>
      </el-header>
      <el-aside>
        <LeftNavBar/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <hr/>
        <Foot></Foot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import HeaderNavBar from './components/HeaderNavBar'
import LeftNavBar from './components/LeftNavBar'
import Foot from './components/Foot'
export default {
  name: 'App',
  components: {
    Header,
    HeaderNavBar,
    LeftNavBar,
    Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfd9db;
  margin-top: 10px;
}
</style>
