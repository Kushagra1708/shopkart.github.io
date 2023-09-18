import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Footer from "../components/Footer/footer";
import Bottombar from "../components/Topnavbar/bottombar";
import Layerone from "../components/Topnavbar/layerone";
import Midbar from "../components/Topnavbar/midbar";
import Navbar from "../components/Topnavbar/navbar";
import Topnavbar from "../components/Topnavbar/topnavbar";
import { useEffect, useState } from "react";
import axios from "axios";
const theme = createTheme({
  typography: {
    fontFamily: ["Syne"],
  },
});
const Home = () => {
  const [val, setValue] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((ele) => {
      if (ele.status === 200) {
        setValue(ele.data);
      }
    });

    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     if (json) {
    //       console.log(json, "inside if");
    //       setValue(json);
    //     }
    //   });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topnavbar />
      <Navbar />
      <Layerone />
      <Midbar value={val} />
      <Bottombar />
      <Footer />
    </ThemeProvider>
  );
};
export default Home;
