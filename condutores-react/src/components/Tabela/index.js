import { Component } from "react";
import condutoresservice from "../../services/condutoresservice";

export default function Tabela(props) {
    const deleteBtn = (id) => {
      return condutoresservice.deleteById(id).then(() => {
        window.location.reload();
      });
    }

    return (
      <>
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">Placa</th>
                <th scope="col">Marca</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">CPF</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                props.dados.map(e => {
                    return (
                      <tr class="" key={e.id}>
                        <td scope="row">{e.placa}</td>
                        <td>{e.marca}</td>
                        <td>{e.condutor.nome}</td>
                        <td>{e.condutor.sobrenome}</td>
                        <td>{e.condutor.cpf}</td>
                        <td>
                          <a
                            className="btn btn-primary"
                            onClick={() => deleteBtn(e.id)}
                          >
                            Delete
                          </a>
                          <a
                            className="btn btn-primary"
                            href={`updateCondutor/${e.id}`}
                          >
                            Update
                          </a>
                        </td>
                      </tr>
                    );
                })
              }
            </tbody>
          </table>
        </div>
      </>
    );
}