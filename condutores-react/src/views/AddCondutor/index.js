import condutoresservice from "../../services/condutoresservice"
import react, { Component } from "react"

export default class AddCondutor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placa: "",
      marca: "",
      nome: "",
      sobrenome: "",
      cpf: "",
    }

    this.changePlacaHandler = this.changePlacaHandler.bind(this)
    this.changeMarcaHandler = this.changeMarcaHandler.bind(this)
    this.changeNomeHandler = this.changeNomeHandler.bind(this)
    this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this)
    this.changeCPFHandler = this.changeCPFHandler.bind(this)
  }

  changePlacaHandler = (event) => {
    this.setState({ placa: event.target.value })
  }

  changeMarcaHandler = (event) => {
    this.setState({ marca: event.target.value })
  }

  changeNomeHandler = (event) => {
    this.setState({ nome: event.target.value })
  }

  changeSobrenomeHandler = (event) => {
    this.setState({ sobrenome: event.target.value })
  }

  changeCPFHandler = (event) => {
    this.setState({ cpf: event.target.value })
  }

  saveCondutor = async (event) => {
    event.preventDefault()

    try {
      const condutorData = {
        marca: this.state.marca,
        placa: this.state.placa,
        condutor: {
          nome: this.state.nome,
          sobrenome: this.state.sobrenome,
          cpf: this.state.cpf,
        },
      }

      if (
        this.state.placa === "" ||
        this.state.marca === "" ||
        this.state.nome === "" ||
        this.state.sobrenome === "" ||
        this.state.cpf === ""
      ) {
        alert("Digite todos os campos!")
      } else {
        await condutoresservice.save(condutorData)
        alert("Pessoa salva com sucesso!")
      }

      this.setState({
        placa: "",
        marca: "",
        nome: "",
        sobrenome: "",
        cpf: "",
      })
    } catch (error) {
      console.error("Erro ao salvar pessoa:", error)
      alert("Ocorreu um erro ao salvar a pessoa.")
    }
  }

  render() {
    return (
      <>
        <div class="container">
          <form>
            <div class="mb-3 row">
              <label for="inputPlaca" class="col-4 col-form-label">
                Placa
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputPlaca"
                  id="inputPlaca"
                  placeholder="Placa"
                  value={this.state.placa}
                  onChange={this.changePlacaHandler}
                />
              </div>
              <label for="inputMarca" class="col-4 col-form-label">
                Marca
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputMarca"
                  id="inputMarca"
                  placeholder="Marca"
                  value={this.state.marca}
                  onChange={this.changeMarcaHandler}
                />
              </div>
              <label for="inputNome" class="col-4 col-form-label">
                Nome
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputNome"
                  id="inputNome"
                  placeholder="Nome"
                  value={this.state.nome}
                  onChange={this.changeNomeHandler}
                />
              </div>
              <label for="inputSobrenome" class="col-4 col-form-label">
                Sobrenome
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputSobrenome"
                  id="inputSobrenome"
                  placeholder="Sobrenome"
                  value={this.state.sobrenome}
                  onChange={this.changeSobrenomeHandler}
                />
              </div>
              <label for="inputCPF" class="col-4 col-form-label">
                CPF
              </label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputCPF"
                  id="inputCPF"
                  placeholder="CPF"
                  value={this.state.cpf}
                  onChange={this.changeCPFHandler}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <div class="offset-sm-4 col-sm-8">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.saveCondutor}
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}
