import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationComponent = ({ totalPaginas, pagina, handle }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPaginas}
        color="primary"
        page={pagina}
        onChange={handle}
      />
    </Stack>
  );
};
