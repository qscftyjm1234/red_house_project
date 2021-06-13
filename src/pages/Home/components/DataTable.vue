<template>
  <div class="table">
    <div class="table-title">{{ data.title }}</div>
    <hr style="margin: 16px 0" />
    <el-table
      :header-cell-style="{
        background: '#EFEEED',
        fontWeight: 'bold',
        color: 'black',
      }"
      stripe
      ref="multipleTable"
      :data="data.tableData"
      style="width: 100%"
    >
      <el-table-column prop="name" label="名稱" width="259">
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
      </el-table-column>
      <el-table-column prop="desc" label="描述" width="348"> </el-table-column>
      <el-table-column
        align="center"
        prop="count"
        label="受眾人數"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="更新日期"
        sortable
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <!-- <span>
            更多
            <i class="el-icon-arrow-down"></i>
          </span> -->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="handleDowload(scope.$index, scope.row)"
                >下載</el-dropdown-item
              >
              <el-dropdown-item @click="handleCopy(scope.$index, scope.row)"
                >複製連結</el-dropdown-item
              >
              <el-dropdown-item @click="handleAdd(scope.$index, scope.row)"
                >新增SMS行銷</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      //   fakeData: [
      //     {
      //       title: "拉新(拓展新客)",
      //       tableData: [
      //         {
      //           date: "2016-05-03",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //         {
      //           date: "2016-05-02",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //       ],
      //     },
      //     {
      //       title: "留存(避免流失)",
      //       tableData: [
      //         {
      //           date: "2016-05-03",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //         {
      //           date: "2016-05-02",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //       ],
      //     },
      //     {
      //       title: "促活(促進活要)",
      //       tableData: [
      //         {
      //           date: "2016-05-03",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //         {
      //           date: "2016-05-02",
      //           name: "忠實老會員VVIP",
      //           desc: "經常消費且購買金額高的忠實會員",
      //           count: 47,
      //           address: "上海市普陀区金沙江路 1518 弄",
      //         },
      //       ],
      //     },
      //   ],
    };
  },
  methods: {
    handleDowload(index, row) {
      //下載
      console.log(index, row);
    },
    handleCopy(index, row) {
      //複製
      console.log(index, row);
    },
    handleAdd(index, row) {
      //新增
      console.log(index, row);
    },
    // tableRowClassName({ rowIndex }) {
    //   if (rowIndex % 2 != 0) {
    //     return "gray-row";
    //   }
    //   return "";
    // },
  },
};
</script>