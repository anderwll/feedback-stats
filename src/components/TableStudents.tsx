import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { Student } from "../store/typeStore";
import ModalStudent from "./ModalStudent";

interface TableStudentsProps {
  listStudents: Array<Student>;
}

const TableStudents: React.FC<TableStudentsProps> = ({ listStudents }) => {
  const [openModal, setOpenModal] = useState(false);
  const [studentId, setStudentId] = useState(-1);

  const handleModal = (id: number) => {
    setOpenModal(!openModal);
    setStudentId(id);
  };

  return (
    <Grid container paddingX={3} justifyContent={"center"} marginTop={4}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Curso</TableCell>
                <TableCell align="center">Ver mais</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listStudents.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.course}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="secondary"
                      variant="contained"
                      sx={{ margin: "0 15px" }}
                      onClick={() => handleModal(row.id)}
                    >
                      <Visibility />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <ModalStudent
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        id={studentId}
      />
    </Grid>
  );
};

export default TableStudents;
