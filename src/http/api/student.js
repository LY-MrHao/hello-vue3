import axios from '../axios'

const student = {
  // 学生一览
  getStudents() {
    return axios.get('/student')
  },
  // 删除
  deleteStudent(id) {
    return axios.delete(`/student/${id}`)
  },
}

export default student
