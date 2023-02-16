import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Profile = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">Minha conta</Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Box>
          <img
            src="./assets/perfil.jfif"
            alt="img-perfil"
            style={{ width: 250, borderRadius: 130 }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: 4,
          }}
        >
          <Typography variant="caption">Nome</Typography>
          <Typography variant="h6">Carol</Typography>
          <Typography variant="caption">Idade</Typography>
          <Typography variant="h6">26</Typography>
          <Typography variant="caption">Telefone</Typography>
          <Typography variant="h6">(99) 99999-9999</Typography>
          <Typography variant="caption">E-mail</Typography>
          <Typography variant="h6">carol@growdev.com.br</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
