<template>
  <div class="about">
    <h1>This is a student info page</h1>
  </div>
  <el-table :data="userData" stripe style="width: 100%">
    <!--  当 el-table 元素中注入 data 对象数组后，
    在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。
    可以使用 width 属性来定义列宽。  -->
    <el-table-column prop="id" label="ID" width="50" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="reg_time" label="RegTime" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        {
          id: '1',
          name: 'Ming',
          reg_time: '2023-8-4 17:14:58',
          address: 'aaa@abc.com',
        },
        {
          id: '2',
          name: 'Ming',
          reg_time: '2023-8-4 17:14:58',
          address: 'aaa@abc.com',
        },
        {
          id: '3',
          name: 'Ming',
          reg_time: '2023-8-4 17:14:58',
          address: 'aaa@abc.com',
        },
      ]
    }
  }
}

</script>
