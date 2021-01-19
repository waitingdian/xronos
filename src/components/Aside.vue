<template>
  <div style="width: 200px;">
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
