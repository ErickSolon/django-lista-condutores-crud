import axios from "axios";

class CondutoresService {
  baseURL = "http://127.0.0.1:8000/veiculos";

  getAll(pagina) {
    return axios.get(`${this.baseURL}/?page=${pagina}`);
  }

  getById(id) {
    return axios.get(`${this.baseURL}/${id}/`);
  }

  deleteById(id) {
    return axios.delete(`${this.baseURL}/${id}`);
  }

  updateById(id, dado) {
    return axios.put(`${this.baseURL}/${id}/`, dado);
  }

  save(dado) {
    return axios.post(`${this.baseURL}/`, dado);
  }
}

export default new CondutoresService();
