<template>
  <div class="home">
    <Breadcrumb />
    <h1>智慧名單</h1>
    <el-tabs type="card" style="margin-bottom: 20px">
      <el-tab-pane label="全部">
        <DataTable
          :data="data"
          v-for="(data, index) in fakeDatas"
          :key="index"
        />
      </el-tab-pane>
      <el-tab-pane
        v-for="(data, index) in fakeDatas"
        :key="index"
        :label="data.title"
      >
        <DataTable :data="data" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import axios from "axios";
import Breadcrumb from "./components/Breadcrumb";
import DataTable from "./components/DataTable";
export default {
  components: { Breadcrumb, DataTable },
  data() {
    return { fakeDatas: false };
  },
  methods: {
    //打入假的API
    async getFakedata() {
      await axios
        .get("https://qscftyjm1234.github.io/0903_liceDemo/db.json")
        .then((res) => {
          console.log(res.data.posts);
          this.fakeDatas = res.data.posts;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
  mounted() {
    this.getFakedata();
  },
};
</script>