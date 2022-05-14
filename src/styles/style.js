import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  maincard: {
    width: "300px",
    height: "400px",
    margin: "5px",
  },
  singleCard: {
    width: "50%",
    height: "100%",
  },

  media: {
    paddingTop: "80%",
  },
  container: {
    margin: "336px 76px 112px 76px",
    // marginTop: "336px",
    //marginBottom: "112px",
    backgroundColor: "#FFFFFF",
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10%",
  },
  paginationWrap: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  loader: {
    margin: "20% 50%",
  },
  tag: {
    display: "inline",
  },
  tagContainer: {
    marginTop: "10px",
  },
  commentContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "10px",
  },
  deleteIcon: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0",
  },
  favIcon: {
    display: "flex",
    justifyContent: "center",
  },
  formCenterBox: {
    display: "flex",
    flexDirection: "column",
    height: "30%",
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

  buttonBack: {
    display: "flex",
    justifyContent: "flex-end",
  },

  singlePageContainer: {
    margin: "10% auto 20% auto",
  },
  homeContainer: {
    margin: "10% auto 20% auto",
  },
  title: {
    color: "#800080",
  },
}));

export { useStyles };
