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
    <el-table-column prop="address" label="Address" width="180" />
    <el-table-column label="Action">
      <template #default="scope">
        <el-button-group class="ml-4">
          <el-button :icon="Edit" plain />
          <el-popconfirm
            width="235"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="deleteStudent(scope.row.id)"
          >
            <template #reference>
              <el-button :icon="Delete" plain type="danger"/>
            </template>
          </el-popconfirm>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import studentApi from '../http/api/student.js'
import { Edit, Delete, InfoFilled } from '@element-plus/icons-vue'

export default {
  data() {
    return {
      Edit,
      Delete,
      InfoFilled,
      userData: [],
      /*userData: [
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
      ]*/
    }
  },
  methods: {
    getStudentsInfo() {
      studentApi.getStudents().then((response) => {
        if (response.code === 0) {
          this.userData = response.data
        } else {
          // TODO：错误处理
        }
      }).catch(err => {
        console.log(err)
      })
    },
    deleteStudent(id) {
      studentApi.deleteStudent(id).then((response) => {
        if (response.code === 0) {
          // 刷新列表
          this.getStudentsInfo()
        } else {
          // TODO：错误处理
        }
      })
    }
  },
  mounted() {
    this.getStudentsInfo()
  }
}
</script>
