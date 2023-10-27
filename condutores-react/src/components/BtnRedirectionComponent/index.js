import Button from "@mui/material/Button";

export const BtnRedirectionComponent = ({ link, icone }) => {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => (window.location.href = link)}
      >
        {icone}
      </Button>
    </>
  );
};
