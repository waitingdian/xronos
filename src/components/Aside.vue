<template>
  <div style="width: 200px;">
    <el-menu class="el-menu-vertical-demo"
             :default-active="$route.path"
             @open="handleOpen"
             @close="handleClose" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item index="/shop">店铺信息</el-menu-item>

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
  .el-menu-vertical-demo{
    height: auto;
    /*min-height: calc(100vh - 60px);*/
    /*background-color: #f8fafb;*/
  }
</style>
