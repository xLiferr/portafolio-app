import * as React from "react";

import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import python from "../../assets/icons/icons8-python.svg";
import js from "../../assets/icons/icons8-javascript.svg";
import pg from "../../assets/icons/icons8-postgresql.svg";
import html from "../../assets/icons/icons8-html-5.svg";
import java from "../../assets/icons/icons8-logotipo-de-java-coffee-cup.svg";
import unity from "../../assets/icons/icons8-unidad.svg";
import css from "../../assets/icons/icons8-css3.svg";
import bi from "../../assets/icons/7417369_power-bi_softwares_logo_apps_icon.svg";
import git from "../../assets/icons/icons8-gitlab.svg";
import rea from "../../assets/icons/icons8-reaccionar-nativo.svg";
import ts from "../../assets/icons/icons8-typescript.svg";
import node from "../../assets/icons/icons8-nodejs.svg";
import Zoom from "@mui/material/Zoom";

const fotos = [python, java, js, ts, node, pg, bi, unity, html, css, rea, git];

const Skills = () => {
  return (
    <Paper
      square
      elevation={3}
      sx={{ marginTop: "1rem", padding: "0 1rem 1rem 1rem" }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ padding: "1rem", textAlign: "center", flexGrow: 1 }}
      >
        Habilidades
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 9, md: 12 }}
        sx={{ marginTop: "1rem" }}
      >
        {fotos.map((foto, i) => {
          return (
            <Zoom in={true} style={{ transitionDelay: "350ms" }}>
              <Grid item key={i} xs={2} sm={3} md={2}>
                <Card
                  sx={{
                    margin: "0 auto",
                    maxWidth: { xs: "150px", sm: "250px", md: "200px" },
                    background: "#c0c0c0",
                    minHeight: "90%",
                  }}
                >
                  <CardMedia component="img" image={foto} />
                </Card>
              </Grid>
            </Zoom>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Skills;
