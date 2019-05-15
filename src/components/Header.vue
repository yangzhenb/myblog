<template>
    <!-- <div id="Header" class="Header">
        <div style="float:left">
            <h1>Tank's Stack Harbor</h1>
            <h2>Whisper to the World</h2>
        </div>
    <div style="float:right">
        <img src="../../static/image/logo.png" alt="My signature">
    </div>
    </div> -->
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="6"></el-col>
            <el-col :span="6">
                <div class="title">
                    <h1>Tank's Stack Harbor</h1>
                    <h2>Whisper to the World</h2>
                </div>
            </el-col>
            <el-col :span="6">
                <div>
                    <img src="../../static/image/logo.png" alt="My signature">
                </div>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
img {
    height: 130px;
    opacity:0.8;
    filter:alpha(opacity=40); /* IE8 及其更早版本 */
}
h1 {
    align-content: left
}
h2 {
    align-content: left
}
</style>

