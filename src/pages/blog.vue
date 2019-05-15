<template>
<div>
        <el-row type="flex" justify="center">
            <el-col :span="6"></el-col>
            <el-col :span="12">
          <mavon-editor style="min-height: 770px; min-width: 80%" v-model="value"/>
            </el-col>
            <el-col :span="6"></el-col>
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
}
</script>
<style>
</style>
