<template>
    <div>
        <el-row type="flex" justify="center" class="article">
            <el-col :span="6"></el-col>
            <el-col :span="6">
                <div>
                    <a href="#">
                        <img :src="article.imgsrc" alt="">
                    </a>
                </div>
            </el-col>
            <el-col :span="6">
                <div>
                    <h4 class="text-primary ">{{article.title}}</h4>
                    <p style="font-size:14px"><span class="glyphicon glyphicon-calendar"></span> 2019-05-10 周五 22:09:00</p>
                    <p style="font-size:14px">{{article.desc}}</p>
                </div>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
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
.article {
    border-radius: 4px
}
</style>

