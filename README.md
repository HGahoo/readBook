# readbook

- 设计一个**图书排行榜**页面，具备 `图书列表页`，`图书详情页` 的功能。
- 原型参考： [豆瓣阅读排行](https://read.douban.com/charts) 中的 `综合排行` 

该demo使用koa作为服务端，位于该项目根目录的KoaServe内，且页面内数据均使用Koa输出mock数据，设计该页面时参考了豆瓣阅读排行。

-KoaServe/routes/RankList.js文件为本次主要开发

-src\components\page\RankingList.vue文件为`图书列表页`
-src\components\page\RankDetailed.vue文件为`图书详情页`

服务端运行方式-进入KoaServe目录使用npm start命令
客户端打包方式-进入项目根目录使用 npm run build命令
客户端生产环境运行-进入项目根目录使用 npm run dev命令
