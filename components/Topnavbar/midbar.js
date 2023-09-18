import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const Midbar = (props) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            width: "689px",
            height: "151px",
            flexShrink: 0,
            color: "var(--Grey-scale-1000, #000)",

            /* H2 title */
            fontFamily: "Syne",
            fontSize: "90px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          New Prodcuts
        </Typography>

        <Box
          sx={{
            width: "648px",
            height: "1px",
            background: "var(--Grey-scale-1000, #161615)",
          }}
        >
          -
        </Box>

        <Grid container>
          <Grid item md={2}>
            <Stack direction={"column"} spacing={3}>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Apparel
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Subtitles */
                  fontFamily: "Syne",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Accessories
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Best sellers
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                50% OFF
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={10}>
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  overflowX: "auto",
                  display: "flex",
                  // overflow: "hidden",
                }}
              >
                {props.value &&
                  props.value.map((val, index) => (
                    <Grid item md={5}>
                      <Items key={index} value={val} />
                    </Grid>
                  ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Midbar;

const Items = ({ value }) => {
  return (
    <Card sx={{ height: 450, width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={value.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "var(--Grey-scale-1000, #000)",
              fontSize: 26,
              fontWeight: 400,
            }}
          >
            {value.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: 200,
              wrap: true,
            }}
          >
            {value.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {value.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
