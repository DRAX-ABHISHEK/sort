import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" paragraph>
          I'm a full-stack developer specializing in modern web technologies.
          Here, you'll find a showcase of my projects, blog posts, and more.
        </Typography>
        <Button variant="contained" color="primary" href="/projects">
          View Projects
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
