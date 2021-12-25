import Vue from 'vue'
import Router from 'vue-router'
import RankingList from '@/components/page/RankingList'
import RankDetailed from '@/components/page/RankDetailed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RankingList',
      component: RankingList
    },
    {
      path: '/RankDetailed',
      name: 'RankDetailed',
      component: RankDetailed
    }
  ]
})
