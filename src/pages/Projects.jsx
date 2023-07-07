import card from "../card";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Projects() {
  const cards = card.map((item) => {
    return (
      <Card
        sx={{
          maxWidth: 280,
          height: "100%",
          bgcolor: "#1f2428",
          color: "#fff",
          mt: 2,
          mr: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.img_card}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.card_title}
            </Typography>
            <Typography variant="body2" noWrap>
              {item.card_desc}
            </Typography>
          </CardContent>
          {item.what_use.map((el) => (
            <Chip
              sx={{ ml: 2, mt: 1, color: "#fff" }}
              className={`${el}`}
              label={el}
              variant="outlined"
            ></Chip>
          ))}
          <CardActions sx={{ my: 1, mx: 1 }}>
            <a href={item.source_code} target="_blank">
              <Button
                sx={{ color: "#fff", borderColor: "#fff" }}
                size="small"
                variant="outlined"
              >
                Source Code
              </Button>
            </a>
            <a href={item.live_demo} target="_blank">
              <Button
                sx={{ color: "#fff", borderColor: "#fff" }}
                size="small"
                variant="outlined"
              >
                Live Demo
              </Button>
            </a>
          </CardActions>
        </CardActionArea>
      </Card>
    );
    // return (
    //   <div className="projects-card">
    //     <div className="project-card-img">
    //       <img src={item.img_card} alt="" className="card-img" />
    //     </div>
    //     <h3 className="card-title">{item.card_title}</h3>
    //     <p className="description">{item.card_desc}</p>
    //     <div className="what-i-use">
    //       {item.what_use.map((el) => (
    //         <span className={`program-used ${el}`}>{el}</span>
    //       ))}
    //     </div>
    //     <div className="card-footer">
    //       <a href={item.source_code} target="_blank">
    //         {" "}
    //         <button className="source-code">Source Code</button>
    //       </a>
    //       <a href={item.live_demo} target="_blank">
    //         {" "}
    //         <button className="live-demo">Live Demo</button>
    //       </a>
    //     </div>
    //   </div>
    // );
  });

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>What I've Build So Far</h1>
        <div className="projects-cards">{cards}</div>
      </div>
    </div>
  );
}

export default Projects;
