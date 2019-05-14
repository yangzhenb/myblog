<template>
<div>
         <ArticleDes></ArticleDes> 
         <ArticleDes></ArticleDes> 
         <ArticleDes></ArticleDes> 
         <ArticleDes></ArticleDes> 
</div>
</template>
<script>
import ArticleDes from '../components/ArticleDescribe'
export default {
  data(){
    return {
      value: ''
    }
  },
  components: {
    ArticleDes
  }
}
</script>
<style>
</style>
