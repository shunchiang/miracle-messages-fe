import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    marginLeft: "10%",
    marginTop: "5vh",
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function AdminSearchBar(props) {
  const classes = useStyles();

  useEffect(() => {
    props.setSearchArray(
      props.chapterData.filter((chapter) =>
        props.searchTerm
          ? chapter.city
              .toUpperCase()
              .includes(props.searchTerm.toUpperCase()) ||
            chapter.state.toUpperCase().includes(props.searchTerm.toUpperCase())
          : null
      )
    );
  }, [props.searchTerm]);

  const handleChange = (e) => {
    props.setSearchTerm(e.target.value);
    console.log(props.searchTerm);
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu"></IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Chapters"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChange}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}