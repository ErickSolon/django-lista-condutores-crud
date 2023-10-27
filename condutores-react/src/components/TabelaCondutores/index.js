import condutoresservice from "../../services/condutoresservice";
import Button from "@mui/material/Button";
import DeleteForever from "@mui/icons-material/DeleteForever";
import Update from "@mui/icons-material/Update";
import "./tabelaCondutores.css";

export default function TabelaCondutores(props) {
  const deleteBtn = (id) => {
    return condutoresservice.deleteById(id).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <div class="table-responsive">
        <table class="table table-success table-striped tabelaEstilo">
          <thead class="table-primary">
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
            {props.dados.map((e) => {
              return (
                <tr key={e.id}>
                  <td scope="row">{e.placa}</td>
                  <td>{e.marca}</td>
                  <td>{e.condutor.nome}</td>
                  <td>{e.condutor.sobrenome}</td>
                  <td>{e.condutor.cpf}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      className="btn btn-primary"
                      onClick={() => deleteBtn(e.id)}
                    >
                      <DeleteForever />
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      className="btn btn-primary"
                      href={`updateCondutor/${e.id}`}
                    >
                      <Update />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
