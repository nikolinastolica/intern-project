import React, { useEffect, useState } from "react";
import { useStyles } from "../styles/style";
import axios from "axios";
import CreatePost from "./CreatePost";

import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Box,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
  CardActionArea,
  CircularProgress,
  Container,
  Avatar,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";

export default function Home() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState();

  const [loader, setLoader] = useState(true);
  const headers = {
    "app-id": "6251f36b02d53d194774b36f",
  };

  const [page, setPage] = useState(1);
  const handleChangePage = (event, page) => {
    setPage(page);
  };

  useEffect(async () => {
    setLoader(true);
    await axios
      .get(`https://dummyapi.io/data/v1/post?page=${page}&limit=21`, {
        headers,
      })
      .then((res) => {
        setTotal(res.data.total);
        setPosts(res.data.data);
      });
    setLoader(false);
    console.log("total", total);
  }, [page]);

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
    <Container className={classes.homeContainer}>
      <Typography variant="h1" className={classes.title}>
        PostIt
      </Typography>
      <Box className={classes.buttonCreate}>
        <CreatePost />
      </Box>

      {loader && <CircularProgress className={classes.loader} />}
      {!loader && (
        <>
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
                          {post.tags.length > 0 &&
                            post.tags.map((tag) => <Box className={classes.tag}>#{(tag.trim())} </Box>)}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
      <Box className={classes.pagination}>
        <Pagination
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          count={Math.ceil(total / 21)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Container>
  );
}
