import { Typography, Grid, Box } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Grid item md={12}>
        <Box
          sx={{
            backgroundColor: "black",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 12,
            }}
          >
            copyright 2023-24 | All Rights reserved by SG
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Footer;
