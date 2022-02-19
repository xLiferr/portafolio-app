import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onChangeName = (e: string) => setName(e);
  const onChangeMail = (e: string) => setMail(e);
  const onChangeMessage = (e: string) => setMessage(e);

  function sendEmail() {
    const templateParams = {
      from_name: name,
      to_name: "Lucas",
      message: message,
      reply_to: mail,
    };
    console.log(templateParams);
    emailjs
      .send(
        "service_48i99zu",
        "template_wr87mxo",
        templateParams,
        "user_7xS0O1LVRvq1Jj87hiybl"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
        Contacto
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: { xs: "25ch", sm: "45ch", md: "60ch" },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ textAlign: "center" }}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={mail}
            onChange={(e) => onChangeMail(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <TextField
            id="outlined-textarea"
            label="Mensaje"
            placeholder="Mensaje"
            multiline
            value={message}
            onChange={(e) => onChangeMessage(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <Button variant="outlined" onClick={() => sendEmail()}>
            Enviar
          </Button>
        </div>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Mensaje enviado correctamente.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Contact;
