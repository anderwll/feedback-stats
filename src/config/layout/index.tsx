import React, { useEffect, useState } from "react";
import {
  ArrowBack,
  Home,
  PeopleAlt,
  AddCircleOutline,
  DarkMode,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Button,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { togleDarkMode } from "../../store/modules/darkMode";
import ModalSignature from "../../components/ModalSignature";

interface LayoutDefaultProps {
  componet: JSX.Element;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ componet }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(true);
  const [modalSignature, setModalSignature] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery("(max-width:900px)");
  const modeDark = useAppSelector((state) => state.darkMode);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (mobile) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  }, [navigate, mobile]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalSignature = () => {
    setModalSignature(!modalSignature);
  };

  const handleMode = () => {
    setMode(!mode);
    dispatch(togleDarkMode(mode));
  };

  const drawer = (
    <Box>
      <Box
        sx={{
          height: 50,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Button variant="text" color="inherit" onClick={handleDrawerToggle}>
          <ArrowBack />
        </Button>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon children={<Home />} />
            <ListItemText primary="Página inicial" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/lista-estudantes")}>
            <ListItemIcon children={<PeopleAlt />} />
            <ListItemText primary="Lista de alunos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleModalSignature}>
            <ListItemIcon children={<AddCircleOutline />} />
            <ListItemText primary="Cadastar" />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ position: "fixed", bottom: "0", width: "15rem" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={handleMode}>
            <ListItemIcon children={<DarkMode />} />
            <ListItemText primary="Alterar tema" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{
          height: 70,
          display: "flex",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              modeDark ? "./assets/logo-dark.png" : "./assets/logo-light.png"
            }
            alt="logo"
            style={{ width: 70 }}
          />
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <img
                src="./assets/perfil.jfif"
                alt="perfil"
                style={{ width: 45, borderRadius: 30 }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  navigate("/perfil");
                  handleClose();
                }}
              >
                Conta
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "15rem",
              marginTop: 8.8,
              transition: "all .5s",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        onClick={() => {
          if (mobile) {
            setMobileOpen(false);
          }
        }}
        sx={{
          height: "100vh",
          widht: "100vw",
          marginTop: 8.8,
          width: !mobile && mobileOpen ? "calc(100vw - 15rem)" : "100vw",
          marginLeft: !mobile && mobileOpen ? "15rem" : 0,
          background: mobile && mobileOpen ? "rgba(0,0,0, 0.6)" : "none",
          filter: mobile && mobileOpen ? "brightness(0.5)" : "none",
          backgroundColor: modeDark ? "#18181b" : "",
          padding: mobile ? "1rem 0" : 3,
          transition: "all .3s",
        }}
      >
        {componet}
      </Box>
      <ModalSignature
        isOpen={modalSignature}
        handleClose={handleModalSignature}
      />
    </>
  );
};

export default LayoutDefault;
