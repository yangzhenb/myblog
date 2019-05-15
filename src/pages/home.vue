<template>
<div>
         <ArticleDes v-for="(article,index) in articles" :key="index" :article="article"></ArticleDes> 
</div>
</template>
<script>
import ArticleDes from '../components/ArticleDescribe'
export default {
  data(){
    return {
      articles: [
        {
          title: '标题1',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/1.gif'
        },
        {
          title: '标题2',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_01.png'
        },
        {
          title: '标题3',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_02.png'
        },
        {
          title: '标题4',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_03.png'
        },
        {
          title: '标题5',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_04.png'
        },
        {
          title: '标题6',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_05.png'
        },
        {
          title: '标题7',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_06.png'
        },
        {
          title: '标题8',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_07.png'
        },
        {
          title: '标题9',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_08.png'
        },
        {
          title: '标题10',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_09.png'
        },
        {
          title: '标题11',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_10.png'
        },
        {
          title: '标题12',
          desc: '冰河世纪是一个很好看的卡通电影，由迪士尼公司拍摄上市',
          imgsrc: '../../static/image/blog/blog_01.png'
        }
      ]
    }
  },
  components: {
    ArticleDes
  }
}
</script>
<style>
</style>
