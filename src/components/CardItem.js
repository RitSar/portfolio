import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#818181",
    },
    background: {
      paper: "#242424",
    },
  },
  typography: {
    fontFamily: [
      "Trebuchet MS",
      "Lucida Sans Unicode",
      "Lucida Grande",
      "Lucida Sans",
    ].join(","),
  },
});

export default function CardItem(props) {
  const classes = useStyles();
  let webLink;
  if (props.web === "none") {
    webLink = null;
  } else {
    webLink = (
      <Button size="small" color="primary">
        <a href={props.web} target="_blank" rel="noopener noreferrer">
          Go to website
        </a>
      </Button>
    );
  }
  let githubLink;
  if (props.github === "none") {
    githubLink = null;
  } else {
    githubLink = (
      <Button size="small" color="primary">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          View code
        </a>
      </Button>
    );
  }

  return (
    <div className="cardBox">
      <ThemeProvider theme={darkTheme}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project"
              height="170"
              image={props.src}
              title="Project image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {webLink}
            {githubLink}
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// function CardItem(props) {
//   return (
//     <>
//       <li className="cards__item">
//         <a className="cards__item__link" href={props.path}>
//           <figure className="cards__item__pic-wrap" data-category={props.label}>
//             <img className="cards__item__img" alt="Travel" src={props.src} />
//           </figure>
//           <div className="cards__item__info">
//             <h5 className="cards__item__text">{props.text}</h5>
//           </div>
//         </a>
//       </li>
//     </>
//   );
// }

// export default CardItem;
