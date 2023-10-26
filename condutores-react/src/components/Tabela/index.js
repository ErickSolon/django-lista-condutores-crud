export default function Tabela(props) {
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