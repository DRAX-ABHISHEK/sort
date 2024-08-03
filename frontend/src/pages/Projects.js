import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const Projects = () => {
  const projectData = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5">{project.title}</Typography>
              <Typography>{project.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
