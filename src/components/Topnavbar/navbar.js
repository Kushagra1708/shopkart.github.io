import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        flexShrink: 0,
        bgcolor: "black",
      }}
    >
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid item md={9}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 275,
              lineHeight: "normal",
            }}
          >
            Shopkart
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Stack direction={"row"} spacing={2}>
            <Typography
              sx={{
                color: "#FFF",

                /* Body text 14 */
                fontFamily: "Work Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              WISHLIST (0)
            </Typography>
            <Typography
              sx={{
                color: "#FFF",

                /* Body text 14 */
                fontFamily: "Work Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              BAG (0)
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" light={true} />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        {Object.keys(navbar).map((nav, index) => {
          return (
            <Grid item md={2.5} key={index}>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                {navbar[nav].name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Navbar;
