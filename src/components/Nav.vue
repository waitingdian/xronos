<template>
  <div class="overflow-hidden">
    <el-menu class="el-menu-nav clearfix" mode="horizontal" router>
      <el-menu-item index="/" class="logo pull-left">
        <img :src="logoUrl" alt="">
      </el-menu-item>
      <el-submenu index="2" style="float: right;">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1" class="logout" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import { Message } from 'element-ui';
  export default {
    data() {
      return {
        logoUrl: require("../assets/images/logo.jpg")
      };
    },
    methods: {
      logout () {
        this.$axios.post('/user/logout', this.ruleForm)
          .then((res) => {
            if (res.code == 0) {
              Message.success("退出成功")
              sessionStorage.clear()
              setTimeout(() => {
                this.$router.push("/")
              }, 300)
            }
          })
      }
    }
  }
</script>

<style scoped>
  /deep/ .el-menu.el-menu--horizontal{
    border: none;
  }
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
