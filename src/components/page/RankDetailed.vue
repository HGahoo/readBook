<template>
  <div>
    <h1 class="bookName">{{detailedData.bookName}}</h1>
    <div class="inner">
        <img :src="detailedData.bookName" width="40px" height="40px">
        <div class="name">{{detailedData.name}}</div>
        <div class="introduction">{{detailedData.introduction}}</div>
    </div>
    <div class="groud">
        <div class="bookSomething">
            <div class="someCard">
                <div class="title">字数</div>
                <div class="number">{{detailedData.fontNum}}</div>
            </div>
            <div class="someCard">
                <div class="title">阅读</div>
                <div class="number">{{detailedData.readNum}}</div>
            </div>
            <div class="someCard">
                <div class="title">加入书架</div>
                <div class="number">{{detailedData.addNum}}</div>
            </div>
            <div class="someCard">
                <div class="title">推荐票</div>
                <div class="number">{{detailedData.recommendNum}}</div>
            </div>
        </div>
    </div>
    <div style="width:100%;display: flex;justify-content: center;">
        <div class="section-hd">简介</div>
    </div>
    <div style="width:100%;display: flex;justify-content: center;">
        <div class="briefIntroduction">{{detailedData.briefIntroduction}}</div>
    </div>
    <div style="width:100%;display: flex;justify-content: center;">
        <div class="section-hd">目录</div>
    </div>
    <div style="width:100%;display: flex;justify-content: center;">
        <div style="width:56%">
            <div class="chapter-item" v-for="(item,index) in detailedData.chapter" :key="index">
                <div class="chapter-title">{{item.title}}</div>
                <div class="chapter-context">{{item.context}}</div>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'RankingDetailed',
  data () {
    return {
      detailedData:{}
    }
  },
  created() {
    var url = "http://localhost:3000/DetailedData";
    Axios.get(url).then((response)=>{
        this.detailedData = response.data;
    }).catch((error)=>{
        console.log(error);
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bookName {
        margin-bottom: 20px;
        text-align: center;
        font-size: 40px;
        line-height: 1.3;
    }
    .inner {
        margin-top: 50px;
        width: 100%;
        text-align: center;
    }
    .name {
        margin-top: 5px;
        font-weight: bold;
        font-size: 14px;
    }
    .introduction {
        margin-top: 40px;
        font-size: 12px;
    }
    .bookSomething {
        width: 56%;
        display: flex;
        justify-content:space-between;
        text-align: center;
    }
    .groud {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
    .someCard {
        width: 12vw;
        padding: 10px;
        background:white;
        text-align: center;
        line-height: 1;
    }
    .someCard .title {
        font-size: 12px;
        margin-bottom: 2px;
    }
    .someCard .number {
        font-weight: bold;
        font-size: 14px;
    }
    .section-hd {
        margin-top: 30px;
        padding: 10px 13px;
        background: #eff2f3;
        line-height: 1;
        width: 56%;
        font-size: 13px;
        font-weight: bold;
    }
    .briefIntroduction {
        margin-top: 20px;
        width: 56%;
        font-size: 13px;
    }
    .chapter-item {
        margin: 10px;
    }
    .chapter-title {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
    .chapter-context {
        margin-top: 5px;
        font-size: 14px;
    }
</style>
