import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import BlogPosts from "../BlogPosts";
import useStyles from "./styles";

const Blogs = () => {
  const posts = useSelector((state) => state.blogPosts);
  const classes = useStyles();

  console.log("this is post", posts);

  return (
    <>
      <BlogPosts />
    </>
  );
};

export default Blogs;