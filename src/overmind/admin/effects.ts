import axios from 'axios'

export class Api {
  async getUsers () {
    return axios.get('http://127.0.0.1:8000/api/v2/usuario/lista')
  }
}
