<template>
  <div>
    <h1 class="title">图书排行榜</h1>
    <div class="line"></div>
    <h2 class="title_multiple">综合排行</h2>
    <div class="list">
      <div class="ranking-card" v-for="(listData,index) in rankData" :key="index">
        <div class="card-head">
            <h1 style="color: #bb996d;font-size: 18px;line-height: 22px;font-weight: bold;word-wrap: break-word;">{{listData.name}}</h1>
            <h2 style="margin-top: 2px;color:#a6a6a6;font-weight: normal;font-size: 12px;word-wrap: break-word;">{{listData.fullName}}</h2>
        </div>
        <div class="card-body">
          <ol>
            <li v-for="(item,itemIndex) in listData.list" :key="itemIndex*index" @mouseenter="addActive(index,itemIndex)" @mouseleave="removeActive(index,itemIndex)">
              <div class="ranking-item">
                <div class="ranking-number">{{itemIndex+1}}</div>
                <div class="ranking-item-content">
                  <!-- 简单模式 -->
                  <div class="rank-works-simple" v-if="item.works.isBundle == false">
                    <h3 class="bookTitle" @click="jumpTo()">{{item.works.title}}</h3>
                    <div class="kind-link">{{item.works.kinds[0].shortName}}</div>
                  </div>
                  <!-- 详情模式 -->
                  <div class="rank-works-detailed" v-if="item.works.isBundle == true">
                    <div class="info">
                      <h3 class="bookTitle" @click="jumpTo()">{{item.works.title}}</h3>
                      <div class="author">{{item.works.author[0].name}}</div>
                      <div class="shortName">{{item.works.kinds[0].shortName}}</div>
                    </div>
                    <div class="cover shadow-cover">
                      <img :src="item.works.cover" loading="lazy">
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'RankingList',
  data () {
    return {
      rankData:[]
    }
  },
  created() {
    var url = "http://localhost:3000/RankListData";
    Axios.get(url).then((response)=>{
      this.rankData = response.data;
    }).catch((error)=>{
      console.log(error);
    })
  },
  methods: {
    addActive(index,itemIndex) {
      for(let i=0;i<this.rankData[index].list.length;i++) {
        this.rankData[index].list[i].works.isBundle = false
      }
      this.rankData[index].list[itemIndex].works.isBundle = true
      if(itemIndex != 0) {
        this.rankData[index].list[0].works.isBundle = false
      }
		},
		removeActive(index,itemIndex) {
      this.rankData[index].list[itemIndex].works.isBundle = false
      this.rankData[index].list[0].works.isBundle = true
    },
    jumpTo() {
      this.$router.push('/RankDetailed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    padding-right: 70px;
    padding-left: 70px;
    box-sizing: border-box;
    margin: 40px auto;
    font-weight: normal;
    font-size: 30px;
    line-height: 1;
    width: 100%;
  }
  .line {
    margin: 0 auto;
    width: 90%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  .title_multiple {
    margin: 40px auto;
    font-size: 24px;
    font-weight: bold;
    padding-left: 70px;
    padding-right: 70px;
  }
  .list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -8px 20px;
    padding-right: 70px;
    padding-left: 70px;
  }
  .ranking-card {
    flex-shrink: 0;
    box-sizing: border-box;
    margin: 0 8px 40px;
    width: calc((100% / 4) - 16px);
    display: flex;
    flex-direction: column;
    padding: 0 0 10px;
    background:#fff
  }
  .card-head {
    flex-grow: 1;
    padding: 20px;
  }
  .ranking-number {
    float: left;
    width: 20px;
    color: #f9c300;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }
  ol {
    list-style: none!important;
    padding-inline-start: 0px!important;
  }
  .rank-works-simple {
    display: flex;
    align-items: center;
    height: 20px;
  }
  .bookTitle {
    flex: 1 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .kind-link {
    flex: 0 0 56px;
    color:#777;
    text-align: right;
    font-size: 12px;
  }
  .ranking-item {
    display: block;
    padding: 10px 20px;
  }
  .rank-works-detailed {
    display: flex;
    margin-top: -13px;
  }
  .info {
    position: relative;
    flex: 1;
    min-width: 0;
  }
  .author {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 12px;
    color:#777;
    font-size: 12px;
  }
  .cover {
    flex: none;
    width: 75px;
    height: 110px;
    margin-left: 5px;
  }
  .cover img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: 1;
  }
  .shortName {
    color:#777;
    font-size: 12px;
  }
</style>
