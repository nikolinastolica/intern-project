import React, { useEffect, useState } from "react";
import { useStyles } from "../styles/style";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Box,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CardActionArea,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";

export default function PostCard({ posts, total }) {
  const classes = useStyles();

  const [loader, setLoader] = useState(true);
  const headers = {
    "app-id": "6251f36b02d53d194774b36f",
  };

  const deleteHandler = async (id) => {
    const response = await axios.delete(`https://dummyapi.io/data/v1/post/${id}`, { headers }).then(
      (response) => {
        console.log("Delete successful");
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload(true);
  };
  return (
    <Grid container>
      {total > 0 &&
        posts.map((post) => (
          <Grid item xs={12} md={4} lg={4} className={classes.cardcontainer}>
            <Card className={classes.maincard}>
              <CardHeader
                avatar={<Avatar src={post.owner.picture} />}
                title={
                  <Typography>
                    {post.owner.firstName} {post.owner.lastName}
                  </Typography>
                }
                action={
                  <IconButton onClick={() => deleteHandler(post.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <CardActionArea href={"/profile/" + post.id}>
                  <CardMedia className={classes.media} image={post.image} />
                </CardActionArea>

                <Box className={classes.commentContainer}>
                  <Box className={classes.favIcon}>
                    <FavoriteIcon />
                    {post.likes}
                  </Box>
                  <Box className={classes.tagContainer}>
                    {post.tags.length > 0 && post.tags.map((tag) => <Box className={classes.tag}>#{tag.trim()} </Box>)}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
