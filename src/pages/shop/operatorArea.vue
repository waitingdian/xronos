<template>
  <div class="shopOperatorArea overflow-hidden">
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="searchForm.keyword" placeholder="请输入关键字"></el-input>
      </el-form-item>

      <el-form-item label="区域">
        <el-select class="city-select pull-right" v-model="searchForm.city" filterable placeholder="请选择区域">
          <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="版本">
        <el-select class="version-select pull-right" v-model="searchForm.version" filterable placeholder="请选择版本">
          <el-option v-for="item in versionList" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="pull-right">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        cityList: [],
        versionList: [],
        value: '',
        searchForm: {
          keyword: '',
          city: null,
          version: null
        }
      }
    },
    created () {
      this.getCityList()
      this.getVersionList()
    },
    methods: {
      onSubmit () {
        this.$emit("onSearch", this.searchForm)
      },

      onReset() {
        this.searchForm = {
          keyword: '',
          city: null,
          version: null
        }
        this.$emit("onSearch", this.searchForm)
      },

      getCityList () {
        this.$axios.get('/curry/city')
          .then((res) => {
            console.log(res)
            this.cityList = res.rows
          })
      },

      getVersionList () {
        this.$axios.get('/curry/version')
          .then((res) => {
            this.versionList = res.rows
            this.searchForm.version = res.rows[res.rows.length-1]
          })
      }
    }
  }
</script>

<style scoped>
  .shopOperatorArea{
    padding-right: 50px;
  }
  /deep/ .version-select{
    width: 120px;
  }
  /deep/ .city-select{
    /*width: 160px;*/
  }

</style>
