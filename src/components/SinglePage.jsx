import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useStyles } from "../styles/style";
import EditModal from "./EditModal";

import axios from "axios";

import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
  CardActionArea,
  CircularProgress,
  Container,
  Avatar,
  Box,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function SinglePage() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  let { id } = useParams();

  const [loader, setLoader] = useState(true);
  const headers = {
    "app-id": "6251f36b02d53d194774b36f",
  };

  useEffect(async () => {
    setLoader(true);

    await axios
      .get(`https://dummyapi.io/data/v1/post/${id}`, {
        headers,
      })
      .then((res) => {
        setPosts(res.data);
      });
    setLoader(false);
    console.log("res", posts);
  }, []);

  return (
    <Container className={classes.singlePageContainer}>
      {loader && <CircularProgress className={classes.loader} />}
      {!loader && (
        <Grid container>
          <Grid item xs={12} md={12} lg={12} className={classes.cardcontainer}>
            <Card className={classes.singleCard}>
              <CardHeader
                avatar={<Avatar src={posts.owner.picture} />}
                title={
                  <Typography>
                    {posts.owner.firstName} {posts.owner.lastName}
                  </Typography>
                }
                action={<EditModal service={posts} />}
              />
              <CardContent>
                <CardMedia className={classes.media} image={posts.image} />

                <Box className={classes.commentContainer}>
                  <Box className={classes.favIcon}>
                    <FavoriteIcon />
                    {posts.likes}
                  </Box>
                  <Box className={classes.tagContainer}>
                  {posts.tags.length>0 && posts.tags.map((tag) => (
                          <Box className={classes.tag}>#{tag} </Box>
                        ))}
                  </Box>
                </Box>
                <Typography>{posts.text}</Typography>
              </CardContent>
              <Grid item xs={12} md={12} lg={12} className={classes.buttonBack}>
                <IconButton href={"/"}>
                  <ArrowBackIosIcon />
                </IconButton>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
