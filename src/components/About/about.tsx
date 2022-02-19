import * as React from "react";

import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import ucn from "../../assets/img/ucn.png";
import Grid from "@mui/material/Grid";

const About = () => {
  const birth = new Date("January 10, 1997");
  const years = new Date().getFullYear() - birth.getFullYear();

  return (
    <Paper
      square
      elevation={3}
      sx={{ marginTop: "5rem", padding: "0 1rem 1rem 1rem" }}
    >
      <Grid
        sx={{ marginTop: "1rem" }}
        container
        spacing={2}
        alignItems="stretch"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          sm={6}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", flexGrow: 1 }}
          >
            Sobre Mi
          </Typography>
          <Avatar
            src={ucn}
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "1rem", flexGrow: 1 }}
          >
            - {years} años
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "1rem", flexGrow: 1 }}
          >
            - Ingeniería Civil en Computación e Informática
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "1rem", flexGrow: 1 }}
          >
            - Universidad Católica del Norte
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "1rem", flexGrow: 1 }}
          >
            - Coquimbo, Chile
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              paddingBottom: "1rem",
              marginLeft: "1rem",
              flexGrow: 1,
            }}
          >
            Soy un estudiante de 4to año de mi carrera. Me considero una persona
            proactiva, versátil, motivada, con experiencia trabajando en equipo
            y ocupando metedologías ágiles (como scrum). Me gusta explorar las
            diferentes ramas de la informática por lo que estoy aprendiendo
            constantemente.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingBottom: "1rem", marginLeft: "1rem", flexGrow: 1 }}
          >
            En mi tiempo libre me gusta programar, jugar videojuegos y leer o
            ver videos sobre temas que sean interesantes.
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingBottom: "1rem", marginLeft: "1rem", flexGrow: 1 }}
          >
            Como podrán observar en la parte de abajo, he participado en el
            desarrollo de algunos proyectos a nivel de universidad que me han
            servido para adquirir ciertas habilidades y aprender sobre diversas
            herramientas de mucha utilidad.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
