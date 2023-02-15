import React from "react";
import { Box } from "@mui/material";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Qualities } from "../store/typeStore";

interface GraphicProps {
  listQualities: Array<Qualities> | undefined;
}

const Graphic: React.FC<GraphicProps> = ({ listQualities }) => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RadarChart cy={200} width={600} height={400} data={listQualities}>
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
          fill="#015fe1"
          fillOpacity={0.8}
        />
      </RadarChart>
    </Box>
  );
};

export default Graphic;
