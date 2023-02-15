import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import GraphicDefault from "../../components/GraphicDefault";
import { useAppSelector } from "../../store/hooks";

const Home = () => {
  const modeDark = useAppSelector((state) => state.darkMode);

  return (
    <Box sx={{ background: modeDark ? "#18181b" : "" }}>
      <Box display={"flex"} flexDirection={"column"} gap={5}>
        <Box width={"100%"} textAlign={"center"}>
          <Typography variant="h3">
            DGPI - Demonstrativo Gráfico de Performance Invidual
          </Typography>
          <Typography variant="h5">
            Este sistema tem como finalidade demonstrar de forma gráfica as
            capacidades do indíviduo a ser avaliado.
          </Typography>
        </Box>

        <Divider />

        <GraphicDefault />

        <Divider />

        <Box width={"100%"} textAlign={"center"}>
          <Typography variant="body1">
            PROATIVO: Tomar a iniciativa para resolver problemas e realizar
            tarefas sem esperar por direção ou instruções explícitas.
          </Typography>
          <Typography variant="body1">
            CRIATIVO: Uilizar a imaginação e pensar fora da caixa para encontrar
            soluções inovadoras e eficazes para os desafios do trabalho.
          </Typography>
          <Typography variant="body1">
            RESILIENTE: Ser capaz de se adaptar e recuperar rapidamente das
            dificuldades ou fracassos, mantendo a determinação e o otimismo para
            alcançar seus objetivos.
          </Typography>
          <Typography variant="body1">
            RESPONSÁVEL: Ser confiável e cumprir com suas obrigações e
            compromissos de maneira eficiente e ética.
          </Typography>
          <Typography variant="body1">
            COMUNICATIVO: Habilidade em expressar ideias claramente e escutar
            ativamente, facilitando a troca de informações e a colaboração com
            outros membros da equipe.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
