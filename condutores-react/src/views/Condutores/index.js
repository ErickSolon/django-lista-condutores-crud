import React, { useState, useEffect } from "react";
import Tabela from "../../components/Tabela";
import CondutoresService from "../../services/condutoresservice";

export default function Condutores() {
  const [dados, setDados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [itensPorPagina] = useState(5);
  const [QtdItens, setQtdItens] = useState(0);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await CondutoresService.getAll(pagina);
        setDados(response.data.results);
        setQtdItens(response.data.count);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    carregarDados();
  }, [pagina]);

  const indiceInicial = (pagina - 1) * itensPorPagina + 1;
  const indiceFinal = Math.min(indiceInicial + itensPorPagina - 1, QtdItens);

  const handleNextPage = () => {
    if (pagina < Math.ceil(QtdItens / itensPorPagina)) {
      setPagina(pagina + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "addCondutor")}
      >
        Adicionar Condutor
      </button>

      <Tabela dados={dados} />

      <button
        type="button"
        className={`btn btn-primary ${pagina === 1 ? "disabled" : ""}`}
        onClick={handlePreviousPage}
      >
        Anterior
      </button>

      <label>{`Exibindo ${indiceInicial}-${indiceFinal} de ${QtdItens} itens`}</label>

      <button
        type="button"
        className={`btn btn-primary ${
          pagina >= Math.ceil(QtdItens / itensPorPagina) ? "disabled" : ""
        }`}
        onClick={handleNextPage}
      >
        Próximo
      </button>
    </>
  );
}
