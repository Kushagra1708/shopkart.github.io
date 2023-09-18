import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { React, Fragment } from "react";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
