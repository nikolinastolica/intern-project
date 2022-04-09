import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  maincard: {
    width: "300px",
    height: "400px",
    margin: "5px",
  },
  media: {
    height: 0,
    paddingTop: "70%",
  },
  container: {
    margin: "336px 76px 112px 76px",
    // marginTop: "336px",
    //marginBottom: "112px",
    backgroundColor: "#290746",
  },
  cardcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "5%",
  },
  paginationWrap: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
}));

export { useStyles }
