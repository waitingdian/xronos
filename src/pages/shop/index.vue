<template>
  <div class="shop-page main-content">
    <div class="container">
      <OperatorArea @onSearch="onSearch" />
      <TableArea :tableData="tableData"/>
      <div style="text-align: center;padding: 10px">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageInfo.pageNo"
                :page-size="pageInfo.pageSize"
                layout="total, sizes, prev, pager, next"
                :total="pageInfo.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>

  import OperatorArea from './operatorArea'
  import TableArea from './tableArea'
  export default {
    name: 'shop',
    components: { OperatorArea, TableArea },
    data() {
      return {
        tableData: [],
        pageInfo: {
          pageNo: 1,
          pageSize: 10,
          total: 100
        }
      }
    },
    created () {
      this.getList()
    },
    methods: {

      onSearch (params) {
       this.getList(params)
      },

      getList (params = {}) {
        let data = Object.assign(params, this.pageInfo)
        this.$axios.get('/store/search', data)
          .then((res) => {
            if (res.code == 0) {
              this.tableData = res.rows
              this.pageInfo.total = res.pageInfo.totalRecords
            }
          })
      },

      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
        this.pageInfo.pageSize = val;
        this.getList()
      },

      handleCurrentChange (val) {
        console.log(`当前页: ${val}`);
        this.pageInfo.pageNo = val;
        this.getList()
      }
    }
  }
</script>

<style scoped>
/deep/ .el-tooltip__popper{
  max-width: 180px;
}
  .shop-page .container{
    padding: 20px 20px 30px;
    background-color: #fff;
  }
</style>
