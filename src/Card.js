import React, { useEffect, useState } from "react";
import { useStyles } from "./styles/style";
import SinglePage from "./SinglePage";
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
  Modal,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import axios from "axios";

export default function PostCard() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const fetchData = async () => {
    const resultPhotos = await axios.get("https://jsonplaceholder.typicode.com/photos?_page={page}&_limit=21");

    setPhotos(resultPhotos.data);
  };
  useEffect(async () => {
    fetchData();
  }, []);



  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <div className={classes.container}>
      {photos.length > 0 && (
        <Grid container>
          {photos.map((photo) => (
            <Grid item xs={4} className={classes.cardcontainer}>
              <Card className={classes.maincard} key={photo.id}>
                <CardHeader
                  title={photo.id}
                  action={
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  }
                />
                <CardContent>
                  <CardActionArea>
                    <CardMedia key={photo.id} className={classes.media} image={photo.url} title={photo.title} />

                    <Typography>{photo.title}</Typography>
                  </CardActionArea>
                  <Button onClick={handleOpen}>More info</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                  </Modal>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Pagination
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        className={classes.pagination}
        count={3}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
}
