import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import GraphicDefault from "../../components/GraphicDefault";

const Home = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        <Box width={"100%"} textAlign={"center"}>
          <Typography variant="h3" color="black">
            DGPI - Demonstrativo Gráfico de Performance Invidual
          </Typography>
          <Typography variant="h5" color="black">
            Este sistema tem como finalidade demonstrar de forma gráfica as
            capacidades do indíviduo a ser avaliado.
          </Typography>
        </Box>

        <Divider />

        <GraphicDefault />

        <Divider />

        <Box width={"100%"} textAlign={"center"}>
          <Typography variant="body1" color="black">
            PROATIVO: Tomar a iniciativa para resolver problemas e realizar
            tarefas sem esperar por direção ou instruções explícitas.
          </Typography>
          <Typography variant="body1" color="black">
            CRIATIVO: Uilizar a imaginação e pensar fora da caixa para encontrar
            soluções inovadoras e eficazes para os desafios do trabalho.
          </Typography>
          <Typography variant="body1" color="black">
            RESILIENTE: Ser capaz de se adaptar e recuperar rapidamente das
            dificuldades ou fracassos, mantendo a determinação e o otimismo para
            alcançar seus objetivos.
          </Typography>
          <Typography variant="body1" color="black">
            RESPONSÁVEL: Ser confiável e cumprir com suas obrigações e
            compromissos de maneira eficiente e ética.
          </Typography>
          <Typography variant="body1" color="black">
            COMUNICATIVO: Habilidade em expressar ideias claramente e escutar
            ativamente, facilitando a troca de informações e a colaboração com
            outros membros da equipe.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
