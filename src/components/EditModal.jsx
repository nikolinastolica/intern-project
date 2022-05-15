import React, { useState } from "react";
import axios from "axios";

import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
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
const EditModal = ({ id }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [tagValue, setTagValue] = useState([]);

  const headers = {
    "app-id": "6251f36b02d53d194774b36f",
  };

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const editHandler = async () => {
    setModalOpen(false);
    if (tagValue.length === 0) {
      var tagsArray = [];
    } else {
       var tagsArray = tagValue.split(",");
    }

    const res = await axios
      .put(
        `https://dummyapi.io/data/v1/post/${id}`,
        {
          text,
          image,
          tags: tagsArray,
        },
        { headers }
      )
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    window.location.reload(true);
  };

  return (
    <Box>
      <Button onClick={handleClickOpen}>
        <Box>
          <EditIcon />
        </Box>
      </Button>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Box className={classes.dialogHeader}>
            Edit
            <Button onClick={handleClose} color="primary">
              <CloseIcon />
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent dividers={true}>
          <Box className={classes.formCenterBox}>
            <TextField
              className={classes.inputContainer}
              id="text"
              label="Text"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              className={classes.inputContainer}
              id="image"
              label="ImageURL"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              className={classes.inputContainer}
              id="Tags"
              label="Tag,tag,tag"
              defaultValue=""
              variant="outlined"
              onChange={(e) => setTagValue(e.target.value)}
            />

            <Button variant="outlined" onClick={editHandler}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EditModal;
