import axios from '../axios'

const student = {
  // 学生一览
  getStudents() {
    return axios.get('/student')
  },
}

export default student
