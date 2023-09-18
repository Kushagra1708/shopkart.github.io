import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChildImage from "../../images/apg.png";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "white",
            "--TextField-brandBorderHoverColor": "white",
            "--TextField-brandBorderFocusedColor": "white",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });
const Bottombar = () => {
  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box>
        <Box
          sx={{
            width: "1440px",
            height: "520px",
            flexShrink: 0,
            backgroundImage: `url(${ChildImage})`,
          }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item md={5}>
              <Stack direction={"column"} spacing={0}>
                <Typography
                  sx={{
                    // width: "385px",
                    // height: "52px",
                    // flexShrink: 0,
                    color: "#808080",

                    /* Subtitles */
                    // fontFamily: "Syne",
                    fontSize: 48,
                    // fontStyle: "normal",
                    fontWeight: 300,
                  }}
                >
                  Newslleter
                </Typography>
                <Typography
                  sx={{
                    // width: "337px",
                    // height: "52px",
                    // flexShrink: 0,
                    // fontFamily: "Work Sans",
                    fontSize: 18,
                    // fontStyle: "normal",
                    fontWeight: 400,
                    // lineHeight: "normal",
                    color: "#808080",
                  }}
                >
                  Get news about articles and updates in your inbox.
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={5}>
              <Stack direction={"column"} spacing={2}>
                <TextField
                  variant="standard"
                  label="Name"
                  InputLabelProps={{
                    style: {
                      color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                    },
                  }}
                />
                <TextField
                  variant="standard"
                  label="Email"
                  InputLabelProps={{
                    style: {
                      color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                    },
                  }}
                />
                <TextField
                  variant="standard"
                  label="Message"
                  InputLabelProps={{
                    style: {
                      color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Grid item md={10}>
              {/* <Stack direction={"column"}> */}
              <Typography
                sx={{
                  //   width: "1159px",
                  //   height: "236px",
                  //   flexShrink: 0,
                  fontFamily: "Syne",
                  fontSize: 135,
                  fontStyle: "normal",
                  fontWeight: 800,
                  //   lineHeight: "102.6px",
                  color: "white",
                }}
              >
                GET
              </Typography>
              <Typography
                sx={{
                  //   width: "1159px",
                  //   height: "236px",
                  //   flexShrink: 0,
                  fontFamily: "Syne",
                  fontSize: 135,
                  fontStyle: "normal",
                  fontWeight: 800,
                  // lineHeight: "102.6px",
                  color: "white",
                }}
              >
                IN TOUCH
              </Typography>
              {/* </Stack> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Bottombar;
