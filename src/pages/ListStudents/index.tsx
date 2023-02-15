import React from "react";
import { Box, Typography } from "@mui/material";
import TableStudents from "../../components/TableStudents";
import { useAppSelector } from "../../store/hooks";

const ListStudents = () => {
  const listStudent = useAppSelector((state) => state.students);
  const modeDark = useAppSelector((state) => state.darkMode);

  return (
    <Box sx={{ textAlign: "center", background: modeDark ? "#18181b" : "" }}>
      <Typography variant="h4">Lista de estudantes</Typography>
      <TableStudents listStudents={listStudent} />
    </Box>
  );
};

export default ListStudents;
