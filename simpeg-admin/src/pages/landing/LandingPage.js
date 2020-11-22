import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

function LandingPage({ classes }) {


  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            SIMPEG
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Data Saja sih... 
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="outlined" color="secondary">
                  <Link to="login">LOGIN</Link>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  <Link to="register">REGISTER</Link>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://firebasestorage.googleapis.com/v0/b/fire-crud1.appspot.com/o/gbrtpa.jpeg?alt=media&token=b615ae23-f3da-46c3-b6af-e5e5cf4edf64"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Bla Bla Bla
                </Typography>
                <Typography>
                  Bla bla bla
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="default">
                  <Link to="/landingresidu">Lihat</Link>
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://firebasestorage.googleapis.com/v0/b/fire-crud1.appspot.com/o/gbrsampah3r.jpeg?alt=media&token=f5f7ef8f-0def-4ac0-8d76-45161b1427eb"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Bla Bla Bla
                </Typography>
                <Typography>
                Bla Bla Bla{" "}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="default">
                  <Link to="/landingsampah3r">Lihat</Link>
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://firebasestorage.googleapis.com/v0/b/fire-crud1.appspot.com/o/gbrsampahinduk.jpeg?alt=media&token=02f3233a-71e5-45f2-85f1-3fceae51d1ea"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Bla Bla Bla
                </Typography>
                <Typography>Bla Bla Bla</Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" color="default">
                  <Link to="/landingbank">Lihat</Link>
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default LandingPage;
