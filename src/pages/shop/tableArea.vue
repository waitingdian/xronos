<template>
  <div class="shopTableArea">
    <el-table :data="tableData" style="width: 100%" stripe border :row-class-name="getRowClass">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table v-if="props.row.menus && props.row.menus.length" :data="props.row.menus" class="inner-table" style="width: 100%">
            <el-table-column prop="menuName" label="商品名称" min-width="220">
            </el-table-column>
            <el-table-column prop="menuPrice" label="价钱" min-width="120">
            </el-table-column>
            <el-table-column prop="monthSaled" label="月销量" min-width="120">
            </el-table-column>
            <el-table-column prop="version" label="版本" min-width="120">
            </el-table-column>
          </el-table>
          <div v-else class="empty-tip">暂无数据</div>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="顾客NO" width="110"></el-table-column>
      <el-table-column prop="storeName" min-width="130" label="店铺名" show-overflow-tooltip></el-table-column>
<!--      <el-table-column prop="" width="120" label="企业名"></el-table-column>-->
      <el-table-column prop="" width="120" label="店铺分类">
        <template>
          /
        </template>
      </el-table-column>
      <el-table-column prop="sales" width="100" label="销售数量"></el-table-column>
      <el-table-column prop="score" width="80" label="评分"></el-table-column>
      <el-table-column prop="cityName" width="80" label="市"></el-table-column>
      <el-table-column prop="areaName" width="80" label="区"></el-table-column>
      <el-table-column prop="address" min-width="120" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column prop="phoneList" width="110" label="TEL"></el-table-column>
    </el-table>

  </div>
</template>
<script>
  export default {
    props: {
      tableData: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
      }
    },
    created () {
    },
    methods: {
      getRowClass(row, rowIndex) {
        let data = row.row;
        let res = [];
        if (data.menus && data.menus.length) {
          res.push('row-expand-has')
          return res;
        } else {
          res.push('row-expand-unhas')
          return res;
        }
      }
    }
  }
</script>

<style scoped>
  /deep/ .el-tooltip__popper{
    max-width: 180px !important;
  }
  .shopTableArea{
    padding: 15px 0;
  }
  /deep/ .el-table__expanded-cell[class*=cell]{
    padding: 5px 50px 0;
  }
  /deep/ .el-table td{
    padding: 6px 0;
  }
  /deep/ .inner-table td{
    color: #909399 !important;
  }
  /deep/ .inner-table th{
    padding: 7px 0;

  }
  .empty-tip{
    text-align: center;
    padding: 5px;
  }
  /deep/ .row-expand-unhas .el-table__expand-column{
    pointer-events: none;
  }
  /deep/ .row-expand-unhas .el-table__expand-column .el-icon{
    visibility:hidden;
  }
</style>
