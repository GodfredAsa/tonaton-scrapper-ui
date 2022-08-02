import * as React from "react";
import classes from "./category.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CategoryForm from "./CategoryForm";

const Category = () => {
  return (
    <Container className={classes.category}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2.5}>
            <Typography className={classes["category-title"]}>
              Select Category
            </Typography>
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Box sx={{ minWidth: 100 }}>
              <CategoryForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Category;
