<template>
  <div id="app">
    <div class="container-fluid" >
      <div class="row header">
        <div class="col-md-2"></div>
        <div class="col-md-8">
        <Header/>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row header">
        <div class="col-md-12">
          <HeaderNavBar/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <LeftNavBar/>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-2">.col-md-1</div>
      </div>
      <div class="row">
        <div class="col-md-3">.col-md-3</div>
        <div class="col-md-8">.col-md-8</div>
        <div class="col-md-1">.col-md-1</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import HeaderNavBar from './components/HeaderNavBar'
import LeftNavBar from './components/LeftNavBar'
export default {
  name: 'App',
  components: {
    Header,
    HeaderNavBar,
    LeftNavBar
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
