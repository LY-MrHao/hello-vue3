import axios from '../axios'

const student = {
  // 学生一览
  getStudents() {
    return axios.get(`/student`)
  },
  // 删除
  deleteStudent(id) {
    return axios.delete(`/student/${id}`)
  },
  // 更新
  updateStudent(id, body) {
    return axios.put(`/student/${id}`, { body })
  },
  // 追加
  addStudent(body) {
    return axios.post(`/student`, { body })
  },
}

export default student
