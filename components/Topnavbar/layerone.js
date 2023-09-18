import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import ChildImage from "../../images/jgcap.png";
const Layerone = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "749px",
          flexShrink: 0,
          zIndex: -1,
          // opacity: 0.5,
          bgcolor: "black",
          position: "absolute",
          // mixBlendMode: "overlay",
        }}
      >
        <Box
          sx={{
            width: "993px",
            height: "354px",
            flexShrink: 0,
            ml: 65,
            marginTop: 30,
            right: 0,
            // opacity: 0.2,
            background: "var(--Pimary-colour, #F07E15)",
          }}
        ></Box>

        {/* <img src="./images/rg.png" alt="" /> */}
        {/* <Grid>
        <Grid>
          <Box
            sx={{
              width: "100%",
              height: "654.951px",
              flexShrink: 0,
            }}
          >
            <img src="./images/jgcap.png" alt="" />
          </Box>
        </Grid>

        <Typography
          sx={{
            width: "100%",
            height: "151px",
            flexShrink: 0,
            color: "balck",

            fontFamily: "Syne",
            fontSize: "135px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "102.6px",
          }}
        >
          Fresh
        </Typography>
      </Grid> */}
      </Box>
      <Box>
        <Grid container>
          <Grid item md={8}>
            <Stack direction={"column"} spacing={0}>
              <Typography
                component={"div"}
                sx={{
                  position: "relative",
                  // zIndex: -1,
                  fontSize: 170,
                  width: 200,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Fresh
              </Typography>
              <Typography
                component={"div"}
                sx={{
                  // position: "relative",
                  // zIndex: -1,
                  fontSize: 170,
                  width: 200,
                  ml: 60,
                  fontFamily: "Syne",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                2022
              </Typography>
              <Typography
                component={"div"}
                sx={{
                  position: "relative",
                  // zIndex: -1,
                  fontSize: 170,
                  width: 200,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Look
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Box
              // component={"div"}
              sx={{
                mb: 100,
                width: "100%",
                height: "100%",
                flexShrink: 0,
                position: "relative",
                backgroundSize: "cover",
                backgrouundRepeat: "no-repeat",

                backgroundImage: `url(${ChildImage})`,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Layerone;
