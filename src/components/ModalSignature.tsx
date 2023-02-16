import React from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

interface ModalSignatureProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalSignature: React.FC<ModalSignatureProps> = ({
  isOpen,
  handleClose,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25rem",
    height: "25rem",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          variant="text"
          color="primary"
          onClick={handleClose}
          sx={{ position: "fixed", right: 0, top: 5 }}
        >
          <Close />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          <Typography variant="h6">
            Para continuar atualize seu plano agora, por apenas
          </Typography>
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h6" sx={{ position: "fixed", left: 80 }}>
              R$
            </Typography>
            <Typography variant="h1">49,99</Typography>
            <Typography
              variant="h6"
              sx={{ position: "fixed", right: 50, bottom: 130 }}
            >
              /mes
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ position: "fixed", bottom: 15, p: "1rem 2rem" }}
        >
          Atualizar Agora
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalSignature;
