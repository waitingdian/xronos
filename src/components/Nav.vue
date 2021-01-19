<template>
  <div class="overflow-hidden">
    <el-menu class="el-menu-nav clearfix" mode="horizontal">
      <el-menu-item index="1" class="logo pull-left">
        <img :src="logoUrl" alt="">
      </el-menu-item>
      <el-submenu index="2" style="float: right;">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" class="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        logoUrl: require("../assets/images/logo.jpg")
      };
    },
    methods: {
    }
  }
</script>

<style>
  .el-menu-nav{
    height: 58px;
  }
  /*width: 150px;*/
  /*margin-left: 20px;*/
  /*height: auto;*/
  /*margin-top: 10px;*/

  .el-menu-nav .el-submenu__title{
    color: #303133!important;
  }
  .el-menu-item.logout{
    text-align: center;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 58px;
    line-height: 58px;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
    min-width: 120px;
  }
</style>
