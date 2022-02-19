import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import mario from "../../assets/img/mario.jpeg";
import birds from "../../assets/img/angrybirds.png";
import sistga from "../../assets/img/javascript.jpg";
import etl from "../../assets/img/anLISIS.jpg";

import Grow from "@material-ui/core/Grow";

const proyectos = [
  {
    nombre: "Angry Cells",
    descripcion:
      "Colección de 2 videojuegos con temática covid-19 hechos en Unity2D. Uno es inspirado en angry birds y el otro es inspiridado en ping-pong trickshots.",
    img: birds,
    link: "https://github.com/IkariGames/csaplicadas",
  },
  {
    nombre: "EESCR Tutorial",
    descripcion:
      "Tutorial 2D hecho en Unity2D estilo top-down diseñado con el propósito de recrear situaciones de emergencias para personas de avanzada edad.",
    img: mario,
    link: "https://drive.google.com/file/d/10B_Uo2NuWaBFUSjTvMiwa3umyeoD1sPg/view",
  },
  {
    nombre: "Sistema Gestión Ayudantes.",
    descripcion:
      "Plataforma para gestionar ayudantías y sus postulaciones para la escuela de ingeniería UCN sede Coquimbo .",
    img: sistga,
    link: "https://github.com/nicoolasps/sistema_ayudantes",
  },
  {
    nombre: "Análisis de datos",
    descripcion:
      "Diversos análisis de datos, procesos ETL y después visualización de datos mediante PowerBI.",
    img: etl,
    link: "https://github.com/xLiferr/Analiticoo",
  },
];

const Projects = () => {
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
        Projectos
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ marginTop: "1rem" }}
      >
        {proyectos.map((proyecto, i) => {
          return (
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <Grid item key={i} xs={4} sm={4} md={3}>
                <Card
                  sx={{
                    margin: "0 auto",
                    maxWidth: { xs: "350px", sm: "300px", md: "240px" },
                    height: { xs: "350px", sm: "350px", md: "370px" },
                    background: "#c0c0c0",
                  }}
                >
                  <CardActionArea>
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      target="blank"
                      rel="noopener noreferrer"
                      href={proyecto.link}
                    >
                      <CardMedia
                        height="180"
                        component="img"
                        image={proyecto.img}
                      />
                      <CardContent>
                        <Typography
                          color={"#22272B"}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {proyecto.nombre}
                        </Typography>
                        <Typography color={"#22272B"} variant="body2">
                          {proyecto.descripcion}
                        </Typography>
                      </CardContent>
                    </a>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grow>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Projects;
