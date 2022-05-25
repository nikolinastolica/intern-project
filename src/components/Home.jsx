import React, { useEffect, useState } from "react";
import { useStyles } from "../styles/style";
import axios from "axios";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

import { Box, Typography, CircularProgress, Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

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

  return (
    <Container className={classes.homeContainer}>
      <Typography variant="h1" className={classes.title}>
        PostIt
      </Typography>
      <Box className={classes.buttonCreate}>
        <CreatePost />
      </Box>

      {loader && <CircularProgress className={classes.loader} />}
      {!loader && <PostCard posts={posts} total={total} />}
      <Box className={classes.pagination}>
        <Pagination
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          count={Math.floor(total / 21)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Container>
  );
}
