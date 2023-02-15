import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Box } from "@mui/system";
import { Slider, Typography, useMediaQuery } from "@mui/material";

const dados = [
  { item: "Comunicativo", nota: 9 },
  { item: "Criativo", nota: 8 },
  { item: "Resiliente", nota: 4 },
  { item: "Responsável", nota: 5 },
  { item: "Proativo", nota: 6 },
];

export default function GraphicDefault() {
  const [dadosAtualizados, setDadosAtualizados] = useState(dados);
  const [valor1, setValor1] = useState(9);
  const [valor2, setValor2] = useState(8);
  const [valor3, setValor3] = useState(4);
  const [valor4, setValor4] = useState(5);
  const [valor5, setValor5] = useState(6);

  const mobile = useMediaQuery("(max-width:900px)");

  const handleChange1 = (e: any) => {
    const newValor1 = Number(e.target.value);
    setValor1(newValor1);
    setDadosAtualizados(
      dadosAtualizados.map((novoDado) => {
        if (novoDado.item === "Proativo") {
          return { ...novoDado, nota: newValor1 };
        }
        return novoDado;
      })
    );
  };

  const handleChange2 = (e: any) => {
    const newValor2 = Number(e.target.value);
    setValor2(newValor2);
    setDadosAtualizados(
      dadosAtualizados.map((novoDado) => {
        if (novoDado.item === "Criativo") {
          return { ...novoDado, nota: newValor2 };
        }
        return novoDado;
      })
    );
  };

  const handleChange3 = (e: any) => {
    const newValor3 = Number(e.target.value);
    setValor3(newValor3);
    setDadosAtualizados(
      dadosAtualizados.map((novoDado) => {
        if (novoDado.item === "Resiliente") {
          return { ...novoDado, nota: newValor3 };
        }
        return novoDado;
      })
    );
  };

  const handleChange4 = (e: any) => {
    const newValor4 = Number(e.target.value);
    setValor4(newValor4);
    setDadosAtualizados(
      dadosAtualizados.map((novoDado) => {
        if (novoDado.item === "Responsável") {
          return { ...novoDado, nota: newValor4 };
        }
        return novoDado;
      })
    );
  };

  const handleChange5 = (e: any) => {
    const newValor5 = Number(e.target.value);
    setValor5(newValor5);
    setDadosAtualizados(
      dadosAtualizados.map((novoDado) => {
        if (novoDado.item === "Comunicativo") {
          return { ...novoDado, nota: newValor5 };
        }
        return novoDado;
      })
    );
  };

  return (
    <Box sx={{ width: "100%", display: mobile ? "block" : "flex" }}>
      <Box
        sx={{
          width: mobile ? "100%" : "50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RadarChart
          cy={mobile ? 150 : 200}
          width={600}
          height={mobile ? 300 : 400}
          data={dadosAtualizados}
        >
          <PolarGrid />
          <PolarRadiusAxis
            domain={[1, 10]}
            axisLine={false}
            tickFormatter={() => ""}
          />
          <PolarAngleAxis dataKey="item" fontSize={20} />
          <Radar
            name="FeedbackStats"
            dataKey="nota"
            fill="#607d8b"
            fillOpacity={0.8}
          />
        </RadarChart>
      </Box>
      <Box
        sx={{
          width: mobile ? "100%" : "50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: 250 }}>
          <Typography color="#bdbcbc">Proativo</Typography>
          <Slider
            value={valor1}
            step={1}
            min={2}
            max={10}
            onChange={handleChange1}
          />
        </Box>
        <Box sx={{ width: 250 }}>
          <Typography color="#bdbcbc">Criativo</Typography>
          <Slider
            value={valor2}
            step={1}
            min={2}
            max={10}
            onChange={handleChange2}
          />
        </Box>
        <Box sx={{ width: 250 }}>
          <Typography color="#bdbcbc">Resiliente</Typography>
          <Slider
            value={valor3}
            step={1}
            min={2}
            max={10}
            onChange={handleChange3}
          />
        </Box>
        <Box sx={{ width: 250 }}>
          <Typography color="#bdbcbc">Responsável</Typography>
          <Slider
            value={valor4}
            step={1}
            min={2}
            max={10}
            onChange={handleChange4}
          />
        </Box>
        <Box sx={{ width: 250 }}>
          <Typography color="#bdbcbc">Comunicativo</Typography>
          <Slider
            value={valor5}
            step={1}
            min={2}
            max={10}
            onChange={handleChange5}
          />
        </Box>
      </Box>
    </Box>
  );
}
