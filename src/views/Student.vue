<template>
  <div class="about">
    <h1>This is a student info page</h1>
  </div>
  <el-container>
    <el-header height="5%" class="el-header">
      <el-button @click="dialogFormAdd = true" class="add-button" type="primary">Add</el-button>
      <el-dialog v-model="dialogFormAdd" title="Add" @close="dialogFormAdd = false">
        <el-form :model="addInfo">
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="addInfo.name" />
          </el-form-item>
          <el-form-item label="Address" :label-width="formLabelWidth">
            <el-input v-model="addInfo.address" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormAdd = false">Cancel</el-button>
            <el-button type="primary" @click="addStudent(updateInfo.id)">
              Add
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-header>
    <el-main>
      <el-table :data="userData" stripe style="width: 100%">
        <!--  当 el-table 元素中注入 data 对象数组后，
        在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。
        可以使用 width 属性来定义列宽。  -->
        <el-table-column prop="id" label="ID" width="50" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="create_time" label="RegTime" width="180" />
        <el-table-column prop="address" label="Address" width="180" />
        <el-table-column label="Action">
          <template #default="scope">
            <el-button-group class="ml-4">
              <el-button :icon="Edit" plain @click="dialogFormVisible = true,updateInfo = scope.row" />

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
                  <el-button :icon="Delete" plain type="danger" />
                </template>
              </el-popconfirm>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="dialogFormVisible" title="Update" @close="dialogFormVisible = false">
        <el-form :model="updateInfo">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <el-input v-model="updateInfo.id" disabled />
          </el-form-item>
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="updateInfo.name" />
          </el-form-item>
          <el-form-item label="RegTime" :label-width="formLabelWidth">
            <el-input v-model="updateInfo.create_time" disabled />
          </el-form-item>
          <el-form-item label="Address" :label-width="formLabelWidth">
            <el-input v-model="updateInfo.address" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="updateStudent(updateInfo.id)">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-main>
  </el-container>
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
      dialogFormVisible: false,
      dialogFormAdd: false,
      formLabelWidth: '140px',
      userData: [],
      updateInfo: {},
      addInfo: {},
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
    },
    updateStudent(id) {
      this.dialogFormVisible = false
      studentApi.updateStudent(id, JSON.stringify(this.updateInfo)).then((response) => {
        if (response.code === 0) {
          // 刷新列表
          this.getStudentsInfo()
        } else {
          // TODO：错误处理
        }
      })
      this.updateInfo = {}
    },
    addStudent() {
      this.dialogFormAdd = false
      studentApi.addStudent(JSON.stringify(this.addInfo)).then((response) => {
        if (response.code === 0) {
          // 刷新列表
          this.getStudentsInfo()
        } else {
          // TODO：错误处理
        }
      })
      this.addInfo = {}
    }
  },
  mounted() {
    this.getStudentsInfo()
  }
}
</script>

<style>
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.el-header {
  display: flex;
  justify-content: flex-start;
}
.add-button {
  width: 10%;
}
</style>
