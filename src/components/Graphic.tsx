import React from "react";
import { Box, useMediaQuery } from "@mui/material";
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
  const mobile = useMediaQuery("(max-width:900px)");

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
      <RadarChart
        cy={200}
        width={600}
        height={mobile ? 300 : 350}
        data={listQualities}
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
  );
};

export default Graphic;
