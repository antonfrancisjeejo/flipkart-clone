import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 36,
  },
}));

const Search = () => {
  const classes = useStyle();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        className="pl-2"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
