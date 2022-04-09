import React, { useEffect, useState } from "react";
import { useStyles } from "./styles/style";
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

export default function SinglePage() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <CardActionArea>
          <CardMedia className={classes.media} />

          <Typography></Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
