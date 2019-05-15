<template>
    <div>
        <div style="float:left;width:60%">
            <a href="#">
                <img :src="article.imgsrc" alt="">
            </a>
        </div>
        <div style="float:right;width:40%">
            <h4 class="text-primary ">{{article.title}}</h4>
            <p style="font-size:14px"><span class="glyphicon glyphicon-calendar"></span> 2019-05-10 周五 22:09:00</p>
            <p style="font-size:14px">{{article.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        article: Object
    }
}
</script>
<style>
</style>

