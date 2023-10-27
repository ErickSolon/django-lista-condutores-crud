import React, { useState, useEffect } from "react";
import TabelaCondutores from "../../components/TabelaCondutores";
import CondutoresService from "../../services/condutoresservice";
import Add from "@mui/icons-material/Add";
import { PaginationComponent } from "../../components/PaginationComponent";
import { BtnRedirectionComponent } from "../../components/BtnRedirectionComponent";
import "./condutores.css";

export default function Condutores() {
  const [dados, setDados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalDePaginas, setTotalDePaginas] = useState(0);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await CondutoresService.getAll(pagina);
        setDados(response.data.results);

        const totalPaginas = Math.ceil(response.data.count / 5);
        setTotalDePaginas(totalPaginas);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    carregarDados();
  }, [pagina]);

  const handlePage = (event, value) => {
    setPagina(value);
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="addBtnStyle">
              <BtnRedirectionComponent link={"addCondutor"} icone={<Add />} />
            </div>

            <TabelaCondutores dados={dados} />

            <div class="position-relative">
              <div class="position-absolute top-50 start-50 translate-middle paginationStyle">
                <PaginationComponent
                  totalPaginas={totalDePaginas}
                  pagina={pagina}
                  handle={handlePage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
