<template>
    <div class="box">
        <div class="all">我是一个大标题</div>
        <div class="head"><Header /></div>
        <div class="aside"><Aside /></div>
        
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Header from './layout/header.vue'
import Aside from './layout/aside.vue'
export default {
components:{
    Header,
    Aside,
}
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.box{
    width: 1200px;
    height: 800px;
    background-color: #eee;
    position: relative;
}
    .all{
        text-align: center;
        font-size: 20px;
        color: #0f0
    }
    .head{
        width: 1200px;
        height: 50px;
        background-color: pink;
    }
    .aside{
        width: 200px;
        height: 500px;
        background-color: yellow;
    }
    .main{
        border: 1px solid red;
        position: absolute;
        top: 80px;
        left: 200px;
    }
</style>
