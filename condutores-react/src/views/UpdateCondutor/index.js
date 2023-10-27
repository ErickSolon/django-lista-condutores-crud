import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import condutoresservice from "../../services/condutoresservice";

export default function UpdateCondutor() {
  const { idParam } = useParams();

  const [state, setState] = useState({
    id: idParam,
    placa: "",
    marca: "",
    nome: "",
    sobrenome: "", 
    cpf: "", 
  });

  const changePlacaHandler = (event) => {
    setState({ ...state, placa: event.target.value });
  };

  const changeMarcaHandler = (event) => {
    setState({ ...state, marca: event.target.value });
  };

  const changeNomeHandler = (event) => {
    setState({ ...state, nome: event.target.value }); 
  };

  const changeSobrenomeHandler = (event) => {
    setState({ ...state, sobrenome: event.target.value });
  };

  const changeCPFHandler = (event) => {
    setState({ ...state, cpf: event.target.value });
  };

  useEffect(() => {
    condutoresservice.getById(idParam).then((r) => {
      let condutores = r.data;
      setState((prevState) => ({
        ...prevState,
        placa: condutores.placa,
        marca: condutores.marca,
        nome: condutores.condutor.nome,
        sobrenome: condutores.condutor.sobrenome,
        cpf: condutores.condutor.cpf,
      }));
    });
  }, [idParam]);

  const update = async (event) => {
    event.preventDefault();

    try {
      if (
        state.placa === "" ||
        state.marca === "" ||
        state.nome === "" ||
        state.sobrenome === "" ||
        state.cpf === ""
      ) {
        alert("Digite todos os campos!");
      } else {
        const condutorData = {
          marca: state.marca,
          placa: state.placa,
          condutor: {
            nome: state.nome,
            sobrenome: state.sobrenome,
            cpf: state.cpf,
          },
        };

        await condutoresservice.updateById(idParam, condutorData);
        alert("Pessoa atualizada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao atualizar pessoa:", error);
      alert("Ocorreu um erro ao atualizar a pessoa.");
    }
  };


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
                value={state.placa}
                onChange={changePlacaHandler}
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
                value={state.marca}
                onChange={changeMarcaHandler}
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
                value={state.nome}
                onChange={changeNomeHandler}
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
                value={state.sobrenome}
                onChange={changeSobrenomeHandler}
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
                value={state.cpf}
                onChange={changeCPFHandler}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="offset-sm-4 col-sm-8">
              <button type="submit" class="btn btn-primary" onClick={update}>
                Atualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
