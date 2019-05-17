<template>
<div>
        <el-row type="flex" justify="center">
            <el-col :span="6"></el-col>
            <el-col :span="12">
          <mavon-editor style="min-height: 770px; min-width: 80%" v-model="value"/>
            </el-col>
            <el-col :span="6">
              <!-- <el-button type="primary" @click="cc">主要按钮</el-button> -->
            </el-col>
        </el-row>    
</div>
</template>
<script>

export default {
  data(){
    return {
      value: ''
    }
  },
  methods: {
    // 测试axios请求
    // cc(){
    //   const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    //   this.$http.get(url).then((response) => {
    //   // success callback
    //   console.log(response.data) //返回结果数据
    //   }, (response) => {}
    //   )
    // }
  }
}
</script>
<style>
</style>
