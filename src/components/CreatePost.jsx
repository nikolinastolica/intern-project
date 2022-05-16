import React, { useState } from "react";
import axios from "axios";

import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  formCenterBox: {
    display: "flex",
    flexDirection: "column",
    height: "40%",
    margin: "20px 20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonCreate: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "50px",
    marginBottom: "20px",
  },
}));

const CreatePost = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const headers = {
    "app-id": "6251f36b02d53d194774b36f",
  };
  const [owner, setOwner] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const [likes, setLikes] = useState(0);
  const [tagValue, setTagValue] = useState([]);
  const [publishDate, setPublishDate] = useState([]);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  const createHandler = async () => {
    setModalOpen(false);
    if (tagValue.length === 0) {
      var tagsArray = [];
    } else {
      var tagsArray = tagValue.split(",");
    }

    const data = {
      text: text,
      image: image,
      likes: Math.floor(Math.random() * 10),
      tags: tagsArray,
      owner: owner,
      //publishDate: publishDate,
    };

    const res = await axios.post(`https://dummyapi.io/data/v1/post/create`, { data }, { headers }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log("Post", data);
    setModalOpen(false);
    //window.location.reload(true);
  };

  return (
    <Box>
      <Button variant="outlined" className={classes.buttonStyle} onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Box variant="contained" className={classes.dialogHeader}>
            CreatePost
            <Button onClick={handleClose} color="primary">
              <CloseIcon />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className={classes.formCenterBox}>
            <TextField
              className={classes.inputContainer}
              id="owner"
              label="OwnerId"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setOwner(e.target.value)}
            />
            <TextField
              className={classes.inputContainer}
              id="image"
              label="Image"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              className={classes.inputContainer}
              id="text"
              label="Comment"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              className={classes.inputContainer}
              id="Tags"
              label="Tag,tag,tag"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setTagValue(e.target.value)}
            />

            <TextField
              className={classes.inputContainer}
              id="PublishDate"
              type="date"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setPublishDate(e.target.value)}
            />
            <Button variant="outlined" onClick={() => createHandler()}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CreatePost;
