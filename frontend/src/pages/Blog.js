import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const Blog = () => {
  const blogPosts = [
    { title: "Blog Post 1", excerpt: "Excerpt of blog post 1" },
    { title: "Blog Post 2", excerpt: "Excerpt of blog post 2" },
    { title: "Blog Post 3", excerpt: "Excerpt of blog post 3" },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5">{post.title}</Typography>
              <Typography>{post.excerpt}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
