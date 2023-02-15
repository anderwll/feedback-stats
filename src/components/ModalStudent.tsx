import React, { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { Student } from "../store/typeStore";
import Graphic from "./Graphic";

interface ModalStudentProps {
  isOpen: boolean;
  handleClose: () => void;
  id: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40rem",
  height: "45rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const ModalStudent: React.FC<ModalStudentProps> = ({
  isOpen,
  handleClose,
  id,
}) => {
  const listStudents = useAppSelector((state) => state.students);
  const [student, setStudent] = useState<Student>();
  const [dados, setDados] = useState<any>();

  useEffect(() => {
    if (id) {
      setStudent(listStudents.find((student) => student.id === id));
    }
  }, [id, listStudents]);

  useEffect(() => {
    if (student) {
      setDados(student.qualities);
    }
  }, [student, listStudents]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <img
              src={student?.imgUrl}
              alt="img-perfil"
              style={{ width: 180, borderRadius: 100 }}
            />
          </Box>
          <Box sx={{ marginLeft: 4 }}>
            <Typography variant="caption">Nome</Typography>
            <Typography variant="h6">{student?.name}</Typography>
            <Typography variant="caption">Idade</Typography>
            <Typography variant="h6">{student?.age}</Typography>
            <Typography variant="caption">Curso de formação</Typography>
            <Typography variant="h6">{student?.course}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Graphic listQualities={dados} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalStudent;